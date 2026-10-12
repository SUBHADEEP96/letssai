import { NextResponse } from "next/server"
import { siteConfig } from "@/lib/site"

export async function POST(req: Request) {
  try {
    const apiKey = process.env.INDEXNOW_KEY || process.env.NEXT_PUBLIC_INDEXNOW_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: "INDEXNOW_KEY environment variable is not configured" },
        { status: 500 }
      )
    }

    const host = new URL(siteConfig.url).host
    const body = await req.json().catch(() => ({}))
    const urlList: string[] = body.urlList && Array.isArray(body.urlList) && body.urlList.length > 0
      ? body.urlList
      : [
          `${siteConfig.url}/`,
          `${siteConfig.url}/services`,
          `${siteConfig.url}/services/ai-customer-support`,
          `${siteConfig.url}/services/ai-calling-appointment-booking`,
          `${siteConfig.url}/services/ai-sales-lead-follow-up`,
          `${siteConfig.url}/services/ai-crm-development`,
          `${siteConfig.url}/services/ai-system-integration`,
          `${siteConfig.url}/industries`,
          `${siteConfig.url}/why-letssai`,
          `${siteConfig.url}/contact`,
        ]

    const payload = {
      host,
      key: apiKey,
      keyLocation: `${siteConfig.url}/${apiKey}.txt`,
      urlList,
    }

    const indexNowRes = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    })

    const status = indexNowRes.status
    const text = await indexNowRes.text()

    return NextResponse.json({
      success: status === 200 || status === 202,
      status,
      submittedUrls: urlList.length,
      response: text || "OK",
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function GET() {
  const apiKey = process.env.INDEXNOW_KEY || process.env.NEXT_PUBLIC_INDEXNOW_KEY
  return NextResponse.json({
    status: apiKey ? "configured" : "key_missing",
    endpoint: "https://api.indexnow.org/indexnow",
    host: new URL(siteConfig.url).host,
  })
}
