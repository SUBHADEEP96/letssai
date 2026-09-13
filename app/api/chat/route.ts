import { z } from "zod"
import { streamLetssAIAgent } from "@/lib/ai/letssai-agent/stream"
import type { StreamEvent } from "@/lib/ai/letssai-agent/types"

export const runtime = "nodejs"
const requestSchema = z.object({ messages: z.array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().trim().min(1).max(2000) })).min(1).max(20) })
const headers = { "Content-Type": "application/x-ndjson; charset=utf-8", "Cache-Control": "no-cache, no-transform", Connection: "keep-alive", "X-Accel-Buffering": "no" }

const responseFromEvents = (createEvents: (signal: AbortSignal) => AsyncIterable<StreamEvent>, requestSignal?: AbortSignal, status = 200) => {
  const encoder = new TextEncoder()
  const abortController = new AbortController()
  requestSignal?.addEventListener("abort", () => abortController.abort(), { once: true })
  return new Response(new ReadableStream({
    async start(controller) {
      try {
        for await (const event of createEvents(abortController.signal)) {
          if (abortController.signal.aborted) break
          controller.enqueue(encoder.encode(`${JSON.stringify(event)}\n`))
        }
      } catch {
        if (!abortController.signal.aborted) controller.enqueue(encoder.encode(`${JSON.stringify({ type: "error", message: "The assistant is temporarily unavailable. Please try again or contact LetssAI." })}\n`))
      } finally { controller.close() }
    },
    cancel() { abortController.abort() },
  }), { status, headers })
}
async function* one(event: StreamEvent) { yield event }

export async function POST(request: Request) {
  const parsed = requestSchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return responseFromEvents(() => one({ type: "error", message: "Please enter a shorter question and try again." }), request.signal, 400)
  if (!process.env.OPENAI_API_KEY) return responseFromEvents(() => one({ type: "error", message: "The LetssAI assistant is currently unavailable because AI access is not configured." }), request.signal, 503)
  return responseFromEvents((signal) => streamLetssAIAgent(parsed.data.messages, signal), request.signal)
}
