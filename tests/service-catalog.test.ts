import assert from "node:assert/strict"
import test from "node:test"
import { navigation } from "../lib/navigation"
import { services } from "../lib/site"

test("service catalog contains the expected services in order", () => {
  assert.deepEqual(
    services.map(({ slug }) => slug),
    [
      "ai-customer-support",
      "ai-calling-appointment-booking",
      "ai-sales-lead-follow-up",
      "ai-crm-development",
      "ai-system-integration",
    ]
  )
})

test("retired assistants are replaced by AI CRM Development", () => {
  const slugs = services.map(({ slug }) => slug)
  assert.ok(slugs.includes("ai-crm-development"))
  assert.ok(!slugs.includes("ai-knowledge-assistant"))
  assert.ok(!slugs.includes("ai-marketing-assistant"))
  assert.ok(!slugs.includes("ai-workflow-automation"))
})

test("every service menu entry exposes the correct explicit icon", () => {
  const serviceMenu = navigation.find(({ label }) => label === "Services")
  assert.equal(serviceMenu?.children?.length, services.length)
  assert.deepEqual(
    serviceMenu?.children?.map(({ href, icon }) => [
      href.split("/").at(-1),
      icon,
    ]),
    [
      ["ai-customer-support", "ChatCircleText"],
      ["ai-calling-appointment-booking", "PhoneCall"],
      ["ai-sales-lead-follow-up", "TrendUp"],
      ["ai-crm-development", "Database"],
      ["ai-system-integration", "PlugsConnected"],
    ]
  )
})
