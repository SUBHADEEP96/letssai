import { getLlmsFullTxt } from "@/lib/llms-content"

export const dynamic = "force-static"

export async function GET() {
  const content = getLlmsFullTxt()
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
