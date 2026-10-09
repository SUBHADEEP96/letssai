import type { Locale } from "@/i18n/routing"

export interface LegalSection {
  heading: string
  subheading?: string
  paragraphs?: string[]
  list?: { label?: string; text: string }[]
  note?: string
}

export interface LegalDocument {
  metaTitle: string
  metaDescription: string
  title: string
  lastUpdated: string
  intro: string[]
  notice?: string
  sections: LegalSection[]
  closing: {
    entity: string
    subtext: string
    email: string
    location: string
    date: string
  }
}

const en: LegalDocument = {
  metaTitle: "Privacy Policy | LetssAI",
  metaDescription:
    "Learn how LetssAI collects, uses, protects, and manages personal data across global enterprise AI workflows and conversational systems.",
  title: "Privacy policy",
  lastUpdated: "Last updated October 9, 2026",
  intro: [
    'This Privacy Policy is designed to help you understand how LetssAI  ("LetssAI," "we," "us," or "our"), an Indian-origin enterprise AI solutions provider delivering autonomous voice agents, conversational workflows, and systems integrations globally, collects, uses, and shares your personal information, and to help you understand and exercise your privacy rights.',
  ],
  notice:
    'An Important Note: This Privacy Policy does not apply to any of the personal information that we process strictly on behalf of our enterprise customers through their commercial use of our Services ("Customer Data"). Our customers\' respective privacy policies and contractual documentation govern their collection and use of Customer Data. We process this Customer Data only according to the instructions of our customers under executed Master Services Agreements and Data Processing Agreements, not this Privacy Policy. Any questions or requests relating to Customer Data should be directed to the relevant customer.',
  sections: [
    {
      heading: "1. Scope and Updates to This Privacy Policy",
      paragraphs: [
        'This Privacy Policy applies to personal information processed by us, including on our websites, mobile applications, demonstration environments, and other online or offline offerings (collectively, the "Services").',
        'Changes to our Privacy Policy: We may revise this Privacy Policy from time to time in our sole discretion. If there are any material changes, we will notify you as required by applicable law and update the "Last updated" date above. You understand and agree that you will be deemed to have accepted the updated Privacy Policy if you continue to use our Services after the new Privacy Policy takes effect.',
      ],
    },
    {
      heading: "2. Personal Information We Collect",
      paragraphs: [
        "The categories of personal information we collect depend on how you interact with us, our Services, and the requirements of applicable law. We collect information that you provide to us, information we obtain automatically when you use our Services, and information from third-party sources.",
      ],
      list: [
        {
          label: "Account and Contact Information",
          text: "When you request an AI workflow consultation, schedule a demo, or contact us, we collect personal information such as your name, corporate email address, telephone number, job title, company name, and industry.",
        },
        {
          label: "AI Demonstration and Interactive Features",
          text: "When you interact with our demonstration voice agents or chat assistants, we collect transcripts, audio session inputs, and conversational context provided during the interaction.",
        },
        {
          label: "Surveys and Feedback",
          text: "If you participate in customer research, surveys, or product interviews, we collect your submitted feedback and qualitative responses.",
        },
        {
          label: "Business Development Information",
          text: "We collect professional details from business meetings, industry conferences, and webinars to evaluate potential commercial partnerships.",
        },
        {
          label: "Job Applicant Information",
          text: "When you apply for a career at LetssAI, we collect resumes, CVs, employment history, and professional references.",
        },
        {
          label: "Automatically Collected Technical Data",
          text: "When you access our websites, our servers automatically log Internet Protocol (IP) addresses, browser type, device specifications, operating system, approximate geographic location, referring URLs, pages viewed, and session durations.",
        },
      ],
    },
    {
      heading: "3. How We Use Your Personal Information",
      paragraphs: [
        "We use your personal information for lawful business purposes, including:",
      ],
      list: [
        {
          label: "Service Delivery",
          text: "Providing, operating, and maintaining our enterprise AI workflow platform and answering technical inquiries.",
        },
        {
          label: "Customer Support and Communications",
          text: "Responding to inquiries submitted to sales@letssai.com, delivering workflow proposals, and communicating administrative updates.",
        },
        {
          label: "Security and Fraud Prevention",
          text: "Protecting our infrastructure from unauthorized access, verifying user identities, and mitigating malicious cyber activity.",
        },
        {
          label: "Product Quality and Usability",
          text: "Benchmarking platform reliability, debugging software errors, and improving overall system responsiveness.",
        },
        {
          label: "Statutory Compliance",
          text: "Fulfilling tax, audit, corporate reporting, and regulatory requirements under Indian and international laws.",
        },
      ],
      note: "Zero Unconsented Foundation Model Training: LetssAI strictly does not use confidential enterprise Customer Data or client-proprietary inputs to train publicly available foundation models without express written authorization.",
    },
    {
      heading: "4. How We Disclose Your Personal Information",
      paragraphs: [
        "We do not sell your personal information. We disclose personal data only under the following limited circumstances:",
      ],
      list: [
        {
          label: "Service Providers and Cloud Hosts",
          text: "Trusted cloud hosting, database, and infrastructure providers (such as AWS, Google Cloud, and Microsoft Azure) operating under strict data protection agreements.",
        },
        {
          label: "Telecommunications and Voice Gateways",
          text: "Licensed voice carriers and messaging infrastructure used strictly to route automated calls and notifications configured for client workflows.",
        },
        {
          label: "Professional Advisors",
          text: "Auditors, legal counsel, and financial consultants bound by professional confidentiality obligations.",
        },
        {
          label: "Legal and Regulatory Compliance",
          text: "Judicial authorities, regulators, or law enforcement bodies when mandated by applicable law, court order, or enforceable subpoena.",
        },
        {
          label: "Business Transfers",
          text: "Prospective acquirers or merger partners in connection with any evaluation or consummation of a merger, acquisition, financing, or transfer of company assets.",
        },
      ],
    },
    {
      heading: "5. Cookies and Tracking Technologies",
      paragraphs: [
        "We and our analytics partners deploy cookies and similar technologies to facilitate site navigation, evaluate traffic patterns, and improve performance.",
        "You may adjust your browser settings to reject non-essential cookies. We also honor valid Global Privacy Control (GPC) opt-out signals transmitted by your browser.",
      ],
    },
    {
      heading: "6. International Transfers of Personal Information",
      paragraphs: [
        "LetssAI is an enterprise company of Indian origin delivering solutions across global territories, including India, the United States, Ireland, the United Kingdom, the Netherlands, Singapore, Malaysia, Australia, the United Arab Emirates, New Zealand, Canada, Denmark, and Finland.",
        "When transferring personal data across international borders, we implement robust transfer mechanisms recognized by applicable data protection authorities:",
      ],
      list: [
        {
          label: "European Union and Switzerland",
          text: "We execute the European Commission Standard Contractual Clauses (SCCs).",
        },
        {
          label: "United Kingdom",
          text: "We adhere to the UK International Data Transfer Addendum to the EU Commission SCCs.",
        },
        {
          label: "India",
          text: "Cross-border data transfers comply with the provisions of India's Digital Personal Data Protection Act, 2023 (DPDP Act).",
        },
        {
          label: "Asia-Pacific and Middle East",
          text: "Transfers satisfy requirements under Singapore's PDPA, the Australian Privacy Act 1988, and UAE Federal Decree-Law No. 45 of 2021.",
        },
      ],
    },
    {
      heading: "7. Data Retention and Security",
      paragraphs: [
        "Security Safeguards: We maintain multi-tiered technical and organizational security measures, including transport encryption (TLS 1.3), storage encryption (AES-256), continuous security logging, and role-based access controls.",
        "Data Retention: We store personal information only for the duration necessary to satisfy the business purposes outlined in this policy, service active commercial agreements, resolve disputes, and comply with applicable statutory retention requirements. Once no longer required, data is irreversibly deleted or de-identified.",
      ],
    },
    {
      heading: "8. Your Privacy Rights and Choices",
      paragraphs: [
        "Subject to local laws, you may exercise the following rights regarding your personal information:",
      ],
      list: [
        {
          label: "Access and Portability",
          text: "Request confirmation of whether we process your data, obtain a copy, or receive your data in a structured, machine-readable format.",
        },
        {
          label: "Correction and Deletion",
          text: "Request the rectification of inaccurate records or the erasure of your personal information.",
        },
        {
          label: "Restriction and Objection",
          text: "Object to direct marketing communications or request restrictions on certain processing operations.",
        },
        {
          label: "Consent Withdrawal",
          text: "Withdraw your consent to processing at any time, with prospective effect.",
        },
      ],
      note: "To exercise any of your privacy rights, please contact us at sales@letssai.com. We will respond within the timeframe mandated by applicable law.",
    },
    {
      heading: "9. Regional Statutory Disclosures",
      paragraphs: [
        "India (DPDP Act, 2023): Indian Data Principals may request a summary of personal data, nominate an authorized representative, and access our grievance redressal process.",
        "EEA and UK (GDPR / UK GDPR): Our legal bases for processing include performance of a contract, legitimate commercial interests, legal compliance, and consent. You have the right to lodge a complaint with your competent supervisory authority.",
        "United States (California CCPA / CPRA): We do not sell your personal data for monetary consideration. California residents may exercise statutory rights to know, delete, correct, and opt out of cross-context behavioral advertising.",
      ],
    },
    {
      heading: "10. Children's Privacy",
      paragraphs: [
        "Our Services are strictly engineered for businesses and professionals. We do not knowingly collect personal information from individuals under 18 years of age. If you believe a minor has submitted personal information to us, please notify us at sales@letssai.com so we may delete it immediately.",
      ],
    },
    {
      heading: "11. Contact Information",
      paragraphs: [
        "For any inquiries, requests, or privacy concerns regarding this Privacy Policy, please contact our team directly at sales@letssai.com.",
      ],
    },
  ],
  closing: {
    entity: "LetssAI ",
    subtext: "Privacy & Data Protection Operations",
    email: "sales@letssai.com",
    location: "Headquartered in India | Global Remote Delivery",
    date: "Last updated October 9, 2026",
  },
}

