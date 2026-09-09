import { NextResponse } from "next/server"
import { z } from "zod"
import { runLetssAIAgent } from "@/lib/ai/letssai-agent/graph"

export const runtime = "nodejs"
const requestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(2000),
      })
    )
    .min(1)
    .max(20),
})

export async function POST(request: Request) {
  const parsed = requestSchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success)
    return NextResponse.json(
      { message: "Please enter a shorter question and try again." },
      { status: 400 }
    )
  if (!process.env.OPENAI_API_KEY)
    return NextResponse.json({
      demo: true,
      message:
        "The LetssAI assistant is currently in demo mode because AI access is not configured. I can still point you to our services or you can contact LetssAI for help with your workflow.",
      suggestContact: true,
    })
  try {
    return NextResponse.json(await runLetssAIAgent(parsed.data.messages))
  } catch {
    return NextResponse.json(
      {
        message:
          "The assistant is temporarily unavailable. Please try again or contact LetssAI.",
        suggestContact: true,
      },
      { status: 503 }
    )
  }
}
