import type { StructureResolver } from "sanity/structure"
export const structure: StructureResolver = (S) =>
  S.list()
    .title("LetssAI Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.documentTypeListItem("servicePage").title("Service Pages"),
      S.documentTypeListItem("industryPage").title("Industry Pages"),
      S.documentTypeListItem("chatbotKnowledgeItem").title("Chatbot Knowledge"),
      S.documentTypeListItem("contactSubmission").title("Contact Submissions"),
      S.documentTypeListItem("faqItem").title("FAQ Items"),
    ])