const de: LegalDocument = {
  metaTitle: "Datenschutzerklärung | LetssAI",
  metaDescription:
    "Erfahren Sie, wie LetssAI personenbezogene Daten bei globalen Unternehmens-KI-Workflows und Gesprächssystemen erhebt, nutzt und schützt.",
  title: "Datenschutzerklärung",
  lastUpdated: "Zuletzt aktualisiert am 9. Oktober 2026",
  intro: [
    "Diese Datenschutzerklärung soll Ihnen verständlich machen, wie LetssAI  („LetssAI“, „wir“, „uns“ oder „unser“), ein aus Indien stammender Anbieter von Unternehmens-KI-Lösungen für autonome Sprachassistenten und Workflow-Automatisierungen weltweit, Ihre personenbezogenen Daten erhebt, verwendet und schützt.",
  ],
  notice:
    "Wichtiger Hinweis: Diese Datenschutzerklärung gilt nicht für personenbezogene Daten, die wir im Auftrag unserer Unternehmenskunden durch deren Nutzung unserer Dienste verarbeiten („Kundendaten“). Für diese Daten gelten die jeweiligen Datenschutzrichtlinien unserer Kunden. Wir verarbeiten Kundendaten ausschließlich auf Weisung unserer Kunden gemäß den geschlossenen Auftragsverarbeitungsverträgen (AVV).",
  sections: [
    {
      heading: "1. Geltungsbereich und Aktualisierungen",
      paragraphs: [
        "Diese Datenschutzerklärung gilt für personenbezogene Daten, die über unsere Websites, Demonstrationssysteme und sonstigen Online- oder Offline-Angebote verarbeitet werden.",
        "Änderungen: Wir können diese Erklärung von Zeit zu Zeit anpassen. Bei wesentlichen Änderungen informieren wir Sie gemäß den gesetzlichen Vorgaben. Die fortgesetzte Nutzung unserer Dienste gilt als Zustimmung zur aktualisierten Fassung.",
      ],
    },
    {
      heading: "2. Erfasste personenbezogene Daten",
      paragraphs: [
        "Wir erfassen Daten, die Sie uns direkt übermitteln, Daten, die bei der Nutzung automatisch anfallen, sowie geschäftliche Kontaktdaten aus öffentlich zugänglichen beruflichen Quellen.",
      ],
      list: [
        {
          label: "Kontakt- und Kontodaten",
          text: "Name, geschäftliche E-Mail-Adresse, Telefonnummer, Berufsbezeichnung und Unternehmensname bei Kontaktanfragen oder Beratungsgesprächen.",
        },
        {
          label: "KI-Demonstrationen und Interaktionen",
          text: "Gesprächsprotokolle, Texteingaben und Audiodaten aus Tests unserer öffentlichen KI-Assistenten.",
        },
        {
          label: "Automatisch erfasste Telemetriedaten",
          text: "IP-Adressen, Browsertyp, Betriebssystem, ungefährer Standort, Verweildauer und besuchte Unterseiten.",
        },
      ],
    },
    {
      heading: "3. Zweck der Datenverarbeitung",
      paragraphs: [
        "Wir nutzen personenbezogene Daten zur Bereitstellung unserer Dienste, Beantwortung von Kundenanfragen an sales@letssai.com, Systemsicherheit, Fehlerdiagnose und Erfüllung rechtlicher Pflichten.",
      ],
      note: "Kein Modelltraining ohne Zustimmung: LetssAI verwendet vertrauliche Unternehmens- und Kundendaten nicht für das Training öffentlicher KI-Basismodelle.",
    },
    {
      heading: "4. Weitergabe von Daten",
      paragraphs: [
        "Wir verkaufen keine personenbezogenen Daten. Daten werden ausschließlich an geprüfte Cloud-Infrastrukturanbieter (z. B. AWS, Google Cloud, Azure), Telekommunikations-Gateways, Rechtsberater sowie bei behördlichen Verpflichtungen weitergegeben.",
      ],
    },
    {
      heading: "5. Internationale Datenübermittlung",
      paragraphs: [
        "Als indisches Unternehmen mit Kunden in Deutschland, Großbritannien, Irland, den Niederlanden, den USA, Singapur, den VAE und weiteren Ländern stützen wir internationale Übermittlungen auf EU-Standardvertragsklauseln (SCCs) und die anwendbaren gesetzlichen Garantien.",
      ],
    },
    {
      heading: "6. Speicherdauer und Sicherheit",
      paragraphs: [
        "Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke oder gesetzliche Aufbewahrungsfristen erforderlich ist. Sämtliche Daten werden nach aktuellem Stand der Technik (TLS 1.3, AES-256) verschlüsselt.",
      ],
    },
    {
      heading: "7. Ihre Rechte",
      paragraphs: [
        "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerruf erteilter Einwilligungen. Kontaktieren Sie uns hierzu unter sales@letssai.com.",
      ],
    },
    {
      heading: "8. Kontakt",
      paragraphs: [
        "Für Datenschutzanfragen steht Ihnen unser Team unter sales@letssai.com zur Verfügung.",
      ],
    },
  ],
  closing: {
    entity: "LetssAI ",
    subtext: "Datenschutz & Compliance",
    email: "sales@letssai.com",
    location: "Hauptsitz in Indien | Globale Bereitstellung",
    date: "Zuletzt aktualisiert am 9. Oktober 2026",
  },
}

