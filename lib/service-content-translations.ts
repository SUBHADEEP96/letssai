import type { Locale } from "@/i18n/routing"

export interface ServiceSEOMetadata {
  title: string
  seoTitle: string
  metaDescription: string
  description: string
  heroEyebrow: string
  heroTitle: string
  heroDescription: string
}

export interface BenefitItem {
  title: string
  description: string
  alt: string
}

export interface FeatureItem {
  eyebrow: string
  title: string
  description: string
  alt: string
}

export interface CustomerSupportContent {
  meta: ServiceSEOMetadata
  benefits: BenefitItem[]
  features: FeatureItem[]
}

export interface CallingContent {
  meta: ServiceSEOMetadata
  benefits: BenefitItem[]
  features: FeatureItem[]
}

export interface IntegrationBlock {
  heading: string
  alt: string
  items: [string, string][]
}

export interface SystemIntegrationContent {
  meta: ServiceSEOMetadata
  quote1: string
  quote2: string
  blocks: IntegrationBlock[]
}

export interface DiscoveryContent {
  metaTitle: string
  metaDescription: string
  heading: string
  description: string
  calendarTitle: string
  loadingTitle: string
  loadingSubtitle: string
  breadcrumb: string
}

// ==========================================
// 1. AI CUSTOMER SUPPORT TRANSLATIONS
// ==========================================
const customerSupportData: Record<Locale, CustomerSupportContent> = {
  en: {
    meta: {
      title: "AI Customer Support",
      seoTitle: "AI Customer Support Assistant | 24/7 Multilingual Support | LetssAI",
      metaDescription: "Deliver fast, reliable customer support across website chat, WhatsApp, and email with LetssAI.",
      description: "Automate website, WhatsApp, and email support with human handoff.",
      heroEyebrow: "AI Customer Support",
      heroTitle: "Deliver always-on, personalized support at scale",
      heroDescription: "LetssAI builds custom customer support assistants that handle repetitive inquiries across website chat, WhatsApp, and email—with human handoff when judgment is needed.",
    },
    benefits: [
      {
        title: "Deliver always-on, personalized support at scale",
        description: "Give customers consistent, approved answers across time zones and connected channels, while keeping your team available for conversations that need human judgment.",
        alt: "Customer support professional ready to help customers across time zones",
      },
      {
        title: "Resolve high-volume enquiries instantly",
        description: "Handle repeated questions across website chat, WhatsApp, and email when those channels are connected, so customers can get a useful response without waiting in a queue.",
        alt: "Customer receiving a prompt support response on her phone",
      },
      {
        title: "Turn every chat into a conversation that matters",
        description: "Guide customers towards a clear next step, collect the context your team needs, and hand the conversation to a person when appropriate.",
        alt: "Support team member continuing a meaningful customer conversation",
      },
    ],
    features: [
      {
        eyebrow: "On-brand by design",
        title: "Chat appearance",
        description: "Match the customer-facing assistant to your brand colors, name, and visual identity, creating an experience that feels like a considered part of your website—not an add-on.",
        alt: "LetssAI chatbot customization showing its name, brand color, icon, and customer conversation",
      },
      {
        eyebrow: "Relevant from the first message",
        title: "Personalized welcome messages",
        description: "Create dynamic greetings based on the context, language, or journey stage available through your connected systems. When that context is not available, the assistant uses an approved, helpful welcome.",
        alt: "Multilingual personalized welcome message in a customer support chat",
      },
      {
        eyebrow: "Clear next steps",
        title: "Call to action prompts",
        description: "Prompt visitors with the most helpful next action, such as booking a call, exploring a service, or checking order details, keeping conversations focused on business outcomes.",
        alt: "Call to action prompt recommending an appointment booking in chat",
      },
      {
        eyebrow: "One inbox for every channel",
        title: "Centralized live chat dashboard",
        description: "Manage website conversations alongside connected WhatsApp, email, and social messages from a single interface, giving your team full visibility and control.",
        alt: "Centralized live chat inbox showing conversations from web, WhatsApp, and email",
      },
      {
        eyebrow: "Continuous improvement",
        title: "Real-time conversation analytics",
        description: "Track response times, resolution rates, and customer sentiment to understand where the assistant excels and where workflows can be refined.",
        alt: "Customer support dashboard showing conversation volume, response times, and customer satisfaction ratings",
      },
    ],
  },
  fr: {
    meta: {
      title: "Assistance client par IA",
      seoTitle: "Assistant de support client IA | Support multilingue 24/7 | LetssAI",
      metaDescription: "Offrez un support client rapide et fiable sur votre site web, WhatsApp et par e-mail avec LetssAI.",
      description: "Automatisez le support sur site web, WhatsApp et e-mail avec transfert humain garanti.",
      heroEyebrow: "Support client IA",
      heroTitle: "Un support client rapide et fiable sur vos canaux habituels",
      heroDescription: "LetssAI conçoit des assistants de support client sur mesure qui traitent les questions répétitives sur votre site web, WhatsApp et par e-mail, avec transfert humain si nécessaire.",
    },
    benefits: [
      {
        title: "Offrez un support continu et personnalisé à grande échelle",
        description: "Fournissez aux clients des réponses cohérentes et validées sur tous les fuseaux horaires et canaux connectés, tout en libérant votre équipe pour les dossiers complexes.",
        alt: "Professionnelle du service client disponible pour aider les clients à l'international",
      },
      {
        title: "Résolvez instantanément les volumes élevés de demandes",
        description: "Traitez les questions récurrentes sur le chat web, WhatsApp et par e-mail afin que les clients obtiennent une réponse utile sans attente inutile.",
        alt: "Cliente recevant une réponse d'assistance immédiate sur son smartphone",
      },
      {
        title: "Transformez chaque échange en une conversation utile",
        description: "Guidez vos clients vers l'étape suivante, collectez les informations essentielles et transférez la conversation à un humain si besoin.",
        alt: "Membre de l'équipe d'assistance poursuivant un échange client qualifié",
      },
    ],
    features: [
      {
        eyebrow: "Fidèle à votre marque",
        title: "Apparence du chat",
        description: "Adaptez l'assistant aux couleurs, au nom et à l'identité visuelle de votre marque pour une intégration naturelle et élégante dans votre site web.",
        alt: "Personnalisation du chatbot LetssAI selon les couleurs et la marque de l'entreprise",
      },
      {
        eyebrow: "Pertinent dès le premier message",
        title: "Messages d'accueil personnalisés",
        description: "Créez des salutations dynamiques selon le contexte, la langue ou l'étape du parcours client dans vos systèmes connectés.",
        alt: "Message d'accueil personnalisé et multilingue dans un chat d'assistance client",
      },
      {
        eyebrow: "Prochaines étapes claires",
        title: "Boutons d'action ciblés",
        description: "Proposez aux visiteurs l'action suivante la plus utile : réservation d'un appel, découverte d'une prestation ou suivi de commande.",
        alt: "Invite d'action dans le chat suggérant une prise de rendez-vous",
      },
      {
        eyebrow: "Une boîte de réception unique",
        title: "Tableau de bord de chat centralisé",
        description: "Gérez les conversations du site web, de WhatsApp, des e-mails et des réseaux sociaux depuis une interface unifiée pour un contrôle total.",
        alt: "Boîte de réception unifiée affichant les messages provenant du web, de WhatsApp et des e-mails",
      },
      {
        eyebrow: "Amélioration continue",
        title: "Analytique des conversations en direct",
        description: "Suivez les temps de réponse, les taux de résolution et la satisfaction client pour perfectionner continuellement vos flux opérationnels.",
        alt: "Tableau de bord de métriques de support montrant volumes et satisfaction client",
      },
    ],
  },
  de: {
    meta: {
      title: "AI-Kundensupport",
      seoTitle: "KI-Kundensupport-Assistent | 24/7 Mehrsprachiger Support | LetssAI",
      metaDescription: "Bieten Sie schnellen, zuverlässigen Kundenservice über Website-Chat, WhatsApp und E-Mail mit LetssAI.",
      description: "Automatisieren Sie Website-, WhatsApp- und E-Mail-Support mit nahtloser Mitarbeiter-Übergabe.",
      heroEyebrow: "AI-Kundensupport",
      heroTitle: "Schneller, verlässlicher Kundensupport auf Ihren gewohnten Kanälen",
      heroDescription: "LetssAI entwickelt maßgeschneiderte Kundensupport-Assistenten, die wiederkehrende Anfragen auf Website-Chat, WhatsApp und E-Mail automatisieren – mit nahtloser Übergabe an Mitarbeiter.",
    },
    benefits: [
      {
        title: "Rund um die Uhr personalisierter Support im großen Maßstab",
        description: "Geben Sie Kunden verlässliche Antworten über Zeitzonen und Kanäle hinweg, während Ihr Team für beratungsintensive Fälle frei bleibt.",
        alt: "Kundenservice-Experte bereit für weltweiten Kundensupport",
      },
      {
        title: "Häufige Anfragen in Sekundenschnelle lösen",
        description: "Beantworten Sie wiederkehrende Fragen über Web-Chat, WhatsApp und E-Mail direkt, sodass Kunden ohne Wartezeit Hilfe erhalten.",
        alt: "Kundin erhält eine prompte Support-Antwort auf ihrem Smartphone",
      },
      {
        title: "Jeden Chat zu einem wertvollen Dialog machen",
        description: "Führen Sie Kunden zum nächsten Schritt, erfassen Sie alle nötigen Daten und übergeben Sie bei Bedarf nahtlos an Ihre Mitarbeiter.",
        alt: "Support-Mitarbeiter führt ein qualifiziertes Kundengespräch weiter",
      },
    ],
    features: [
      {
        eyebrow: "Passend zu Ihrem Design",
        title: "Chat-Design",
        description: "Passen Sie den Assistenten an Markenfarben, Name und Corporate Identity an, damit er sich nahtlos in Ihre Website einfügt.",
        alt: "LetssAI Chatbot-Anpassung passend zum Corporate Design",
      },
      {
        eyebrow: "Ab der ersten Nachricht relevant",
        title: "Personalisierte Begrüßung",
        description: "Erstellen Sie dynamische Begrüßungen basierend auf Kontext, Sprache oder Kundenstatus in Ihren verbundenen Systemen.",
        alt: "Mehrsprachige Begrüßungsnachricht im Kundensupport-Chat",
      },
      {
        eyebrow: "Klare nächste Schritte",
        title: "Call-to-Action-Impulse",
        description: "Geben Sie Besuchern gezielte Handlungsoptionen wie Terminbuchung, Service-Auswahl oder Abfrage von Bestelldaten.",
        alt: "Handlungsaufforderung im Chat zur Buchung eines Termins",
      },
      {
        eyebrow: "Ein Posteingang für alle Kanäle",
        title: "Zentrales Live-Chat-Dashboard",
        description: "Verwalten Sie Website-Nachrichten gemeinsam mit WhatsApp, E-Mail und sozialen Kanälen in einer zentralen Übersicht.",
        alt: "Zentraler Posteingang mit Chats von Website, WhatsApp und E-Mail",
      },
      {
        eyebrow: "Kontinuierliche Optimierung",
        title: "Echtzeit-Gesprächsanalysen",
        description: "Verfolgen Sie Antwortzeiten, Lösungsraten und Kundenzufriedenheit, um Workflows kontinuierlich zu verfeinern.",
        alt: "Support-Dashboard mit Antwortzeiten und Zufriedenheitswerten",
      },
    ],
  },
  es: {
    meta: {
      title: "Atención al cliente con IA",
      seoTitle: "Asistente de atención al cliente con IA | Soporte multilingüe 24/7 | LetssAI",
      metaDescription: "Ofrezca una atención al cliente rápida y confiable a través del chat web, WhatsApp y correo electrónico con LetssAI.",
      description: "Automatice soporte en sitio web, WhatsApp y correo con transferencia humana garantizada.",
      heroEyebrow: "Atención al cliente con IA",
      heroTitle: "Atención al cliente rápida y confiable en los canales que ya utiliza",
      heroDescription: "LetssAI desarrolla asistentes de soporte personalizados que resuelven consultas repetitivas en chat web, WhatsApp y correo, con transferencia humana cuando se requiere criterio.",
    },
    benefits: [
      {
        title: "Soporte personalizado continuo a gran escala",
        description: "Brinde respuestas coherentes y aprobadas en distintas zonas horarias y canales, reservando a su equipo para conversaciones complejas.",
        alt: "Profesional de atención al cliente listo para resolver dudas internacionales",
      },
      {
        title: "Resuelva consultas de gran volumen al instante",
        description: "Atienda preguntas repetitivas en chat web, WhatsApp y correo electrónico sin colas de espera innecesarias.",
        alt: "Clienta recibiendo respuesta rápida de soporte en su teléfono",
      },
      {
        title: "Convierta cada chat en una conversación relevante",
        description: "Oriente a los clientes hacia el siguiente paso, recopile el contexto necesario y transfiera al equipo humano oportunamente.",
        alt: "Miembro del equipo de atención continuando un diálogo relevante con el cliente",
      },
    ],
    features: [
      {
        eyebrow: "Diseño con su marca",
        title: "Apariencia del chat",
        description: "Adapte el asistente a los colores, nombre e identidad visual de su empresa para una integración estética en su web.",
        alt: "Personalización del chatbot de LetssAI según el diseño corporativo",
      },
      {
        eyebrow: "Relevante desde el primer mensaje",
        title: "Mensajes de bienvenida personalizados",
        description: "Cree saludos dinámicos según el contexto, idioma o etapa del cliente en sus sistemas conectados.",
        alt: "Mensaje de bienvenida multilingüe en el chat de atención al cliente",
      },
      {
        eyebrow: "Siguientes pasos claros",
        title: "Llamadas a la acción guiadas",
        description: "Oriente a los visitantes con la siguiente acción más útil, como reservar una cita o consultar detalles del pedido.",
        alt: "Llamada a la acción recomendando agendar una cita",
      },
      {
        eyebrow: "Una bandeja única",
        title: "Panel de chat centralizado",
        description: "Administre las conversaciones web junto con WhatsApp, correo y redes sociales desde una única interfaz con total visibilidad.",
        alt: "Bandeja de entrada unificada con mensajes de web, WhatsApp y correo",
      },
      {
        eyebrow: "Mejora continua",
        title: "Métricas de conversación en tiempo real",
        description: "Supervise tiempos de respuesta, tasas de resolución y satisfacción del cliente para optimizar continuamente sus procesos.",
        alt: "Panel de análisis con métricas de soporte y satisfacción del cliente",
      },
    ],
  },
  hi: {
    meta: {
      title: "AI ग्राहक सहायता",
      seoTitle: "AI ग्राहक सहायता सहायक | 24/7 बहुभाषी सहायता | LetssAI",
      metaDescription: "वेबसाइट चैट, व्हाट्सएप और ईमेल पर LetssAI के साथ तेज़ और विश्वसनीय ग्राहक सहायता प्रदान करें।",
      description: "वेबसाइट, व्हाट्सएप और ईमेल सहायता को स्वचालित करें और मानवीय सहायता की सुविधा रखें।",
      heroEyebrow: "AI ग्राहक सहायता",
      heroTitle: "आपके मौजूदा चैनलों पर तेज़ और भरोसेमंद ग्राहक सेवा",
      heroDescription: "LetssAI ऐसे कस्टम ग्राहक सेवा सहायक बनाता है जो वेबसाइट चैट, व्हाट्सएप और ईमेल पर बार-बार पूछे जाने वाले सवालों का तुरंत समाधान करते हैं।",
    },
    benefits: [
      {
        title: "चौबीसों घंटे बड़े पैमाने पर व्यक्तिगत सहायता प्रदान करें",
        description: "ग्राहकों को सभी टाइमज़ोन और चैनलों पर सटीक उत्तर दें, जबकि आपकी टीम जटिल मुद्दों के समाधान के लिए उपलब्ध रहे।",
        alt: "ग्राहक सेवा पेशेवर अंतरराष्ट्रीय ग्राहकों की मदद के लिए तैयार",
      },
      {
        title: "उच्च-मात्रा वाली पूछताछ का तुरंत समाधान करें",
        description: "वेबसाइट चैट, व्हाट्सएप और ईमेल पर दोहराए जाने वाले प्रश्नों का समाधान तुरंत करें ताकि ग्राहकों को प्रतीक्षा न करनी पड़े।",
        alt: "ग्राहक को अपने फोन पर तत्काल सहायता संदेश प्राप्त होता हुआ",
      },
      {
        title: "हर चैट को एक सार्थक बातचीत में बदलें",
        description: "ग्राहकों को अगले सही कदम पर ले जाएं, ज़रूरी संदर्भ एकत्र करें और आवश्यकता पड़ने पर किसी व्यक्ति को सौंपें।",
        alt: "सपोर्ट टीम का सदस्य ग्राहक के साथ महत्वपूर्ण बातचीत आगे बढ़ाता हुआ",
      },
    ],
    features: [
      {
        eyebrow: "आपके ब्रांड के अनुरूप",
        title: "चैट का स्वरूप",
        description: "सहायक को अपने ब्रांड के रंगों, नाम और दृश्य पहचान के अनुसार अनुकूलित करें ताकि यह आपकी वेबसाइट का अभिन्न अंग लगे।",
        alt: "ब्रांड के अनुसार अनुकूलित LetssAI चैटबॉट",
      },
      {
        eyebrow: "पहले संदेश से ही प्रासंगिक",
        title: "व्यक्तिगत स्वागत संदेश",
        description: "ग्राहक के संदर्भ, भाषा या यात्रा चरण के आधार पर गतिशील अभिवादन तैयार करें।",
        alt: "ग्राहक सहायता चैट में बहुभाषी स्वागत संदेश",
      },
      {
        eyebrow: "स्पष्ट अगला कदम",
        title: "कॉल टू एक्शन प्रॉम्प्ट",
        description: "आगंतुकों को कॉल बुक करने, सेवा देखने या ऑर्डर विवरण जांचने जैसे उपयोगी अगले कदमों के लिए प्रेरित करें।",
        alt: "चैट में अपॉइंटमेंट बुक करने का सुझाव देने वाला एक्शन बटन",
      },
      {
        eyebrow: "सभी चैनलों के लिए एक इनबॉक्स",
        title: "केंद्रीकृत लाइव चैट डैशबोर्ड",
        description: "वेबसाइट चैट, व्हाट्सएप, ईमेल और सोशल संदेशों को एक ही इंटरफ़ेस से आसानी से प्रबंधित करें।",
        alt: "वेबसाइट, व्हाट्सएप और ईमेल संदेशों को प्रदर्शित करने वाला इनबॉक्स",
      },
      {
        eyebrow: "निरंतर सुधार",
        title: "रीयल-टाइम बातचीत एनालिटिक्स",
        description: "प्रतिक्रिया समय, समाधान दर और ग्राहक संतुष्टि को ट्रैक करें ताकि वर्कफ़्लो को और बेहतर बनाया जा सके।",
        alt: "प्रतिक्रिया समय और संतुष्टि रेटिंग दिखाने वाला सपोर्ट डैशबोर्ड",
      },
    ],
  },
}

