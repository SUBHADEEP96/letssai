import createMiddleware from 'next-intl/middleware'
import {routing} from './i18n/routing'
export default createMiddleware(routing)
export const config = {matcher: ['/((?!api|lsai-studio|_next|media|favicon.ico|manifest.webmanifest|robots.txt|sitemap.xml|webhooks|integrations|.*\\..*).*)']}