const es: LegalDocument = {
  metaTitle: "Política de Privacidad | LetssAI",
  metaDescription:
    "Conozca cómo LetssAI recopila, utiliza y protege los datos personales en flujos de trabajo de IA empresarial y sistemas conversacionales globales.",
  title: "Política de privacidad",
  lastUpdated: "Última actualización: 9 de octubre de 2026",
  intro: [
    "Esta Política de Privacidad describe cómo LetssAI  («LetssAI», «nosotros» o «nuestro»), una empresa de origen indio proveedora de soluciones de IA empresarial, recopila, utiliza y protege su información personal en todo el mundo.",
  ],
  notice:
    "Nota importante: Esta política no se aplica a los datos procesados en nombre de nuestros clientes empresariales mediante el uso de nuestros agentes de IA («Datos del Cliente»). Dichos datos se procesan exclusivamente siguiendo las instrucciones del cliente según los Acuerdos de Procesamiento de Datos (DPA) vigentes.",
  sections: [
    {
      heading: "1. Alcance y actualizaciones",
      paragraphs: [
        "Esta política aplica a la información personal procesada a través de nuestros sitios web, demostraciones y servicios digitales.",
        "Podemos actualizar esta política periódicamente. Las modificaciones sustanciales se publicarán con la fecha de actualización correspondiente.",
      ],
    },
    {
      heading: "2. Información recopilada",
      paragraphs: [
        "Recopilamos información proporcionada voluntariamente (nombre, correo corporativo, teléfono, empresa al solicitar revisiones de flujos de trabajo), registros de demostraciones interactivas y datos técnicos capturados automáticamente (dirección IP, navegador, sistema operativo y páginas visitadas).",
      ],
    },
    {
      heading: "3. Uso de la información",
      paragraphs: [
        "Utilizamos sus datos para prestar servicios, atender consultas en sales@letssai.com, garantizar la seguridad de la infraestructura, depurar errores y cumplir con obligaciones legales.",
      ],
      note: "Compromiso de IA: LetssAI no utiliza datos confidenciales de clientes para entrenar modelos públicos de inteligencia artificial sin consentimiento explícito.",
    },
    {
      heading: "4. Transferencias internacionales",
      paragraphs: [
        "Como empresa con sede en India que atiende a clientes en Estados Unidos, Reino Unido, Irlanda, Países Bajos, Singapur, Emiratos Árabes Unidos, España y otros países, las transferencias internacionales se sustentan en Cláusulas Contractuales Tipo (SCC) de la UE y normas legales pertinentes.",
      ],
    },
    {
      heading: "5. Sus derechos de privacidad",
      paragraphs: [
        "Usted cuenta con los derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y revocación del consentimiento escribiendo a sales@letssai.com.",
      ],
    },
    {
      heading: "6. Contacto",
      paragraphs: [
        "Para cualquier consulta relacionada con la privacidad, comuníquese con nosotros en sales@letssai.com.",
      ],
    },
  ],
  closing: {
    entity: "LetssAI ",
    subtext: "Operaciones de Privacidad y Protección de Datos",
    email: "sales@letssai.com",
    location: "Sede en India | Entrega Remota Global",
    date: "Última actualización: 9 de octubre de 2026",
  },
}

