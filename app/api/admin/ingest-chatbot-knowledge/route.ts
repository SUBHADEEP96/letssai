import { timingSafeEqual } from "node:crypto"
import { NextResponse } from "next/server"
import { ingestChatbotKnowledge } from "@/lib/ai/ingestion/run"

export const runtime = "nodejs"
function authorized(request: Request) {
  const expected = process.env.INGEST_SECRET
  const supplied =
    request.headers.get("x-ingest-secret") ||
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "")
  if (!expected || !supplied || expected.length !== supplied.length)
    return false
  return timingSafeEqual(Buffer.from(expected), Buffer.from(supplied))
}
export async function POST(request: Request) {
  if (!authorized(request))
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  const summary = await ingestChatbotKnowledge()
  return NextResponse.json(summary, {
    status: summary.errors.length ? 500 : 200,
  })
}
