import type {MetadataRoute} from 'next'
import {absoluteUrl} from '@/lib/seo'
import {industries,services} from '@/lib/site'
import {locales,localizePath} from '@/i18n/routing'
export default function sitemap():MetadataRoute.Sitemap {const paths=['/','/services','/industries','/why-letssai','/contact',...services.map(s=>s.href),...industries.map(i=>i.href)];return paths.flatMap(path=>locales.map(locale=>({url:absoluteUrl(localizePath(path,locale)),lastModified:new Date(),changeFrequency:'monthly' as const,priority:path==='/'?1:.8,alternates:{languages:Object.fromEntries(locales.map(l=>[l,absoluteUrl(localizePath(path,l))]))}})))}
