import type {NextConfig} from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
const withNextIntl = createNextIntlPlugin('./i18n/request.ts')
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.letssai.com",
          },
        ],
        destination: "https://letssai.com/:path*",
        permanent: true,
      },
      {
        source: "/services/ai-knowledge-assistant",
        destination: "/services/ai-customer-support",
        permanent: true,
      },
      {
        source: "/:locale(en|hi|de|es|fr)/services/ai-knowledge-assistant",
        destination: "/:locale/services/ai-customer-support",
        permanent: true,
      },
      {
        source: "/services/ai-workflow-automation",
        destination: "/services/ai-system-integration",
        permanent: true,
      },
      {
        source: "/:locale(en|hi|de|es|fr)/services/ai-workflow-automation",
        destination: "/:locale/services/ai-system-integration",
        permanent: true,
      },
    ]
  },
}
export default withNextIntl(nextConfig)
