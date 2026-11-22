import type { Locale } from "@/i18n/routing"

export interface PageSeoItem {
  title: string
  description: string
  primaryKeyword?: string
}

export const pageSeoRegistry: Record<string, Record<Locale, PageSeoItem>> = {
  "/": {
    en: {
      primaryKeyword: "AI automation company",
      title: "AI Automation & Custom AI Agents for Business | LetssAI",
      description:
        "LetssAI builds custom AI agents, voice AI and workflow automation that connect to your CRM, WhatsApp and email. Book a free AI consultation.",
    },
    hi: {
      primaryKeyword: "AI ऑटोमेशन कंपनी",
      title: "व्यवसायों के लिए AI ऑटोमेशन और कस्टम AI एजेंट्स | LetssAI",
      description:
        "LetssAI कस्टम AI एजेंट्स, वॉइस AI और वर्कफ़्लो ऑटोमेशन तैयार करता है जो आपके CRM, WhatsApp और ईमेल से जुड़ते हैं। निःशुल्क परामर्श बुक करें।",
    },
    de: {
      primaryKeyword: "KI-Automatisierungsunternehmen",
      title:
        "KI-Automatisierung & maßgeschneiderte KI-Agenten für Unternehmen | LetssAI",
      description:
        "LetssAI entwickelt individuelle KI-Agenten, Sprach-KI und Workflow-Automatisierung für Ihr CRM, WhatsApp und E-Mail. Kostenlose Beratung buchen.",
    },
    es: {
      primaryKeyword: "empresa de automatización con IA",
      title: "Automatización con IA y agentes de IA para empresas | LetssAI",
      description:
        "LetssAI desarrolla agentes de IA personalizados, IA de voz y flujos de trabajo conectados a su CRM, WhatsApp y correo. Reserve su consulta gratuita.",
    },
    fr: {
      primaryKeyword: "entreprise d'automatisation IA",
      title: "Automatisation IA & agents IA sur mesure pour entreprises | LetssAI",
      description:
        "LetssAI crée des agents IA personnalisés, de l'IA vocale et des automatisations connectées à votre CRM, WhatsApp et e-mail. Réservez un appel gratuit.",
    },
  },

  "/services": {
    en: {
      primaryKeyword: "AI services for business",
      title: "AI Services: Customer Support, Calling & CRM | LetssAI",
      description:
        "Compare LetssAI's AI services: customer support automation, AI calling, lead follow-up, custom AI CRM and system integration. Start with one workflow.",
    },
    hi: {
      primaryKeyword: "व्यवसायों के लिए AI सेवाएँ",
      title: "AI सेवाएँ: कस्टमर सपोर्ट, कॉलिंग और CRM | LetssAI",
      description:
        "LetssAI की AI सेवाओं की तुलना करें: ग्राहक सहायता, कॉलिंग, लीड फ़ॉलो-अप, कस्टम CRM और सिस्टम एकीकरण। एक वर्कफ़्लो से शुरुआत करें।",
    },
    de: {
      primaryKeyword: "KI-Dienste für Unternehmen",
      title: "KI-Dienste: Kundensupport, Telefonie & CRM | LetssAI",
      description:
        "Vergleichen Sie LetssAI-Dienste: Support-Automatisierung, KI-Telefonie, Lead-Follow-up, individuelles CRM und Systemintegration. Mit einem Ablauf starten.",
    },
    es: {
      primaryKeyword: "servicios de IA para empresas",
      title: "Servicios de IA: atención al cliente, llamadas y CRM | LetssAI",
      description:
        "Compare los servicios de LetssAI: soporte al cliente, llamadas con IA, seguimiento de leads, CRM a medida e integración. Comience con un flujo.",
    },
    fr: {
      primaryKeyword: "services IA pour entreprises",
      title: "Services IA : support client, appels & CRM | LetssAI",
      description:
        "Comparez les services LetssAI : support client automatisé, appels IA, suivi de leads, CRM sur mesure et intégration système. Démarrez par un flux.",
    },
  },

  "/services/ai-customer-support": {
    en: {
      primaryKeyword: "automate customer support workflows",
      title: "Automate Customer Support Workflows with AI | LetssAI",
      description:
        "AI customer support that answers repeat questions on website chat, WhatsApp and email, and call then hands sensitive cases to your team with full context.",
    },
    hi: {
      primaryKeyword: "कस्टमर सपोर्ट वर्कफ़्लो ऑटोमेट करें",
      title: "AI के साथ कस्टमर सपोर्ट वर्कफ़्लो को ऑटोमेट करें | LetssAI",
      description:
        "वेबसाइट चैट, WhatsApp और ईमेल पर दोहराए जाने वाले सवालों के जवाब देने वाला AI ग्राहक सहायता सिस्टम, जो संवेदनशील मामले टीम को सौंपता है।",
    },
    de: {
      primaryKeyword: "Kundensupport-Workflows automatisieren",
      title: "Kundensupport-Workflows mit KI automatisieren | LetssAI",
      description:
        "KI-Kundensupport für Website-Chat, WhatsApp und E-Mail beantwortet Routinefragen und übergibt komplexe Fälle kontextbezogen an Ihr Team.",
    },
    es: {
      primaryKeyword: "automatizar flujos de atención al cliente",
      title: "Automatice los flujos de soporte al cliente con IA | LetssAI",
      description:
        "Atención al cliente con IA que responde preguntas frecuentes en web, WhatsApp y correo, derivando casos complejos a su equipo con contexto.",
    },
    fr: {
      primaryKeyword: "automatiser les flux de support client",
      title: "Automatiser les flux de support client avec l'IA | LetssAI",
      description:
        "Support client IA qui répond aux questions répétitives sur site, WhatsApp et e-mail, puis transfère les cas délicats à votre équipe avec contexte.",
    },
  },

  "/services/ai-calling-appointment-booking": {
    en: {
      primaryKeyword: "AI voice agent appointment booking",
      title: "AI Voice Agent for Calls & Appointment Booking | LetssAI",
      description:
        "Automate inbound and outbound calls, appointment booking, reminders and feedback with a multilingual AI voice agent and safe human handoff.",
    },
    hi: {
      primaryKeyword: "AI वॉइस एजेंट अपॉइंटमेंट बुकिंग",
      title: "कॉल्स और अपॉइंटमेंट बुकिंग के लिए AI वॉइस एजेंट | LetssAI",
      description:
        "इनबाउंड और आउटबाउंड कॉल्स, अपॉइंटमेंट बुकिंग, रिमाइंडर और फ़ीडबैक को बहुभाषी AI वॉइस एजेंट और सुरक्षित ह्यूमन हैंडऑफ़ के साथ ऑटोमेट करें।",
    },
    de: {
      primaryKeyword: "KI-Sprachagent Terminbuchung",
      title: "KI-Sprachagent für Telefonate & Terminbuchung | LetssAI",
      description:
        "Automatisieren Sie Inbound- und Outbound-Anrufe, Terminbuchung, Erinnerungen und Feedback mit einem mehrsprachigen KI-Sprachassistenten.",
    },
    es: {
      primaryKeyword: "agente de voz con IA para reserva de citas",
      title: "Agente de voz con IA para llamadas y citas | LetssAI",
      description:
        "Automatice llamadas entrantes y salientes, reserva de citas, recordatorios y encuestas con un agente de voz multilingüe y traspaso humano seguro.",
    },
    fr: {
      primaryKeyword: "agent vocal IA prise de rendez-vous",
      title: "Agent vocal IA pour appels & prise de rendez-vous | LetssAI",
      description:
        "Automatisez les appels entrants et sortants, la prise de rendez-vous, les rappels et le recueil d'avis avec un agent vocal IA multilingue.",
    },
  },

  "/services/ai-sales-lead-follow-up": {
    en: {
      primaryKeyword: "AI lead qualification automation",
      title: "AI Lead Follow-Up & Qualification Automation | LetssAI",
      description:
        "Respond to every lead fast. AI qualifies enquiries, books consultations and updates HubSpot, Pipedrive or Zoho so reps only talk to ready buyers.",
    },
    hi: {
      primaryKeyword: "AI लीड योग्यता ऑटोमेशन",
      title: "AI लीड फ़ॉलो-अप और योग्यता ऑटोमेशन | LetssAI",
      description:
        "हर लीड को तुरंत जवाब दें। AI पूछताछ को योग्य बनाता है, परामर्श बुक करता है और CRM अपडेट करता है ताकि प्रतिनिधि केवल तैयार खरीदारों से बात करें।",
    },
    de: {
      primaryKeyword: "KI-Lead-Qualifizierungs-Automatisierung",
      title: "KI-Lead-Follow-up & Qualifizierungs-Automatisierung | LetssAI",
      description:
        "Schnell auf jede Anfrage reagieren. KI qualifiziert Leads, bucht Termine und aktualisiert CRM-Systeme, damit Ihr Vertrieb mit echten Käufern spricht.",
    },
    es: {
      primaryKeyword: "automatización de calificación de leads con IA",
      title: "Seguimiento y calificación de leads con IA | LetssAI",
      description:
        "Responda a cada lead al instante. La IA califica consultas, agenda citas y actualiza su CRM para que sus comerciales hablen con compradores listos.",
    },
    fr: {
      primaryKeyword: "automatisation de la qualification des leads par IA",
      title: "Suivi et qualification de prospects avec l'IA | LetssAI",
      description:
        "Répondez vite à chaque prospect. L'IA qualifie les demandes, planifie des rendez-vous et met à jour votre CRM pour vos équipes commerciales.",
    },
  },

  "/services/ai-crm-development": {
    en: {
      primaryKeyword: "custom AI CRM development",
      title: "Custom AI CRM Development for Sales Teams | LetssAI",
      description:
        "Design an AI-ready CRM around your sales process: unified conversations, auto-logged notes, AI summaries and reliable pipeline reporting.",
    },
    hi: {
      primaryKeyword: "कस्टम AI CRM डेवलपमेंट",
      title: "सेल्स टीमों के लिए कस्टम AI CRM डेवलपमेंट | LetssAI",
      description:
        "अपनी बिक्री प्रक्रिया के अनुरूप AI-सक्षम CRM तैयार करें: एकीकृत बातचीत, स्वतः सहेजे गए नोट्स, AI सारांश और सटीक पाइपलाइन रिपोर्टिंग।",
    },
    de: {
      primaryKeyword: "individuelle KI-CRM-Entwicklung",
      title: "Individuelle KI-CRM-Entwicklung für Vertriebsteams | LetssAI",
      description:
        "Ein KI-fähiges CRM nach Ihrem Verkaufsprozess: gebündelte Konversationen, automatische Notizen, KI-Zusammenfassungen und verlässliche Berichte.",
    },
    es: {
      primaryKeyword: "desarrollo de CRM con IA personalizado",
      title: "Desarrollo de CRM con IA para equipos de ventas | LetssAI",
      description:
        "Diseñe un CRM adaptado a sus ventas: conversaciones unificadas, notas automáticas, resúmenes con IA y análisis fiable de su canal comercial.",
    },
    fr: {
      primaryKeyword: "développement de CRM IA sur mesure",
      title: "Développement de CRM IA sur mesure pour les ventes | LetssAI",
      description:
        "Concevez un CRM prêt pour l'IA selon vos processus : conversations unifiées, notes automatiques, résumés IA et rapports fiables de pipeline.",
    },
  },

  "/services/ai-system-integration": {
    en: {
      primaryKeyword: "AI system integration",
      title: "AI System Integration: CRM, API & MCP Connectors | LetssAI",
      description:
        "Connect AI agents to your CRM, email, calendars, databases and WhatsApp via APIs, MCP and SIP, without replacing the tools your team uses.",
    },
    hi: {
      primaryKeyword: "AI सिस्टम एकीकरण",
      title: "AI सिस्टम एकीकरण: CRM, API और MCP कनेक्टर्स | LetssAI",
      description:
        "मौजूदा टूल्स को बदले बिना अपने CRM, ईमेल, कैलेंडर, डेटाबेस और WhatsApp से AI एजेंट्स को APIs, MCP और SIP के माध्यम से जोड़ें।",
    },
    de: {
      primaryKeyword: "KI-Systemintegration",
      title: "KI-Systemintegration: CRM-, API- & MCP-Konnektoren | LetssAI",
      description:
        "Verbinden Sie KI-Agenten über APIs, MCP und SIP mit CRM, E-Mail, Kalendern und Datenbanken, ohne bestehende Software ersetzen zu müssen.",
    },
    es: {
      primaryKeyword: "integración de sistemas de IA",
      title: "Integración de sistemas de IA: CRM, API y conectores MCP | LetssAI",
      description:
        "Conecte agentes de IA a su CRM, correo, calendarios, bases de datos y WhatsApp mediante APIs, MCP y SIP, sin reemplazar sus herramientas.",
    },
    fr: {
      primaryKeyword: "intégration de systèmes IA",
      title: "Intégration de systèmes IA : connecteurs CRM, API & MCP | LetssAI",
      description:
        "Connectez des agents IA à votre CRM, e-mails, calendriers, bases de données et WhatsApp via APIs, MCP et SIP, sans remplacer vos outils.",
    },
  },

  "/industries": {
    en: {
      primaryKeyword: "industry specific AI solutions",
      title: "AI for Real Estate, Clinics, Legal & E-commerce | LetssAI",
      description:
        "Industry-specific AI workflows for real estate, clinics, law firms, education, e-commerce and finance: faster replies, bookings, reminders and reports.",
    },
    hi: {
      primaryKeyword: "उद्योग-विशिष्ट AI समाधान",
      title: "रियल एस्टेट, क्लीनिक, कानूनी फर्म और ई-कॉमर्स के लिए AI | LetssAI",
      description:
        "रियल एस्टेट, क्लीनिक, वकीलों, शिक्षा, ई-कॉमर्स और वित्त के लिए उद्योग-विशिष्ट AI समाधान: तेज़ उत्तर, बुकिंग, रिमाइंडर और रिपोर्ट।",
    },
    de: {
      primaryKeyword: "branchenspezifische KI-Lösungen",
      title: "KI für Immobilien, Kliniken, Kanzleien & E-Commerce | LetssAI",
      description:
        "Branchenspezifische KI-Workflows für Immobilien, Praxen, Kanzleien, Bildung, E-Commerce und Finanzen: schnellere Antworten, Buchungen und Berichte.",
    },
    es: {
      primaryKeyword: "soluciones de IA específicas por sector",
      title: "IA para inmobiliarias, clínicas, despachos y e-commerce | LetssAI",
      description:
        "Flujos de IA para inmobiliarias, clínicas, despachos jurídicos, educación, tiendas online y finanzas: respuestas rápidas, citas y recordatorios.",
    },
    fr: {
      primaryKeyword: "solutions IA par secteur d'activité",
      title: "IA pour immobilier, cliniques, juridique & e-commerce | LetssAI",
      description:
        "Workflows IA sectoriels pour l'immobilier, les cliniques, le droit, l'éducation, le e-commerce et la finance : réponses rapides, rendez-vous et rapports.",
    },
  },

  "/industries/real-estate": {
    en: {
      primaryKeyword: "AI for real estate lead follow up",
      title: "AI for Real Estate: Lead Follow-Up & Site Visits | LetssAI",
      description:
        "AI that follows up property enquiries fast, qualifies buyers, books site visits over WhatsApp or calls, and keeps your CRM up to date.",
    },
    hi: {
      primaryKeyword: "रियल एस्टेट लीड फ़ॉलो-अप के लिए AI",
      title: "रियल एस्टेट के लिए AI: लीड फ़ॉलो-अप और साइट विज़िट्स | LetssAI",
      description:
        "संपत्ति पूछताछ पर तुरंत प्रतिक्रिया, खरीदारों की योग्यता जांच, WhatsApp या कॉल पर साइट विज़िट बुकिंग और CRM को हमेशा अपडेट रखने वाला AI।",
    },
    de: {
      primaryKeyword: "KI für Immobilien Lead-Follow-up",
      title: "KI für Immobilien: Lead-Follow-up & Besichtigungstermine | LetssAI",
      description:
        "Immobilienanfragen blitzschnell beantworten, Interessenten qualifizieren, Besichtigungen per WhatsApp oder Telefon buchen und CRM pflegen.",
    },
    es: {
      primaryKeyword: "IA para seguimiento de leads inmobiliarios",
      title: "IA para inmobiliarias: seguimiento de leads y visitas | LetssAI",
      description:
        "IA para responder rápido a consultas de inmuebles, calificar compradores, agendar visitas por WhatsApp o llamadas y actualizar el CRM.",
    },
    fr: {
      primaryKeyword: "IA pour le suivi de prospects immobiliers",
      title: "IA pour l'immobilier : suivi de leads & visites sur site | LetssAI",
      description:
        "L'IA qui répond vite aux demandes immobilières, qualifie les acheteurs, réserve des visites par WhatsApp ou téléphone et actualise le CRM.",
    },
  },

  "/industries/healthcare-clinics": {
    en: {
      primaryKeyword: "AI appointment booking for clinics",
      title: "AI Appointment Booking & Patient FAQs for Clinics | LetssAI",
      description:
        "Reduce front desk workload with AI appointment booking, reminders, patient FAQs and feedback collection. Admin support only, with human handoff.",
    },
    hi: {
      primaryKeyword: "क्लीनिकों के लिए AI अपॉइंटमेंट बुकिंग",
      title:
        "क्लीनिकों के लिए AI अपॉइंटमेंट बुकिंग और मरीज़ अक्सर पूछे जाने वाले प्रश्न | LetssAI",
      description:
        "AI अपॉइंटमेंट बुकिंग, रिमाइंडर, मरीज़ों के प्रश्नों और फ़ीडबैक संग्रह से फ़्रंट डेस्क का बोझ कम करें। केवल प्रशासनिक सहायता, मानव हैंडऑफ़ सहित।",
    },
    de: {
      primaryKeyword: "KI-Terminbuchung für Arztpraxen",
      title:
        "KI-Terminbuchung & Patienten-FAQs für Praxen & Kliniken | LetssAI",
      description:
        "Empfang entlasten mit KI-Terminbuchung, Erinnerungen, Patienten-FAQs und Feedback-Erfassung. Rein administrative Unterstützung mit Übergabe an Personal.",
    },
    es: {
      primaryKeyword: "reserva de citas con IA para clínicas",
      title: "Reserva de citas con IA y FAQs de pacientes para clínicas | LetssAI",
      description:
        "Reduzca la carga de recepción con reservas con IA, recordatorios, dudas de pacientes y opiniones. Solo soporte administrativo con traspaso humano.",
    },
    fr: {
      primaryKeyword: "prise de rendez-vous IA pour cliniques",
      title: "Prise de rendez-vous IA & FAQ patients pour cliniques | LetssAI",
      description:
        "Allégez l'accueil avec la prise de rendez-vous IA, les rappels, les FAQ patients et les avis. Support administratif uniquement, avec transfert humain.",
    },
  },

  "/industries/legal-firms": {
    en: {
      primaryKeyword: "AI client intake for law firms",
      title: "AI Client Intake & Scheduling for Law Firms | LetssAI",
      description:
        "Automate client intake, consultation scheduling and document search for law firms. Administrative AI with lawyer review, never legal advice.",
    },
    hi: {
      primaryKeyword: "लॉ फर्मों के लिए AI क्लाइंट इनटेक",
      title: "लॉ फर्मों के लिए AI क्लाइंट इनटेक और शेड्यूलिंग | LetssAI",
      description:
        "लॉ फर्मों के लिए क्लाइंट इनटेक, परामर्श शेड्यूलिंग और दस्तावेज़ खोज को स्वचालित करें। वकील की समीक्षा सहित प्रशासनिक AI, कानूनी सलाह नहीं।",
    },
    de: {
      primaryKeyword: "KI-Mandantenaufnahme für Kanzleien",
      title: "KI-Mandantenaufnahme & Terminplanung für Kanzleien | LetssAI",
      description:
        "Automatisieren Sie Erstaufnahme, Erstberatungs-Termine und Dokumentensuche für Anwälte. Administrative KI mit Anwaltsprüfung, keine Rechtsberatung.",
    },
    es: {
      primaryKeyword: "recepción de clientes con IA para despachos jurídicos",
      title: "Admisión de clientes y citas con IA para despachos legales | LetssAI",
      description:
        "Automatice la recepción de clientes, consultas y búsqueda de documentos para despachos. IA administrativa revisada por abogados, nunca consejo legal.",
    },
    fr: {
      primaryKeyword: "admission client par IA pour cabinets d'avocats",
      title:
        "Accueil de clients IA & planification pour cabinets d'avocats | LetssAI",
      description:
        "Automatisez l'admission des dossiers, les rendez-vous et la recherche documentaire. IA administrative sous contrôle d'avocats, sans conseil juridique.",
    },
  },

  "/industries/education-coaching": {
    en: {
      primaryKeyword: "AI admission follow up for coaching",
      title: "AI Admission Follow-Up & Demo Booking for Coaching | LetssAI",
      description:
        "Reply to admission enquiries fast, answer course FAQs, book demo classes and send payment reminders by WhatsApp and calls with AI assistants.",
    },
    hi: {
      primaryKeyword: "कोचिंग के लिए AI प्रवेश फ़ॉलो-अप",
      title: "कोचिंग के लिए AI प्रवेश फ़ॉलो-अप और डेमो बुकिंग | LetssAI",
      description:
        "प्रवेश पूछताछ का तुरंत उत्तर दें, पाठ्यक्रम संबंधी सवालों के जवाब दें, डेमो क्लास बुक करें और WhatsApp एवं कॉल्स पर भुगतान रिमाइंडर भेजें।",
    },
    de: {
      primaryKeyword: "KI-Aufnahme-Follow-up für Bildung & Coaching",
      title:
        "KI-Anmeldungs-Follow-up & Demo-Buchung für Bildungsanbieter | LetssAI",
      description:
        "Schnelle Antworten auf Kursanfragen, Demo-Unterricht buchen und Zahlungserinnerungen per WhatsApp und Telefon mit KI-Assistenten versenden.",
    },
    es: {
      primaryKeyword: "seguimiento de admisiones con IA para academias",
      title:
        "Seguimiento de admisiones y clases demo con IA para formación | LetssAI",
      description:
        "Responda consultas de cursos, agende clases de prueba y envíe recordatorios de pago por WhatsApp y llamadas con asistentes de IA.",
    },
    fr: {
      primaryKeyword: "suivi d'admission par IA pour le coaching",
      title: "Suivi des admissions & réservations démo pour la formation | LetssAI",
      description:
        "Répondez vite aux demandes d'inscription, planifiez des cours d'essai et envoyez des rappels de paiement par WhatsApp et appels avec l'IA.",
    },
  },

  "/industries/retail-ecommerce": {
    en: {
      primaryKeyword: "AI customer support for ecommerce",
      title: "AI Customer Support & Cart Recovery for E-commerce | LetssAI",
      description:
        "Answer order and returns questions, recover abandoned carts with voice AI calls and verify COD orders. AI support built for online stores.",
    },
    hi: {
      primaryKeyword: "ई-कॉमर्स के लिए AI कस्टमर सपोर्ट",
      title: "ई-कॉमर्स के लिए AI ग्राहक सहायता और कार्ट रिकवरी | LetssAI",
      description:
        "ऑर्डर और रिटर्न के सवालों के जवाब दें, वॉइस AI कॉल्स से छूटे हुए कार्ट्स वापस लाएँ और COD ऑर्डर सत्यापित करें। ऑनलाइन स्टोर्स के लिए निर्मित AI।",
    },
    de: {
      primaryKeyword: "KI-Kundensupport für E-Commerce",
      title: "KI-Kundensupport & Warenkorb-Rettung für den E-Commerce | LetssAI",
      description:
        "Bestell- und Retourenfragen klären, verlassene Warenkörbe per Sprach-KI reaktivieren und Nachnahme-Bestellungen verifizieren.",
    },
    es: {
      primaryKeyword: "soporte al cliente con IA para comercio electrónico",
      title: "Atención al cliente y recuperación de carritos con IA | LetssAI",
      description:
        "Resuelva dudas de pedidos y devoluciones, recupere carritos abandonados con llamadas de IA y valide pedidos contra reembolso.",
    },
    fr: {
      primaryKeyword: "support client IA pour le e-commerce",
      title:
        "Support client IA & récupération de paniers pour le e-commerce | LetssAI",
      description:
        "Gérez les questions de commandes et retours, relancez les paniers abandonnés par appels vocaux IA et vérifiez les commandes avec l'IA.",
    },
  },

  "/industries/finance-accounting": {
    en: {
      primaryKeyword: "AI workflow automation for accounting",
      title: "AI Workflow Automation for Accounting & Finance | LetssAI",
      description:
        "Cut manual follow-up with AI for document collection, invoice data extraction, client reminders and report prep. Admin automation, not financial advice.",
    },
    hi: {
      primaryKeyword: "अकाउंटिंग के लिए AI वर्कफ़्लो ऑटोमेशन",
      title: "अकाउंटिंग और फाइनेंस के लिए AI वर्कफ़्लो ऑटोमेशन | LetssAI",
      description:
        "दस्तावेज़ संग्रह, इनवॉइस डेटा निष्कर्षण, रिमाइंडर और रिपोर्ट तैयारी के लिए AI का उपयोग करें। प्रशासनिक स्वचालन, वित्तीय सलाह नहीं।",
    },
    de: {
      primaryKeyword: "KI-Workflow-Automatisierung für das Rechnungswesen",
      title: "KI-Workflow-Automatisierung für Buchhaltung & Finanzen | LetssAI",
      description:
        "Reduzieren Sie manuellen Aufwand bei Belegsammlung, Rechnungserfassung, Erinnerungen und Berichtsvorbereitung. Keine Finanzberatung.",
    },
    es: {
      primaryKeyword: "automatización de flujos de IA para contabilidad",
      title: "Automatización de flujos de IA para contabilidad y finanzas | LetssAI",
      description:
        "Reduzca el trabajo manual en recopilación de documentos, facturación, recordatorios y preparación de informes. No es asesoramiento financiero.",
    },
    fr: {
      primaryKeyword: "automatisation des flux IA pour la comptabilité",
      title: "Automatisation de flux IA pour comptabilité & finance | LetssAI",
      description:
        "Réduisez les relances manuelles pour la collecte de pièces, l'extraction de factures et la préparation de rapports. Sans conseil financier.",
    },
  },

  "/why-letssai": {
    en: {
      primaryKeyword: "AI transformation partner for business",
      title: "AI Transformation Partner for Growing Businesses | LetssAI",
      description:
        "Custom AI workflows, no stack disruption, human-in-the-loop control and end-to-end delivery in weeks. See why growing businesses choose LetssAI.",
    },
    hi: {
      primaryKeyword: "व्यवसायों के लिए AI ट्रांसफ़ॉर्मेशन पार्टनर",
      title: "बढ़ते व्यवसायों के लिए AI ट्रांसफ़ॉर्मेशन पार्टनर | LetssAI",
      description:
        "कस्टम AI वर्कफ़्लो, बिना मौजूदा सिस्टम बदले, मानवीय नियंत्रण और हफ्तों में डिलीवरी। जानें क्यों बढ़ते व्यवसाय LetssAI को चुनते हैं।",
    },
    de: {
      primaryKeyword: "KI-Transformationspartner für Unternehmen",
      title: "KI-Transformationspartner für wachsende Unternehmen | LetssAI",
      description:
        "Individuelle KI-Workflows, keine Systemumbrüche, Mensch-in-der-Schleife und Implementierung in Wochen. Warum Unternehmen auf LetssAI vertrauen.",
    },
    es: {
      primaryKeyword: "socio de transformación con IA para empresas",
      title: "Socio de transformación con IA para empresas en crecimiento | LetssAI",
      description:
        "Flujos de IA a medida, sin cambiar sus herramientas, con control humano y entrega en pocas semanas. Descubra por qué eligen LetssAI.",
    },
    fr: {
      primaryKeyword: "partenaire de transformation IA pour entreprises",
      title: "Partenaire de transformation IA pour entreprises en croissance | LetssAI",
      description:
        "Workflows IA sur mesure, sans perturber vos outils, contrôle humain et déploiement en quelques semaines. Découvrez pourquoi choisir LetssAI.",
    },
  },

  "/contact": {
    en: {
      primaryKeyword: "contact LetssAI",
      title: "Contact LetssAI | Free AI Workflow Consultation",
      description:
        "Tell us what you want to automate. Get a free AI workflow review and the safest, most useful first step. Remote-first team serving clients worldwide.",
    },
    hi: {
      primaryKeyword: "LetssAI से संपर्क करें",
      title: "LetssAI से संपर्क करें | निःशुल्क AI वर्कफ़्लो परामर्श",
      description:
        "बताएँ कि आप क्या ऑटोमेट करना चाहते हैं। निःशुल्क वर्कफ़्लो समीक्षा और सबसे सुरक्षित पहला कदम प्राप्त करें। वैश्विक ग्राहकों के लिए उपलब्ध।",
    },
    de: {
      primaryKeyword: "LetssAI kontaktieren",
      title: "Kontakt zu LetssAI | Kostenlose KI-Workflow-Beratung",
      description:
        "Sagen Sie uns, was Sie automatisieren möchten. Erhalten Sie eine kostenlose Workflow-Analyse und den besten ersten Schritt für Ihr Team.",
    },
    es: {
      primaryKeyword: "contactar a LetssAI",
      title: "Contacte con LetssAI | Consulta gratuita de flujos de IA",
      description:
        "Cuéntenos qué desea automatizar. Obtenga una revisión gratuita de su flujo de trabajo y un primer paso seguro. Atendemos a clientes globales.",
    },
    fr: {
      primaryKeyword: "contacter LetssAI",
      title: "Contacter LetssAI | Consultation gratuite sur vos flux IA",
      description:
        "Expliquez-nous ce que vous souhaitez automatiser. Obtenez un audit gratuit et une première étape concrète. Équipe au service de clients dans le monde.",
    },
  },

  "/ai-discovery": {
    en: {
      primaryKeyword: "free AI discovery call",
      title: "Book a Free 30-Minute AI Discovery Call | LetssAI",
      description:
        "Book a free 30-minute AI discovery call. We'll review your workflows, find high-impact automation opportunities and map a practical first step.",
    },
    hi: {
      primaryKeyword: "निःशुल्क AI डिस्कवरी कॉल",
      title: "30 मिनट का निःशुल्क AI डिस्कवरी कॉल बुक करें | LetssAI",
      description:
        "30 मिनट का निःशुल्क AI डिस्कवरी कॉल बुक करें। हम आपके वर्कफ़्लो की समीक्षा करेंगे, उच्च-प्रभाव वाले अवसर खोजेंगे और पहला कदम तय करेंगे।",
    },
    de: {
      primaryKeyword: "kostenloser KI-Discovery-Call",
      title: "Kostenlosen 30-minütigen KI-Discovery-Call buchen | LetssAI",
      description:
        "Buchen Sie ein kostenloses 30-minütiges KI-Gespräch. Wir prüfen Ihre Arbeitsabläufe, identifizieren Potenziale und definieren den ersten Schritt.",
    },
    es: {
      primaryKeyword: "llamada gratuita de descubrimiento de IA",
      title: "Reserve una llamada de descubrimiento de IA de 30 minutos | LetssAI",
      description:
        "Reserve una llamada gratuita de 30 minutos. Analizaremos sus flujos, detectaremos oportunidades clave y definiremos un primer paso práctico.",
    },
    fr: {
      primaryKeyword: "appel découverte IA gratuit",
      title: "Réserver un appel découverte IA gratuit de 30 minutes | LetssAI",
      description:
        "Réservez un appel gratuit de 30 minutes. Nous examinerons vos processus, identifierons les opportunités clés et tracerons une première étape concrète.",
    },
  },
}

export function normalizeSeoPath(pathOrSlug: string): string {
  if (pathOrSlug === "" || pathOrSlug === "/" || pathOrSlug === "home") return "/"
  const clean = pathOrSlug.startsWith("/") ? pathOrSlug : `/${pathOrSlug}`
  if (pageSeoRegistry[clean]) return clean
  if (pageSeoRegistry[`/services/${pathOrSlug}`]) return `/services/${pathOrSlug}`
  if (pageSeoRegistry[`/industries/${pathOrSlug}`]) return `/industries/${pathOrSlug}`
  return clean
}

export function getPageSeo(pathOrSlug: string, locale: Locale): PageSeoItem {
  const normalized = normalizeSeoPath(pathOrSlug)
  const entry = pageSeoRegistry[normalized]
  if (entry && entry[locale]) {
    return entry[locale]
  }
  if (entry && entry.en) {
    return entry.en
  }
  return {
    title: "LetssAI",
    description: "AI Automation & Custom AI Agents for Business",
  }
}
