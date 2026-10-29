export interface HeroStoryItem {
  id: string
  number: string
  category: string
  headline: string
  description: string
}

export const HERO_STORIES: HeroStoryItem[] = [
  {
    id: "business-freedom",
    number: "01",
    category: "BUSINESS FREEDOM",
    headline: "Let's Keep Your Business Running, Even When You're Away.",
    description:
      "Intelligent AI agents keep your operations moving while you focus on what matters.",
  },
  {
    id: "voice-ai-outreach",
    number: "02",
    category: "VOICE AI & OUTREACH",
    headline: "Let's Put AI to Work on Your Calls, Outreach & Follow-Ups.",
    description:
      "AI voice agents handle outreach, customer conversations, lead qualification, and follow-ups.",
  },
  {
    id: "omnichannel-automation",
    number: "03",
    category: "OMNICHANNEL AI & EMAIL AUTOMATION",
    headline:
      "Let's Automate Your Emails, Chats, Customer Support & Employee Support.",
    description:
      "AI agents manage emails, respond to customer and employee queries, and connect conversations across chat, web, WhatsApp, and other supported channels.",
  },
  {
    id: "workflow-automation",
    number: "04",
    category: "AI WORKFLOW AUTOMATION",
    headline: "Let's Put Your CRM, Data & Daily Workflows on Autopilot.",
    description:
      "AI agents create records, update your CRM, process data, generate reports, and automate repetitive tasks.",
  },
  {
    id: "business-intelligence",
    number: "05",
    category: "BUSINESS INTELLIGENCE & CONTROL",
    headline: "Let's Keep You Informed, Wherever Life Takes You.",
    description:
      "Receive real-time notifications, actionable insights, and end-of-day business summaries wherever you are.",
  },
]