// ==========================================
// 2. AI CALLING TRANSLATIONS
// ==========================================
const callingData: Record<Locale, CallingContent> = {
  en: {
    meta: {
      title: "AI Calling & Appointment Booking",
      seoTitle: "AI Calling and Appointment Booking Assistant | LetssAI",
      metaDescription: "Automate appointment requests, reminders, feedback collection, call summaries, and calendar updates with LetssAI.",
      description: "Automate outbound calls, appointment booking, and feedback collection.",
      heroEyebrow: "AI Calling & Appointment Booking",
      heroTitle: "Turn inbound and outbound calls into confirmed calendar bookings",
      heroDescription: "LetssAI builds voice AI agents that handle phone inquiries, qualify callers, check calendar availability, and confirm appointments—integrated directly with your CRM and scheduling tools.",
    },
    benefits: [
      {
        title: "Natural customer conversations",
        description: "Deliver clear inbound and outbound conversations with controlled tone, responsive turn-taking, and defined business objectives.",
        alt: "Customer speaking with an AI calling assistant by phone",
      },
      {
        title: "Adapted to your workflow",
        description: "Configure terminology, qualification questions, escalation rules, and booking logic around the way your team already works.",
        alt: "Business team configuring a voice and appointment workflow",
      },
      {
        title: "Serve customers across regions",
        description: "Support multilingual conversations and route enquiries by language, location, intent, and team availability.",
        alt: "Multilingual customer conversations across service regions",
      },
    ],
    features: [
      {
        eyebrow: "Responsive dialogue",
        title: "Advanced turn-taking",
        description: "The assistant can manage natural pauses, interruptions, and overlapping speech while keeping the conversation focused on the agreed outcome. It can clarify what it heard instead of rushing ahead.",
        alt: "Voice assistant managing an interruption during a conversation",
      },
      {
        eyebrow: "Brand experience",
        title: "Customizable voice profiles",
        description: "Select voice, pace, tone, terminology, and conversational behaviour to suit the brand, audience, and use case. Your team approves how the assistant introduces itself and responds.",
        alt: "Interface showing configurable AI voice profiles",
      },
      {
        eyebrow: "Human in the loop",
        title: "Live agent transfer",
        description: "When a caller requires specialist advice or requests a human, the assistant can transfer the call to the right team member with context gathered so the caller does not have to repeat themselves.",
        alt: "Call transfer screen passing caller details to an available team member",
      },
      {
        eyebrow: "Structured capture",
        title: "Real-time call data & summaries",
        description: "Every completed call produces a structured summary, transcription, recording, and extracted data points automatically pushed to your CRM and ticketing systems.",
        alt: "Structured summary dashboard of a completed voice call",
      },
      {
        eyebrow: "Global connectivity",
        title: "Telephony & SIP integration",
        description: "Connect seamlessly to existing phone numbers, Twilio, SIP trunks, and call center infrastructure without replacing your telecommunications stack.",
        alt: "Telephony integration overview connecting SIP and existing phone lines",
      },
      {
        eyebrow: "Frictionless scheduling",
        title: "Automated calendar synchronization",
        description: "Check live availability, propose available times, handle rescheduling, and send confirmation reminders via WhatsApp, email, or SMS to minimize no-shows.",
        alt: "Calendar sync interface showing booked appointments and reminders",
      },
    ],
  },
  fr: {
    meta: {
      title: "Appels et prise de rendez-vous par IA",
      seoTitle: "Assistant d'appels et de prise de rendez-vous IA | LetssAI",
      metaDescription: "Automatisez les demandes de rendez-vous, rappels, retours clients, résumés d'appels et mises à jour de calendrier avec LetssAI.",
      description: "Automatisez les appels sortants, la prise de rendez-vous et la collecte d'avis clients.",
      heroEyebrow: "Appels et prise de rendez-vous par IA",
      heroTitle: "Transformez vos appels entrants et sortants en rendez-vous confirmés",
      heroDescription: "LetssAI conçoit des agents vocaux IA qui répondent aux appels, qualifient les interlocuteurs, vérifient les disponibilités et confirment les créneaux dans votre CRM.",
    },
    benefits: [
      {
        title: "Des conversations naturelles et fluides",
        description: "Menez des échanges entrants et sortants clairs avec un ton maîtrisé, une prise de parole réactive et des objectifs précis.",
        alt: "Client discutant au téléphone avec un assistant vocal IA",
      },
      {
        title: "Adapté à vos flux de travail",
        description: "Configurez la terminologie, les questions de qualification, les règles d'escalade et la logique de réservation selon vos processus.",
        alt: "Équipe configurant les règles de réservation et le flux vocal",
      },
      {
        title: "Servez vos clients dans plusieurs régions",
        description: "Prenez en charge des conversations multilingues et orientez les demandes selon la langue, le lieu et les disponibilités.",
        alt: "Conversations multilingues avec des clients de différentes régions",
      },
    ],
    features: [
      {
        eyebrow: "Dialogue réactif",
        title: "Gestion naturelle des tours de parole",
        description: "L'assistant gère les pauses naturelles, interruptions et chevauchements de voix tout en maintenant l'échange concentré sur le résultat commercial.",
        alt: "Assistant vocal gérant une interruption naturelle lors d'un appel",
      },
      {
        eyebrow: "Expérience de marque",
        title: "Profils vocaux personnalisables",
        description: "Choisissez la voix, le rythme, le ton et le vocabulaire adaptés à votre marque et à votre secteur d'activité.",
        alt: "Interface de configuration des profils vocaux d'IA",
      },
      {
        eyebrow: "L'humain au cœur",
        title: "Transfert vers un agent en direct",
        description: "Dès qu'un appelant demande un spécialiste ou un humain, l'appel est transféré avec tout l'historique récapitulé sans répétition.",
        alt: "Écran de transfert d'appel transmettant les informations au conseiller",
      },
      {
        eyebrow: "Enregistrement structuré",
        title: "Données d'appel et résumés en temps réel",
        description: "Chaque appel génère un résumé structuré, une transcription et des points clés synchronisés instantanément dans votre CRM.",
        alt: "Tableau de bord récapitulatif d'un appel vocal complété",
      },
      {
        eyebrow: "Connectivité globale",
        title: "Intégration téléphonie & SIP",
        description: "Connectez-vous à vos numéros actuels, Twilio, trunks SIP et standards téléphoniques sans remplacer vos équipements.",
        alt: "Aperçu de l'intégration téléphonique connectant les lignes SIP",
      },
      {
        eyebrow: "Planification sans friction",
        title: "Synchronisation de calendrier automatique",
        description: "Consultez les disponibilités en temps réel, proposez des créneaux, gérez les reports et envoyez des rappels par SMS ou WhatsApp.",
        alt: "Interface de synchronisation de calendrier avec rappels automatiques",
      },
    ],
  },
  de: {
    meta: {
      title: "AI-Anrufe & Terminbuchung",
      seoTitle: "KI-Telefonassistent & Terminbuchung | LetssAI",
      metaDescription: "Automatisieren Sie Terminanfragen, Erinnerungen, Feedback, Anrufzusammenfassungen und Kalenderaktualisierungen mit LetssAI.",
      description: "Automatisieren Sie Outbound-Anrufe, Terminvereinbarungen und Kundenbefragungen.",
      heroEyebrow: "AI-Anrufe & Terminbuchung",
      heroTitle: "Verwandeln Sie Telefonanrufe in bestätigte Kalendertermine",
      heroDescription: "LetssAI entwickelt KI-Sprachassistenten, die Telefonanrufe annehmen, Anrufer vorqualifizieren, Kalenderverfügbarkeiten prüfen und Termine direkt im CRM bestätigen.",
    },
    benefits: [
      {
        title: "Natürliche Kundengespräche",
        description: "Führen Sie strukturierte Inbound- und Outbound-Telefonate mit angenehmer Tonalität und klaren Geschäftszielen.",
        alt: "Kunde telefoniert mit einem KI-Sprachassistenten",
      },
      {
        title: "Auf Ihre Abläufe abgestimmt",
        description: "Konfigurieren Sie Fachbegriffe, Qualifizierungsfragen, Eskalationsregeln und Buchungslogik genau nach Ihren Anforderungen.",
        alt: "Team richtet Regeln für Terminbuchung und Telefonie ein",
      },
      {
        title: "Kunden weltweit betreuen",
        description: "Unterstützen Sie mehrsprachige Telefonate und leiten Sie Anfragen nach Sprache, Region und Verfügbarkeit weiter.",
        alt: "Mehrsprachige Telefonbetreuung für internationale Kunden",
      },
    ],
    features: [
      {
        eyebrow: "Reaktionsschneller Dialog",
        title: "Natürliche Gesprächsführung",
        description: "Der Assistent meistert Redepausen und Unterbrechungen souverän und hält das Gespräch zielgerichtet auf Kurs.",
        alt: "Sprachassistent reagiert auf Unterbrechungen im Gespräch",
      },
      {
        eyebrow: "Markenerlebnis",
        title: "Individuelle Stimmenprofile",
        description: "Wählen Sie Stimme, Sprechtempo, Tonlage und Fachterminologie abgestimmt auf Ihre Marke und Zielgruppe.",
        alt: "Konfigurationsoberfläche für KI-Stimmprofile",
      },
      {
        eyebrow: "Menschliche Expertise",
        title: "Nahtlose Weiterleitung an Mitarbeiter",
        description: "Erfordert ein Anliegen Fachberatung, übergibt der Assistent das Telefonat inklusive aller erfassten Kontextdaten an das Team.",
        alt: "Weiterleitung eines Telefonats mit Übergabe aller Notizen",
      },
      {
        eyebrow: "Strukturierte Erfassung",
        title: "Echtzeit-Anrufdaten & Protokolle",
        description: "Jeder Anruf liefert eine strukturierte Zusammenfassung, Transkription und Datenpunkte direkt in Ihr CRM- und Ticketsystem.",
        alt: "Strukturierte Anrufzusammenfassung im System",
      },
      {
        eyebrow: "Globale Anbindung",
        title: "Telefonie- & SIP-Integration",
        description: "Nahtlose Anbindung an bestehende Telefonnummern, Twilio, SIP-Trunks und Contact-Center ohne Systemwechsel.",
        alt: "Übersicht über SIP-Telefonie-Anbindung",
      },
      {
        eyebrow: "Mühelose Terminierung",
        title: "Automatische Kalender-Synchronisation",
        description: "Prüfen Sie Live-Verfügbarkeiten, schlagen Sie freie Termine vor und versenden Sie Bestätigungen per WhatsApp oder SMS.",
        alt: "Kalendersynchronisation mit automatischen Terminerinnerungen",
      },
    ],
  },
  es: {
    meta: {
      title: "Llamadas y reserva de citas con IA",
      seoTitle: "Asistente de llamadas y reserva de citas con IA | LetssAI",
      metaDescription: "Automatice solicitudes de citas, recordatorios, encuestas de satisfacción, resúmenes de llamadas y calendarios con LetssAI.",
      description: "Automatice llamadas salientes, programación de citas y recolección de opiniones.",
      heroEyebrow: "Llamadas y reserva de citas con IA",
      heroTitle: "Convierta llamadas en citas confirmadas en su calendario",
      heroDescription: "LetssAI desarrolla agentes de voz con IA que atienden llamadas, califican prospectos, consultan disponibilidad y confirman citas directamente en su CRM.",
    },
    benefits: [
      {
        title: "Conversaciones naturales con clientes",
        description: "Ofrezca conversaciones claras de entrada y salida con un tono profesional y objetivos bien definidos.",
        alt: "Cliente conversando por teléfono con un agente de voz con IA",
      },
      {
        title: "Adaptado a su flujo de trabajo",
        description: "Configure terminología, preguntas de cualificación, reglas de escalado y lógica de reserva según sus procesos existentes.",
        alt: "Equipo configurando parámetros de reserva y telefonía",
      },
      {
        title: "Atienda clientes en diversas regiones",
        description: "Gestione conversaciones multilingües y distribuya llamadas según idioma, ubicación y disponibilidad.",
        alt: "Atención al cliente telefónica en múltiples idiomas",
      },
    ],
    features: [
      {
        eyebrow: "Diálogo receptivo",
        title: "Gestión avanzada de turnos de voz",
        description: "El asistente gestiona pausas e interrupciones de forma natural sin perder el foco en el objetivo comercial.",
        alt: "Asistente de voz gestionando interrupciones de forma natural",
      },
      {
        eyebrow: "Experiencia de marca",
        title: "Perfiles de voz personalizables",
        description: "Seleccione voz, ritmo, tono y vocabulario para reflejar fielmente la identidad de su empresa.",
        alt: "Panel de configuración de voces de IA",
      },
      {
        eyebrow: "Supervisión humana",
        title: "Transferencia a agentes en vivo",
        description: "Cuando un cliente necesita atención especializada, el asistente transfiere la llamada transfiriendo todo el contexto recopilado.",
        alt: "Transferencia de llamada con datos previos al agente disponible",
      },
      {
        eyebrow: "Captura estructurada",
        title: "Datos y resúmenes de llamadas en tiempo real",
        description: "Cada llamada genera un resumen estructurado, transcripción y datos sincronizados de inmediato en su CRM.",
        alt: "Resumen estructurado de una llamada telefónica",
      },
      {
        eyebrow: "Conectividad total",
        title: "Integración de telefonía y SIP",
        description: "Conéctese con números de teléfono existentes, Twilio y enlaces SIP sin cambiar su infraestructura actual.",
        alt: "Esquema de integración telefónica y enlaces SIP",
      },
      {
        eyebrow: "Planificación ágil",
        title: "Sincronización de calendario automatizada",
        description: "Consulte disponibilidad en vivo, proponga fechas disponibles y envíe recordatorios por WhatsApp o SMS para reducir ausencias.",
        alt: "Sincronización con calendario y recordatorios automáticos",
      },
    ],
  },
  hi: {
    meta: {
      title: "AI कॉलिंग और अपॉइंटमेंट बुकिंग",
      seoTitle: "AI कॉलिंग और अपॉइंटमेंट बुकिंग सहायक | LetssAI",
      metaDescription: "LetssAI के साथ अपॉइंटमेंट अनुरोध, रिमाइंडर, फीडबैक संग्रह, कॉल सारांश और कैलेंडर अपडेट स्वचालित करें।",
      description: "आउटबाउंड कॉल, अपॉइंटमेंट बुकिंग और फीडबैक संग्रह को स्वचालित करें।",
      heroEyebrow: "AI कॉलिंग और अपॉइंटमेंट बुकिंग",
      heroTitle: "इनबाउंड और आउटबाउंड कॉल को कन्फर्म्ड कैलेंडर बुकिंग में बदलें",
      heroDescription: "LetssAI ऐसे वॉयस AI एजेंट बनाता है जो फोन पूछताछ संभालते हैं, कॉलर्स को योग्य बनाते हैं, उपलब्धता जांचते हैं और सीधे आपके कैलेंडर में अपॉइंटमेंट दर्ज करते हैं।",
    },
    benefits: [
      {
        title: "स्वाभाविक ग्राहक बातचीत",
        description: "नियंत्रित टोन और स्पष्ट व्यावसायिक लक्ष्यों के साथ इनबाउंड और आउटबाउंड कॉल संचालित करें।",
        alt: "ग्राहक फोन पर AI कॉलिंग सहायक से बातचीत करता हुआ",
      },
      {
        title: "आपके वर्कफ़्लो के अनुकूल",
        description: "शब्दावली, योग्यता प्रश्न, एस्केलेशन नियम और बुकिंग लॉजिक को अपनी टीम के तौर-तरीकों के अनुसार सेट करें।",
        alt: "टीम कॉलिंग और बुकिंग नियमों को कॉन्फ़िगर करती हुई",
      },
      {
        title: "कई क्षेत्रों में ग्राहकों की सेवा करें",
        description: "बहुभाषी बातचीत का समर्थन करें और भाषा, स्थान और टीम की उपलब्धता के आधार पर कॉल्स को रूट करें।",
        alt: "विभिन्न क्षेत्रों में ग्राहकों के लिए बहुभाषी कॉलिंग सहायता",
      },
    ],
    features: [
      {
        eyebrow: "प्रतिक्रियाशील संवाद",
        title: "उन्नत बातचीत नियंत्रण",
        description: "सहायक स्वाभाविक ठहराव और रुकावटों को संभालता है और बातचीत को मुख्य लक्ष्य पर केंद्रित रखता है।",
        alt: "बातचीत के दौरान व्यवधानों को प्रबंधित करता वॉयस सहायक",
      },
      {
        eyebrow: "ब्रांड अनुभव",
        title: "अनुकूलन योग्य वॉयस प्रोफाइल",
        description: "अपने ब्रांड और दर्शकों के अनुसार आवाज़, गति, टोन और शब्दावली का चयन करें।",
        alt: "AI वॉयस प्रोफाइल कॉन्फ़िगरेशन इंटरफ़ेस",
      },
      {
        eyebrow: "मानवीय नियंत्रण",
        title: "लाइव एजेंट को ट्रांसफर",
        description: "विशेषज्ञ परामर्श की आवश्यकता होने पर सहायक पूरी जानकारी के साथ कॉल को उपयुक्त टीम सदस्य को सौंप देता है।",
        alt: "कॉल विवरण के साथ उपलब्ध टीम सदस्य को ट्रांसफर स्क्रीन",
      },
      {
        eyebrow: "संरचित डेटा",
        title: "रीयल-टाइम कॉल डेटा और सारांश",
        description: "प्रत्येक कॉल के बाद एक संरचित सारांश, ट्रांसक्रिप्शन और मुख्य डेटा बिंदु सीधे आपके CRM में दर्ज होते हैं।",
        alt: "कॉल के बाद सारांश और ट्रांसक्रिप्शन का डैशबोर्ड",
      },
      {
        eyebrow: "वैश्विक कनेक्टिविटी",
        title: "टेलीफोनी और SIP एकीकरण",
        description: "अपने मौजूदा टेलीकॉम बुनियादी ढांचे को बदले बिना फोन नंबरों, Twilio और SIP ट्रंक से आसानी से जुड़ें।",
        alt: "SIP और मौजूदा टेलीफोनी को जोड़ने वाला एकीकरण दृश्य",
      },
      {
        eyebrow: "सहज शेड्यूलिंग",
        title: "स्वचालित कैलेंडर सिंक्रनाइज़ेशन",
        description: "रीयल-टाइम उपलब्धता जांचें, समय प्रस्तावित करें और अनुपस्थिति कम करने के लिए व्हाट्सएप या एसएमएस पर रिमाइंडर भेजें।",
        alt: "स्वचालित कैलेंडर और रिमाइंडर इंटरफ़ेस",
      },
    ],
  },
}

