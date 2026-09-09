import "dotenv/config"
import { ingestChatbotKnowledge } from "../lib/ai/ingestion/run"

const summary = await ingestChatbotKnowledge()
console.table(summary)
if (summary.errors.length) process.exitCode = 1