const fr: LegalDocument = {
  metaTitle: "Politique de Confidentialité | LetssAI",
  metaDescription:
    "Découvrez comment LetssAI collecte, utilise et protège les données personnelles relatives aux flux de travail d'IA et systèmes vocaux d'entreprise.",
  title: "Politique de confidentialité",
  lastUpdated: "Dernière mise à jour le 9 octobre 2026",
  intro: [
    "La présente Politique de Confidentialité a pour objet de vous expliquer comment LetssAI  (« LetssAI », « nous » ou « notre »), entreprise d'origine indienne fournissant des solutions d'IA d'entreprise à l'échelle mondiale, collecte, utilise et protège vos données personnelles.",
  ],
  notice:
    "Remarque essentielle : La présente politique ne s'applique pas aux données personnelles que nous traitons pour le compte de nos clients professionnels lors de l'utilisation de nos services (« Données Client »). Ces données sont régies par les politiques propres à nos clients et traitées selon les accords de traitement des données (DPA) conclus.",
  sections: [
    {
      heading: "1. Champ d'application et modifications",
      paragraphs: [
        "Cette politique s'applique aux informations personnelles traitées sur nos sites web, environnements de démonstration et services associés.",
        "Nous nous réservons le droit de modifier la présente politique. Toute modification importante sera signalée par la mise à jour de la date figurant en en-tête.",
      ],
    },
    {
      heading: "2. Données personnelles collectées",
      paragraphs: [
        "Nous recueillons les informations que vous nous transmettez directement (nom, adresse courriel professionnelle, numéro de téléphone, entreprise, fonction), les échanges lors des démonstrations d'agents IA, ainsi que les données techniques enregistrées automatiquement (adresse IP, navigateur, système d'exploitation, pages consultées).",
      ],
    },
    {
      heading: "3. Utilisation de vos données",
      paragraphs: [
        "Nous utilisons ces données pour fournir nos services, répondre aux demandes formulées à sales@letssai.com, assurer la sécurité informatique, corriger les anomalies techniques et satisfaire à nos obligations légales.",
      ],
      note: "Garantie IA : LetssAI n'utilise jamais les données confidentielles des clients pour entraîner des modèles publics d'intelligence artificielle sans autorisation écrite préalable.",
    },
    {
      heading: "4. Transferts internationaux de données",
      paragraphs: [
        "En tant que société d'origine indienne opérant à l'international (notamment en France, au Royaume-Uni, en Irlande, aux Pays-Bas, aux États-Unis, à Singapour, aux Émirats Arabes Unis et au Canada), nous encadrons les transferts hors de votre juridiction par les Clauses Contractuelles Types (CCT) de l'Union européenne et les garanties réglementaires requises.",
      ],
    },
    {
      heading: "5. Vos droits en matière de confidentialité",
      paragraphs: [
        "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation du traitement, de portabilité de vos données et de retrait de votre consentement. Vous pouvez exercer ces droits en nous écrivant à sales@letssai.com.",
      ],
    },
    {
      heading: "6. Contact",
      paragraphs: [
        "Pour toute question relative à la protection de vos données, vous pouvez contacter notre équipe à l'adresse sales@letssai.com.",
      ],
    },
  ],
  closing: {
    entity: "LetssAI ",
    subtext: "Protection des Données & Conformité",
    email: "sales@letssai.com",
    location: "Siège en Inde | Prestations à l'échelle mondiale",
    date: "Dernière mise à jour le 9 octobre 2026",
  },
}