// ==========================================
// 3. AI SYSTEM INTEGRATION TRANSLATIONS
// ==========================================
const systemIntegrationData: Record<Locale, SystemIntegrationContent> = {
  en: {
    meta: {
      title: "AI System Integration",
      seoTitle: "AI System Integration | Connect AI to CRM, Email & APIs | LetssAI",
      metaDescription: "Connect AI assistants and automations to your existing business systems, databases, CRM, calendars, and APIs with LetssAI.",
      description: "Connect AI with CRM, email, dashboards, databases, and APIs.",
      heroEyebrow: "AI System Integration",
      heroTitle: "Connect AI to the systems your business already depends on",
      heroDescription: "LetssAI integrates AI agents with your existing CRM, databases, messaging channels, and APIs—enabling automated actions across your tech stack with strict governance and security.",
    },
    quote1: "LetssAI integrations connect your AI support experience to the systems your team already relies on—including CRMs, help desks, call platforms, and knowledge bases.",
    quote2: "Bring approved data, actions, and human escalation together across chat, email, and voice, while keeping access and review points clearly defined.",
    blocks: [
      {
        heading: "Seamlessly integrate with your support tools",
        alt: "Integration ecosystem connecting support tools to LetssAI",
        items: [
          ["CRM, helpdesk, and ticketing", "Connect support tickets and customer context across the systems your team already uses."],
          ["Knowledge-base synchronisation", "Keep approved support knowledge available for accurate, useful responses."],
          ["Calling or CPaaS integrations", "Connect calling platforms for joined-up voice support and handoffs."],
        ],
      },
      {
        heading: "Handle conversations and escalations across any channel",
        alt: "Customer support conversation and escalation workflow",
        items: [
          ["Live-chat escalations", "Pass complex conversations to a person with the useful context already gathered."],
          ["Automated email routing", "Direct incoming support email to the right workflow or team."],
          ["Call forwarding and human handoff", "Route voice conversations to a person when escalation is required."],
        ],
      },
      {
        heading: "Extend your support stack by connecting with any system or custom endpoint",
        alt: "API, MCP, and SIP connections for custom support systems",
        items: [
          ["MCP connectivity", "Connect approved tools and data sources through an extensible MCP layer."],
          ["API integrations", "Retrieve data and trigger permitted actions through secure APIs and endpoints."],
          ["SIP trunking for voice workflows", "Connect existing telephony infrastructure to supported voice workflows."],
        ],
      },
    ],
  },
  fr: {
    meta: {
      title: "Intégration de systèmes IA",
      seoTitle: "Intégration de systèmes IA | Connectez l'IA à vos CRM, e-mails et API | LetssAI",
      metaDescription: "Connectez les assistants et automatisations IA à vos systèmes d'entreprise, bases de données, CRM, calendriers et API avec LetssAI.",
      description: "Connectez l'IA à votre CRM, messagerie, tableaux de bord, bases de données et API.",
      heroEyebrow: "Intégration de systèmes IA",
      heroTitle: "Connectez l'IA aux outils sur lesquels repose votre entreprise",
      heroDescription: "LetssAI connecte vos agents IA à vos CRM, bases de données, canaux de messagerie et API pour déclencher des actions automatisées et sécurisées sans changer de logiciel.",
    },
    quote1: "Les intégrations LetssAI relient votre expérience de support IA aux systèmes sur lesquels votre équipe compte déjà : CRM, centres d'assistance, plateformes d'appels et bases de connaissances.",
    quote2: "Réunissez données validées, actions automatiques et escalade humaine sur le chat, l'e-mail et la voix, avec des accès et points de contrôle rigoureusement encadrés.",
    blocks: [
      {
        heading: "Intégrez en toute transparence vos outils de support",
        alt: "Écosystème d'intégration reliant vos outils de support à LetssAI",
        items: [
          ["CRM, helpdesk et billetterie", "Connectez tickets de support et contexte client sur tous les outils existants."],
          ["Synchronisation de base de connaissances", "Gardez vos informations officielles synchronisées pour des réponses toujours exactes."],
          ["Intégrations téléphonie & CPaaS", "Reliez vos plateformes d'appels pour une voix unifiée et des transferts fluides."],
        ],
      },
      {
        heading: "Gérez les échanges et escalades sur n'importe quel canal",
        alt: "Flux de traitement et d'escalade des conversations clients",
        items: [
          ["Escalade en direct", "Transférez les conversations complexes avec tout le contexte nécessaire déjà recueilli."],
          ["Routage automatisé des e-mails", "Dirigez les courriels entrants vers le bon flux ou la bonne équipe."],
          ["Renvoi d'appel et transfert humain", "Basculez les appels vers un conseiller dès qu'une intervention humaine s'impose."],
        ],
      },
      {
        heading: "Étendez votre écosystème en le connectant à n'importe quel système ou API",
        alt: "Connexions API, MCP et SIP pour systèmes de support personnalisés",
        items: [
          ["Connectivité MCP", "Connectez des outils et données approuvés via une couche MCP extensible."],
          ["Intégrations d'API", "Récupérez des données et déclenchez des actions autorisées via des API sécurisées."],
          ["Trunking SIP pour flux vocaux", "Reliez votre téléphonie existante aux flux vocaux automatisés."],
        ],
      },
    ],
  },
  de: {
    meta: {
      title: "AI-Systemintegration",
      seoTitle: "AI-Systemintegration | KI mit CRM, E-Mail & APIs verbinden | LetssAI",
      metaDescription: "Verbinden Sie KI-Assistenten und Automatisierungen mit Ihren bestehenden Unternehmenssystemen, Datenbanken, CRM und Schnittstellen mit LetssAI.",
      description: "Verbinden Sie KI mit CRM, E-Mail, Dashboards, Datenbanken und APIs.",
      heroEyebrow: "AI-Systemintegration",
      heroTitle: "Verbinden Sie KI mit den Systemen, auf die Ihr Unternehmen täglich baut",
      heroDescription: "LetssAI integriert KI-Assistenten in bestehende CRM-, Datenbank-, Messenger- und API-Umgebungen – für automatisierte Aktionen unter strenger Kontrolle.",
    },
    quote1: "LetssAI-Integrationen verbinden Ihren KI-Support direkt mit den Kernsystemen Ihres Teams – darunter CRMs, Helpdesks, Telefonanlagen und Wissensdatenbanken.",
    quote2: "Führen Sie geprüfte Daten, Aktionen und menschliche Eskalationen über Chat, E-Mail und Telefon zusammen – bei stets klar geregelten Zugriffen.",
    blocks: [
      {
        heading: "Nahtlose Integration in Ihre Support-Tools",
        alt: "Integrationslandschaft zur Anbindung von Support-Tools an LetssAI",
        items: [
          ["CRM, Helpdesk & Ticketing", "Verbinden Sie Support-Tickets und Kundenkontext über Ihre gewohnten Systeme."],
          ["Wissensdatenbank-Synchronisation", "Halten Sie freigegebene Unternehmensdaten für präzise Antworten stets aktuell."],
          ["Telefonie- & CPaaS-Integrationen", "Binden Sie Telefonieplattformen für abgestimmten Sprachsupport ein."],
        ],
      },
      {
        heading: "Gespräche und Eskalationen über alle Kanäle steuern",
        alt: "Workflow für Support-Gespräche und Eskalationspfade",
        items: [
          ["Live-Chat-Eskalation", "Übergeben Sie anspruchsvolle Chats mit vollständigem Kontext an Ihre Mitarbeiter."],
          ["Automatisiertes E-Mail-Routing", "Leiten Sie eingehende Support-Mails automatisch an das richtige Team weiter."],
          ["Anrufweiterleitung & Übergabe", "Leiten Sie Telefonate an Mitarbeiter weiter, sobald menschliche Expertise gefragt ist."],
        ],
      },
      {
        heading: "Erweitern Sie Ihren Support-Stack durch Anbindung an beliebige Systeme",
        alt: "API-, MCP- und SIP-Verbindungen für maßgeschneiderte Systeme",
        items: [
          ["MCP-Konnektivität", "Verbinden Sie zugelassene Tools und Quellen über eine flexible MCP-Schicht."],
          ["API-Integrationen", "Rufen Sie Daten ab und lösen Sie autorisierte Aktionen über sichere APIs aus."],
          ["SIP-Trunking für Sprachanrufe", "Verbinden Sie Ihre bestehende Telefonie mit unterstützten Voice-Workflows."],
        ],
      },
    ],
  },
  es: {
    meta: {
      title: "Integración de sistemas de IA",
      seoTitle: "Integración de sistemas de IA | Conecte IA con CRM, correo y API | LetssAI",
      metaDescription: "Conecte asistentes y automatizaciones de IA con sus sistemas comerciales existentes, bases de datos, CRM, calendarios y API con LetssAI.",
      description: "Conecte la IA con CRM, correo electrónico, paneles, bases de datos y API.",
      heroEyebrow: "Integración de sistemas de IA",
      heroTitle: "Conecte la IA con los sistemas esenciales de su negocio",
      heroDescription: "LetssAI integra agentes de IA con sus CRM, bases de datos, mensajería y API para ejecutar acciones automatizadas con total seguridad y control.",
    },
    quote1: "Las integraciones de LetssAI conectan su experiencia de soporte con IA a los sistemas en los que ya confía su equipo: CRM, mesas de ayuda, plataformas de llamadas y bases de conocimiento.",
    quote2: "Reúna datos verificados, acciones y transferencias humanas en chat, correo y voz, manteniendo definidos los puntos de acceso y supervisión.",
    blocks: [
      {
        heading: "Integración fluida con sus herramientas de soporte",
        alt: "Ecosistema de integración que conecta herramientas con LetssAI",
        items: [
          ["CRM, helpdesk y gestión de tickets", "Conecte tickets de soporte y contexto del cliente en los sistemas que su equipo ya usa."],
          ["Sincronización de base de conocimiento", "Mantenga actualizada la información aprobada para respuestas precisas y útiles."],
          ["Integraciones de llamadas y CPaaS", "Conecte plataformas de llamadas para soporte por voz coordinado y transferencias ágiles."],
        ],
      },
      {
        heading: "Gestione conversaciones y derivaciones en cualquier canal",
        alt: "Flujo de trabajo para atención y derivación de conversaciones",
        items: [
          ["Escalado de chat en vivo", "Transfiera conversaciones complejas a un agente con el contexto previo recopilado."],
          ["Enrutamiento automatizado de correo", "Dirija correos de soporte entrantes al equipo o flujo adecuado."],
          ["Desvío de llamadas y entrega a personas", "Enrute llamadas telefónicas a un asesor cuando se requiera intervención humana."],
        ],
      },
      {
        heading: "Amplíe sus herramientas conectando cualquier sistema o endpoint personalizado",
        alt: "Conexiones de API, MCP y SIP para sistemas personalizados",
        items: [
          ["Conectividad MCP", "Conecte herramientas y fuentes aprobadas mediante una capa MCP extensible."],
          ["Integraciones API", "Consulte datos y ejecute acciones permitidas mediante API seguras."],
          ["Troncal SIP para flujos de voz", "Conecte telefonía existente a los flujos de voz compatibles."],
        ],
      },
    ],
  },
  hi: {
    meta: {
      title: "AI सिस्टम इंटीग्रेशन",
      seoTitle: "AI सिस्टम इंटीग्रेशन | AI को CRM, ईमेल और API से जोड़ें | LetssAI",
      metaDescription: "LetssAI के साथ AI सहायकों और ऑटोमेशन को अपने मौजूदा व्यावसायिक सिस्टम, डेटाबेस, CRM, कैलेंडर और API से सुरक्षित रूप से जोड़ें।",
      description: "AI को CRM, ईमेल, डैशबोर्ड, डेटाबेस और API से कनेक्ट करें।",
      heroEyebrow: "AI सिस्टम इंटीग्रेशन",
      heroTitle: "AI को उन प्रणालियों से जोड़ें जिन पर आपका व्यवसाय निर्भर है",
      heroDescription: "LetssAI आपके मौजूदा CRM, डेटाबेस, मैसेजिंग चैनलों और API के साथ AI एजेंटों को एकीकृत करता है, जिससे सख्त सुरक्षा के साथ कार्यों का संचालन होता है।",
    },
    quote1: "LetssAI इंटीग्रेशन आपके AI अनुभव को उन प्रणालियों से जोड़ता है जिन पर आपकी टीम पहले से भरोसा करती है—जैसे CRM, हेल्पडेस्क, कॉलिंग प्लेटफॉर्म और नॉलेज बेस।",
    quote2: "चैट, ईमेल और वॉयस में स्वीकृत डेटा, कार्यों और मानवीय एस्केलेशन को एक साथ लाएं, जबकि समीक्षा बिंदु स्पष्ट रूप से परिभाषित रहें।",
    blocks: [
      {
        heading: "अपने सपोर्ट टूल्स के साथ सहजता से एकीकृत करें",
        alt: "सपोर्ट टूल्स को LetssAI से जोड़ने वाला इंटीग्रेशन इकोसिस्टम",
        items: [
          ["CRM, हेल्पडेस्क और टिकटिंग", "अपनी टीम द्वारा पहले से उपयोग किए जा रहे सिस्टम में ग्राहक संदर्भ जोड़ें।"],
          ["नॉलेज-बेस सिंक्रोनाइज़ेशन", "सटीक और उपयोगी उत्तरों के लिए स्वीकृत ज्ञान उपलब्ध रखें।"],
          ["कॉलिंग या CPaaS एकीकरण", "जुड़े हुए वॉयस सपोर्ट और हैंडऑफ़ के लिए कॉलिंग प्लेटफॉर्म कनेक्ट करें।"],
        ],
      },
      {
        heading: "किसी भी चैनल पर बातचीत और एस्केलेशन संभालें",
        alt: "ग्राहक सहायता बातचीत और एस्केलेशन वर्कफ़्लो",
        items: [
          ["लाइव-चैट एस्केलेशन", "एकत्रित संदर्भ के साथ जटिल बातचीत किसी व्यक्ति को सौंपें।"],
          ["स्वचालित ईमेल रूटिंग", "इनकमिंग सपोर्ट ईमेल को सही वर्कफ़्लो या टीम को निर्देशित करें।"],
          ["कॉल फ़ॉरवर्डिंग और मानवीय हैंडऑफ़", "एस्केलेशन की आवश्यकता होने पर वॉयस कॉल को किसी व्यक्ति को रूट करें।"],
        ],
      },
      {
        heading: "किसी भी सिस्टम या कस्टम एंडपॉइंट से जुड़कर अपने सपोर्ट स्टैक का विस्तार करें",
        alt: "कस्टम सपोर्ट सिस्टम के लिए API, MCP और SIP कनेक्शन",
        items: [
          ["MCP कनेक्टिविटी", "विस्तार योग्य MCP लेयर के माध्यम से स्वीकृत टूल्स और डेटा स्रोतों को जोड़ें।"],
          ["API एकीकरण", "सुरक्षित API और एंडपॉइंट्स के माध्यम से डेटा प्राप्त करें और कार्य निष्पादित करें।"],
          ["वॉयस वर्कफ़्लो के लिए SIP ट्रंकिंग", "मौजूदा टेलीफोनी को समर्थित वॉयस वर्कफ़्लो से कनेक्ट करें।"],
        ],
      },
    ],
  },
}

