import type { GalleryItem } from "./types"

export const industryGalleryData: Record<string, GalleryItem[]> = {
  "real-estate": [
    { title: "Lead pipeline dashboard", description: "New enquiries grouped by stage and next action.", visualType: "pipeline", labels: ["New inquiry", "Qualified", "Visit booked"] },
    { title: "Property inquiry assistant", description: "Approved property details with a clean sales handoff.", visualType: "chat", labels: ["Budget captured", "Location matched", "Agent handoff"] },
    { title: "Site visit scheduler", description: "Available slots, confirmations and assigned advisers.", visualType: "calendar", labels: ["Thu 11:30", "Sat 15:00", "Confirmed"] },
    { title: "WhatsApp follow-up panel", description: "Follow-up status without losing the conversation context.", visualType: "timeline", labels: ["Reply sent", "Interested", "Call requested"] },
  ],
  "healthcare-clinics": [
    { title: "Appointment booking board", description: "Administrative booking requests and front-desk routing.", visualType: "calendar", labels: ["Requested", "Slot offered", "Confirmed"] },
    { title: "Patient FAQ assistant", description: "Plain answers to approved clinic admin questions—not clinical advice.", visualType: "chat", labels: ["Opening hours", "Documents", "Staff handoff"] },
    { title: "Reminder timeline", description: "Consent-aware reminders leading up to a visit.", visualType: "timeline", labels: ["Booked", "24h reminder", "Arrived"] },
    { title: "Feedback summary", description: "Themes from post-visit administrative feedback.", visualType: "dashboard", labels: ["Reception", "Booking", "Follow-up"] },
  ],
  "legal-firms": [
    { title: "Client intake tracker", description: "Organised enquiry details before lawyer review.", visualType: "pipeline", labels: ["Conflict check", "Details received", "Review"] },
    { title: "Case document finder", description: "Source-linked search across approved matter documents.", visualType: "documents", labels: ["Agreement.pdf", "Email thread", "Source found"] },
    { title: "Hearing and task reminders", description: "Administrative milestones collected in one view.", visualType: "timeline", labels: ["Documents due", "Review", "Hearing"] },
    { title: "Draft review checklist", description: "A visible human-review gate for prepared material.", visualType: "checklist", labels: ["Names checked", "Sources checked", "Lawyer approval"] },
  ],
  "education-coaching": [
    { title: "Admission inquiry dashboard", description: "Course interest, eligibility answers and next action.", visualType: "pipeline", labels: ["New", "Qualified", "Counsellor call"] },
    { title: "Demo class booking", description: "Available sessions, learner details and reminders.", visualType: "calendar", labels: ["Tue 18:00", "Sat 10:00", "Booked"] },
    { title: "Student FAQ assistant", description: "Approved answers about schedules, access and course admin.", visualType: "chat", labels: ["Course access", "Timetable", "Staff help"] },
    { title: "Payment reminder panel", description: "Respectful, approved reminders with a staff escalation path.", visualType: "timeline", labels: ["Due soon", "Reminder sent", "Admin review"] },
  ],
  "retail-ecommerce": [
    { title: "Order support panel", description: "Order status answers when connected to current fulfilment data.", visualType: "dashboard", labels: ["Packed", "Dispatched", "Delivered"] },
    { title: "Product FAQ assistant", description: "Approved product answers and relevant follow-up questions.", visualType: "chat", labels: ["Size guide", "Availability", "Support"] },
    { title: "Returns and exchange flow", description: "Clear policy checks, detail capture and ticket routing.", visualType: "checklist", labels: ["Order found", "Policy checked", "Ticket created"] },
    { title: "Review collection dashboard", description: "Requests and customer feedback themes in one view.", visualType: "dashboard", labels: ["Requested", "Received", "Needs reply"] },
  ],
  "finance-accounting": [
    { title: "Invoice intake dashboard", description: "Captured invoice fields prepared for a person to verify.", visualType: "dashboard", labels: ["Received", "Fields read", "Review"] },
    { title: "Document collection tracker", description: "A clear view of requested, received and missing files.", visualType: "documents", labels: ["Bank file", "Receipts", "Missing"] },
    { title: "Client reminder assistant", description: "Approved document reminders and response tracking.", visualType: "timeline", labels: ["Requested", "Reminder", "Received"] },
    { title: "Monthly report preparation", description: "Inputs and checks assembled for accountant review.", visualType: "checklist", labels: ["Inputs ready", "Exceptions", "Approve"] },
  ],
}
