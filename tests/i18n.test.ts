import assert from 'node:assert/strict'
import test from 'node:test'
import fs from 'node:fs'
import {defaultLocale,isLocale,locales,localizePath} from '../i18n/routing'
function keys(value:unknown,prefix=''):string[]{if(!value||typeof value!=='object'||Array.isArray(value))return[prefix];return Object.entries(value).flatMap(([k,v])=>keys(v,prefix?`${prefix}.${k}`:k))}
test('supports five locales with unprefixed English default',()=>{assert.deepEqual(locales,['en','hi','de','es','fr']);assert.equal(defaultLocale,'en');assert.equal(localizePath('/contact','en'),'/contact');assert.equal(localizePath('/contact','de'),'/de/contact')})
test('rejects invalid locale',()=>assert.equal(isLocale('xx'),false))
test('all dictionaries have identical keys',()=>{const expected=keys(JSON.parse(fs.readFileSync('messages/en.json','utf8')));for(const locale of locales)assert.deepEqual(keys(JSON.parse(fs.readFileSync(`messages/${locale}.json`,'utf8'))),expected)})
test('locale switches preserve route',()=>{assert.equal(localizePath('/de/services/ai-customer-support','fr'),'/fr/services/ai-customer-support');assert.equal(localizePath('/hi','en'),'/')})
test('proxy excludes APIs, Studio and static assets',()=>{const source=fs.readFileSync('proxy.ts','utf8');for(const route of ['api','lsai-studio','_next','media','favicon.ico'])assert.match(source,new RegExp(route.replace('.','\\.')))})
test('hero has one localized contact CTA and reduced motion fallback',()=>{const hero=fs.readFileSync('components/sections/HomeHero.tsx','utf8');assert.equal((hero.match(/href="\/contact"/g)||[]).length,1);assert.doesNotMatch(hero,/localhost:3000/);assert.match(fs.readFileSync('components/ui/OrbBackground.tsx','utf8'),/prefers-reduced-motion/)})