// ==========================================
// 4. OTHER SERVICES (SALES LEAD & CRM)
// ==========================================
const otherServicesData: Record<
  string,
  Record<Locale, ServiceSEOMetadata>
> = {
  "ai-sales-lead-follow-up": {
    en: {
      title: "AI Sales & Lead Follow-up",
      seoTitle: "AI Sales and Lead Follow-up Automation | LetssAI",
      metaDescription: "Qualify leads instantly, automate follow-up across email and WhatsApp, and schedule sales calls with LetssAI.",
      description: "Qualify leads, follow up automatically, and update CRM records.",
      heroEyebrow: "AI Sales & Lead Follow-up",
      heroTitle: "Turn every new enquiry into a clear next action",
      heroDescription: "Respond while interest is fresh, qualify consistently, and give your sales team the context they need to continue the conversation.",
    },
    fr: {
      title: "Vente et suivi des prospects par IA",
      seoTitle: "Automatisation des ventes et du suivi des prospects par IA | LetssAI",
      metaDescription: "Qualifiez les prospects instantanément, automatisez les relances par e-mail et WhatsApp, et planifiez des appels avec LetssAI.",
      description: "Qualifiez les prospects, effectuez des relances automatiques et mettez à jour votre CRM.",
      heroEyebrow: "Vente et suivi des prospects par IA",
      heroTitle: "Transformez chaque nouvelle demande en opportunité concrète",
      heroDescription: "Répondez pendant que l'intérêt est vif, qualifiez avec précision et fournissez à vos commerciaux le contexte idéal pour conclure.",
    },
    de: {
      title: "AI-Vertrieb & Lead-Nachverfolgung",
      seoTitle: "KI-Vertrieb & Lead-Nachverfolgung Automatisierung | LetssAI",
      metaDescription: "Qualifizieren Sie Leads sofort, automatisieren Sie Nachfassaktionen per E-Mail und WhatsApp und buchen Sie Verkaufsgespräche mit LetssAI.",
      description: "Qualifizieren Sie Leads, fassen Sie automatisch nach und pflegen Sie CRM-Daten.",
      heroEyebrow: "AI-Vertrieb & Lead-Nachverfolgung",
      heroTitle: "Verwandeln Sie jede neue Anfrage in konkrete Verkaufschancen",
      heroDescription: "Reagieren Sie unmittelbar bei Interesse, qualifizieren Sie einheitlich und geben Sie Ihrem Vertriebsteam den entscheidenden Kontext.",
    },
    es: {
      title: "Ventas y seguimiento de clientes potenciales con IA",
      seoTitle: "Automatización de ventas y seguimiento de prospectos con IA | LetssAI",
      metaDescription: "Califique prospectos de inmediato, automatice el seguimiento por correo y WhatsApp, y agende llamadas comerciales con LetssAI.",
      description: "Califique clientes potenciales, haga seguimiento automático y actualice su CRM.",
      heroEyebrow: "Ventas y seguimiento de clientes potenciales con IA",
      heroTitle: "Convierta cada nueva consulta en una acción comercial clara",
      heroDescription: "Responda en el momento oportuno, califique de manera constante y brinde a sus vendedores el contexto para cerrar acuerdos.",
    },
    hi: {
      title: "AI बिक्री और लीड फ़ॉलो-अप",
      seoTitle: "AI बिक्री और लीड फ़ॉलो-अप ऑटोमेशन | LetssAI",
      metaDescription: "लीड्स को तुरंत योग्य बनाएं, ईमेल और व्हाट्सएप पर स्वचालित फ़ॉलो-अप करें और LetssAI के साथ सेल्स कॉल शेड्यूल करें।",
      description: "लीड को योग्य बनाएं, स्वचालित रूप से फ़ॉलो-अप करें और CRM रिकॉर्ड अपडेट करें।",
      heroEyebrow: "AI बिक्री और लीड फ़ॉलो-अप",
      heroTitle: "हर नई पूछताछ को एक स्पष्ट अगले कदम में बदलें",
      heroDescription: "रुचि ताज़ा रहते ही प्रतिक्रिया दें, सटीकता से योग्यता जांचें और अपनी बिक्री टीम को बातचीत जारी रखने के लिए ज़रूरी संदर्भ प्रदान करें।",
    },
  },
  "ai-crm-development": {
    en: {
      title: "AI CRM Development",
      seoTitle: "AI CRM Development & Custom Workflow Architecture | LetssAI",
      metaDescription: "Build practical, AI-ready CRMs shaped around your sales, service, and operations workflows with LetssAI.",
      description: "Build an AI-ready CRM around your sales, service, and follow-up workflows.",
      heroEyebrow: "AI CRM Development",
      heroTitle: "Build a CRM that works the way your team does",
      heroDescription: "Bring customer information, conversations, follow-ups, and reporting into one practical system designed around your real process.",
    },
    fr: {
      title: "Développement CRM avec IA",
      seoTitle: "Développement de CRM avec IA & Architecture sur mesure | LetssAI",
      metaDescription: "Créez des CRM prêts pour l'IA, façonnés autour de vos flux de vente, de support et d'opérations avec LetssAI.",
      description: "Créez un CRM intelligent adapté à vos processus de vente, service client et suivi.",
      heroEyebrow: "Développement CRM avec IA",
      heroTitle: "Bâtissez un CRM qui fonctionne exactement comme votre équipe",
      heroDescription: "Centralisez données clients, échanges, relances et rapports dans un système pratique pensé autour de votre activité réelle.",
    },
    de: {
      title: "AI-CRM-Entwicklung",
      seoTitle: "KI-CRM-Entwicklung & Maßgeschneiderte Workflow-Architektur | LetssAI",
      metaDescription: "Entwickeln Sie zukunftsfähige, KI-gestützte CRMs abgestimmt auf Vertrieb, Service und Unternehmensabläufe mit LetssAI.",
      description: "Bauen Sie ein KI-fähiges CRM rund um Ihre Vertriebs-, Service- und Follow-up-Prozesse auf.",
      heroEyebrow: "AI-CRM-Entwicklung",
      heroTitle: "Bauen Sie ein CRM, das genau so arbeitet wie Ihr Team",
      heroDescription: "Bündeln Sie Kundeninformationen, Verläufe, Nachfassaktionen und Auswertungen in einem System, das für Ihre Praxis gemacht ist.",
    },
    es: {
      title: "Desarrollo de CRM con IA",
      seoTitle: "Desarrollo de CRM con IA y Arquitectura de flujos | LetssAI",
      metaDescription: "Diseñe CRM adaptados a la IA para optimizar ventas, atención al cliente y operaciones diarias con LetssAI.",
      description: "Cree un CRM adaptado a la IA para sus ventas, servicio y seguimiento.",
      heroEyebrow: "Desarrollo de CRM con IA",
      heroTitle: "Cree un CRM que funcione al ritmo de su equipo",
      heroDescription: "Reúna información de clientes, conversaciones, tareas de seguimiento e informes en un sistema diseñado según su método de trabajo.",
    },
    hi: {
      title: "AI CRM विकास",
      seoTitle: "AI CRM विकास और कस्टम वर्कफ़्लो आर्किटेक्चर | LetssAI",
      metaDescription: "अपनी बिक्री, सेवा और संचालन वर्कफ़्लो के अनुसार डिज़ाइन किए गए AI-तैयार CRM का निर्माण LetssAI के साथ करें।",
      description: "अपनी बिक्री, सेवा और फ़ॉलो-अप वर्कफ़्लो के आसपास एक AI-तैयार CRM बनाएं।",
      heroEyebrow: "AI CRM विकास",
      heroTitle: "एक ऐसा CRM बनाएं जो आपकी टीम के काम करने के तरीके के अनुकूल हो",
      heroDescription: "ग्राहक जानकारी, बातचीत, फ़ॉलो-अप और रिपोर्टिंग को अपनी वास्तविक प्रक्रिया के अनुसार डिज़ाइन किए गए एक व्यावहारिक सिस्टम में लाएं।",
    },
  },
}

