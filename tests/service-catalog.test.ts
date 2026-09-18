import assert from "node:assert/strict"
import test from "node:test"
import { navigation } from "../lib/navigation"
import { services } from "../lib/site"

test("service catalog prioritizes support and calling as the first menu row", () => {
  assert.deepEqual(
    services.slice(0, 2).map(({ slug }) => slug),
    ["ai-customer-support", "ai-calling-appointment-booking"]
  )
})

test("retired assistants are replaced by AI CRM Development", () => {
  const slugs = services.map(({ slug }) => slug)
  assert.ok(slugs.includes("ai-crm-development"))
  assert.ok(!slugs.includes("ai-knowledge-assistant"))
  assert.ok(!slugs.includes("ai-marketing-assistant"))
})

test("every service menu entry exposes its related icon", () => {
  const serviceMenu = navigation.find(({ label }) => label === "Services")
  assert.equal(serviceMenu?.children?.length, services.length)
  assert.ok(serviceMenu?.children?.every(({ icon }) => icon))
})