const hi: LegalDocument = {
  metaTitle: "गोपनीयता नीति | LetssAI",
  metaDescription:
    "जानें कि LetssAI वैश्विक एंटरप्राइज AI वर्कफ़्लो और वार्तालाप प्रणालियों में व्यक्तिगत डेटा को कैसे एकत्र, उपयोग और सुरक्षित करता है।",
  title: "गोपनीयता नीति",
  lastUpdated: "अंतिम अद्यतन: 9 अक्टूबर 2026",
  intro: [
    'यह गोपनीयता नीति यह स्पष्ट करने के लिए बनाई गई है कि भारतीय मूल की एंटरप्राइज AI समाधान प्रदाता कंपनी LetssAI  ("LetssAI," "हम," या "हमारा"), जो विश्व स्तर पर स्वायत्त वॉयस एजेंट और वर्कफ़्लो ऑटोमेशन प्रदान करती है, आपकी व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग और सुरक्षित करती है।',
  ],
  notice:
    'महत्वपूर्ण सूचना: यह गोपनीयता नीति उस व्यक्तिगत डेटा पर लागू नहीं होती जिसे हम अपने व्यावसायिक ग्राहकों की ओर से उनकी व्यावसायिक AI सेवाओं के माध्यम से संसाधित करते हैं ("ग्राहक डेटा")। ग्राहक डेटा हमारे ग्राहकों की संबंधित नीतियों और डेटा प्रोसेसिंग समझौतों (DPA) द्वारा शासित होता है।',
  sections: [
    {
      heading: "1. दायरा और अद्यतन",
      paragraphs: [
        "यह गोपनीयता नीति हमारी वेबसाइटों, डेमो परिवेशों और डिजिटल सेवाओं के माध्यम से संसाधित व्यक्तिगत डेटा पर लागू होती है।",
        "हम समय-समय पर इस नीति में संशोधन कर सकते हैं। महत्वपूर्ण परिवर्तनों की सूचना पृष्ठ पर दी जाएगी और अद्यतन तिथि बदली जाएगी।",
      ],
    },
    {
      heading: "2. हमारे द्वारा एकत्र की जाने वाली जानकारी",
      paragraphs: [
        "हम आपके द्वारा स्वेच्छा से दी गई जानकारी (नाम, कॉर्पोरेट ईमेल, फोन नंबर, कंपनी का नाम), AI डेमो और वॉयस इंटरैक्शन डेटा, तथा स्वचालित रूप से एकत्र तकनीकी डेटा (IP पता, ब्राउज़र विवरण, ऑपरेटिंग सिस्टम और देखे गए पृष्ठ) एकत्र करते हैं।",
      ],
    },
    {
      heading: "3. व्यक्तिगत जानकारी का उपयोग",
      paragraphs: [
        "हम आपकी जानकारी का उपयोग सेवाओं के संचालन, sales@letssai.com पर प्राप्त पूछताछ का उत्तर देने, सिस्टम सुरक्षा बनाए रखने, त्रुटियों को ठीक करने और कानूनी दायित्वों का पालन करने के लिए करते हैं।",
      ],
      note: "AI मॉडल प्रशिक्षण प्रतिबंध: LetssAI बिना स्पष्ट सहमति के सार्वजनिक AI मॉडल को प्रशिक्षित करने के लिए ग्राहकों के गोपनीय व्यावसायिक डेटा का उपयोग कभी नहीं करता है।",
    },
    {
      heading: "4. अंतरराष्ट्रीय डेटा स्थानांतरण",
      paragraphs: [
        "भारतीय मूल की कंपनी होने के नाते, जो भारत, संयुक्त राज्य अमेरिका, यूनाइटेड किंगडम, आयरलैंड, नीदरलैंड, सिंगापुर, मलेशिया, ऑस्ट्रेलिया, यूएई, न्यूजीलैंड और कनाडा में ग्राहकों को सेवाएं प्रदान करती है, हम भारत के डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम (DPDP Act, 2023) और अंतरराष्ट्रीय मानक अनुबंध खंडों (SCC) के अनुसार डेटा सुरक्षा सुनिश्चित करते हैं।",
      ],
    },
    {
      heading: "5. आपके गोपनीयता अधिकार",
      paragraphs: [
        "लागू कानूनों के तहत आपको अपने डेटा तक पहुँचने, उसमें सुधार करने, उसे हटाने, उसके प्रसंस्करण को सीमित करने और सहमति वापस लेने का अधिकार है। इन अधिकारों के लिए sales@letssai.com पर संपर्क करें।",
      ],
    },
    {
      heading: "6. संपर्क जानकारी",
      paragraphs: [
        "गोपनीयता संबंधी किसी भी प्रश्न के लिए हमारी टीम से sales@letssai.com पर संपर्क किया जा सकता है।",
      ],
    },
  ],
  closing: {
    entity: "LetssAI ",
    subtext: "डेटा संरक्षण एवं गोपनीयता परिचालन",
    email: "sales@letssai.com",
    location: "मुख्यालय: भारत | वैश्विक रिमोट डिलीवरी",
    date: "अंतिम अद्यतन: 9 अक्टूबर 2026",
  },
}

const documents: Record<Locale, LegalDocument> = { en, de, es, fr, hi }

export function getPrivacyPolicyContent(locale: Locale): LegalDocument {
  return documents[locale] || documents.en
}