// ==========================================
// 5. AI DISCOVERY TRANSLATIONS
// ==========================================
export const discoveryTranslations: Record<Locale, DiscoveryContent> = {
  en: {
    metaTitle: "Book an AI Discovery Call | LetssAI",
    metaDescription: "Schedule a free 30-minute AI Discovery consultation with LetssAI to uncover high-impact automation opportunities for your business workflows.",
    heading: "Book an AI Discovery Consultation with LetssAI",
    description: "Schedule a practical 30-minute AI workflow review and discovery call.",
    calendarTitle: "Schedule an AI Discovery Call with LetssAI",
    loadingTitle: "Loading LetssAI Discovery Schedule...",
    loadingSubtitle: "Connecting to Google Calendar",
    breadcrumb: "AI Discovery",
  },
  fr: {
    metaTitle: "Réserver un appel de découverte IA | LetssAI",
    metaDescription: "Planifiez une consultation gratuite de 30 minutes avec LetssAI pour identifier les opportunités d'automatisation à fort impact pour vos flux de travail.",
    heading: "Réservez une consultation de découverte IA avec LetssAI",
    description: "Planifiez une séance pratique de 30 minutes d'examen de vos flux de travail et de découverte de l'IA.",
    calendarTitle: "Planifier un appel de découverte IA avec LetssAI",
    loadingTitle: "Chargement du calendrier de découverte LetssAI...",
    loadingSubtitle: "Connexion à Google Agenda",
    breadcrumb: "Découverte IA",
  },
  de: {
    metaTitle: "AI-Discovery-Call buchen | LetssAI",
    metaDescription: "Vereinbaren Sie eine kostenlose 30-minütige KI-Erstberatung mit LetssAI, um lohnende Automatisierungspotenziale für Ihre Unternehmensabläufe zu ermitteln.",
    heading: "Buchen Sie ein KI-Entwicklungs- und Beratungsgespräch mit LetssAI",
    description: "Vereinbaren Sie eine praxisnahe 30-minütige Workflow-Analyse und ein KI-Discovery-Gespräch.",
    calendarTitle: "Einen AI-Discovery-Call mit LetssAI vereinbaren",
    loadingTitle: "LetssAI Terminkalender wird geladen...",
    loadingSubtitle: "Verbindung mit Google Kalender wird hergestellt",
    breadcrumb: "KI-Discovery",
  },
  es: {
    metaTitle: "Reservar llamada de descubrimiento de IA | LetssAI",
    metaDescription: "Programe una consulta gratuita de 30 minutos de descubrimiento de IA con LetssAI para identificar oportunidades de automatización de alto impacto en su empresa.",
    heading: "Reserve una consulta de descubrimiento de IA con LetssAI",
    description: "Programe una revisión práctica de flujos de trabajo de 30 minutos y una llamada de descubrimiento de IA.",
    calendarTitle: "Programar una llamada de descubrimiento de IA con LetssAI",
    loadingTitle: "Cargando calendario de citas de LetssAI...",
    loadingSubtitle: "Conectando con Google Calendar",
    breadcrumb: "Descubrimiento de IA",
  },
  hi: {
    metaTitle: "AI डिस्कवरी कॉल बुक करें | LetssAI",
    metaDescription: "अपने बिज़नेस वर्कफ़्लो के लिए ऑटोमेशन के बेहतरीन अवसरों को जानने हेतु LetssAI के साथ 30 मिनट का निःशुल्क परामर्श बुक करें।",
    heading: "LetssAI के साथ एक AI डिस्कवरी परामर्श बुक करें",
    description: "30 मिनट की व्यावहारिक वर्कफ़्लो समीक्षा और AI परामर्श सत्र तय करें।",
    calendarTitle: "LetssAI के साथ AI डिस्कवरी कॉल तय करें",
    loadingTitle: "LetssAI डिस्कवरी शेड्यूल लोड हो रहा है...",
    loadingSubtitle: "Google Calendar से कनेक्ट हो रहा है",
    breadcrumb: "AI डिस्कवरी",
  },
}

// Helpers
export function getCustomerSupportContent(locale: Locale): CustomerSupportContent {
  return customerSupportData[locale] || customerSupportData.en
}

export function getCallingContent(locale: Locale): CallingContent {
  return callingData[locale] || callingData.en
}

export function getSystemIntegrationContent(locale: Locale): SystemIntegrationContent {
  return systemIntegrationData[locale] || systemIntegrationData.en
}

export function getServiceMetadata(slug: string, locale: Locale): ServiceSEOMetadata | undefined {
  if (slug === "ai-customer-support") return customerSupportData[locale]?.meta
  if (slug === "ai-calling-appointment-booking") return callingData[locale]?.meta
  if (slug === "ai-system-integration") return systemIntegrationData[locale]?.meta
  return otherServicesData[slug]?.[locale]
}
