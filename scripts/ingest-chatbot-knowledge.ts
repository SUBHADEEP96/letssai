import { config } from "dotenv"
config({ path: ".env.local", override: false, quiet: true })
config({ path: ".env", override: false, quiet: true })
import { ingestChatbotKnowledge } from "../lib/ai/ingestion/run"

const summary = await ingestChatbotKnowledge()
console.table(summary)
if (summary.errors.length) process.exitCode = 1
