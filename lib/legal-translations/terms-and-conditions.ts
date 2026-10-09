import type { Locale } from "@/i18n/routing"
import type { LegalDocument } from "./privacy-policy"

const en: LegalDocument = {
  metaTitle: "Terms and Conditions | LetssAI",
  metaDescription:
    "Review the Terms and Conditions governing your access and use of LetssAI websites, AI workflow demos, voice agents, and enterprise automation services.",
  title: "Terms and conditions",
  lastUpdated: "Last updated October 9, 2026",
  intro: [
    'Please read these Terms and Conditions (the "Terms") carefully because they govern your access to and use of the website, interactive demonstrations, and software services offered by LetssAI  ("LetssAI," "we," "us," or "our"), an Indian-origin enterprise AI solutions provider delivering autonomous voice agents, conversational workflows, and systems integrations globally.',
  ],
  sections: [
    {
      heading: "1. Agreement to Terms",
      paragraphs: [
        'By accessing our website (including letssai.com), exploring interactive agent simulations, or utilizing our digital workflows (collectively, the "Services"), you agree to be bound by these Terms. If you do not agree to be bound by these Terms, do not use the Services.',
        'If you access and use the Services on behalf of a company, corporate entity, or organization, you represent and warrant that you possess full legal authority to bind that entity to these Terms. In that case, "you" and "your" refer to that entity.',
      ],
    },
    {
      heading: "2. Description of AI Services",
      paragraphs: [
        "LetssAI develops practical, high-impact artificial intelligence systems engineered to integrate directly into existing enterprise workflows and communication tools. Our platform capabilities include autonomous voice AI agents, customer support assistants, lead qualification pipelines, CRM integrations, and automated workflow triggers.",
        "Because AI technologies and underlying language models evolve continuously, LetssAI reserves the right to enhance, upgrade, or modify elements of the Services at any time to guarantee stability, security, and superior performance.",
      ],
    },
    {
      heading: "3. Enterprise Master Services Agreements",
      paragraphs: [
        'These online Terms govern public visitors, prospective clients, and users of our digital platforms. If you or your organization enter into a signed Master Services Agreement ("MSA"), Statement of Work ("SOW"), or commercial Order Form with LetssAI for custom agent development or production deployment, the terms of that executed Enterprise MSA or SOW shall control and supersede these online Terms with respect to the specific commercial deployment.',
      ],
    },
    {
      heading: "4. Privacy Policy",
      paragraphs: [
        "Please review our Privacy Policy, which also governs your use of the Services, for information on how we collect, use, and share your personal information across international jurisdictions.",
      ],
    },
    {
      heading: "5. Acceptable Use and Prohibitions",
      paragraphs: [
        "You agree to use our Services only for lawful business purposes. You agree not to do any of the following:",
      ],
      list: [
        {
          label: "Reverse Engineering",
          text: "Attempt to decipher, decompile, disassemble, or reverse engineer any software, system prompts, or algorithms used to deliver the Services.",
        },
        {
          label: "Automated Scraping",
          text: "Use spiders, crawlers, robots, or automated data mining tools to extract content or conversation flows without our express written consent.",
        },
        {
          label: "Circumvent Security",
          text: "Probe, scan, or test the vulnerability of any LetssAI system, or circumvent authentication and rate-limiting safeguards.",
        },
        {
          label: "Adversarial Prompting",
          text: "Attempt jailbreaking or prompt injection designed to elicit unlawful, harmful, or defamatory outputs from our AI agents.",
        },
        {
          label: "Unlawful Communications",
          text: "Use the Services to distribute unsolicited communications, spam, deceptive robocalls, or violate telecommunications laws.",
        },
        {
          label: "System Interference",
          text: "Introduce viruses, worms, trojans, or malicious payloads that disrupt, degrade, or overburden our systems.",
        },
      ],
    },
    {
      heading: "6. Intellectual Property and Customer Data",
      paragraphs: [
        "LetssAI Platform Ownership: LetssAI and its licensors exclusively own all right, title, and interest in and to the Services, including all associated software, conversation architectures, trademarks, and intellectual property rights.",
        'Customer Data Ownership: Customers retain complete, exclusive ownership of all proprietary data, business documents, customer records, and inputs provided to LetssAI ("Customer Data"). LetssAI does not claim ownership of your Customer Data.',
        "Zero Model Training on Customer Data: LetssAI strictly does not use confidential enterprise Customer Data or proprietary inputs to train publicly available foundation models without express written authorization.",
        "Feedback: If you choose to submit feedback or suggestions, you agree that LetssAI is free to use and incorporate such feedback without restriction or financial compensation.",
      ],
    },
    {
      heading: "7. Third-Party Integrations and Telephony",
      paragraphs: [
        "Our Services may interface with third-party software (such as CRMs, messaging platforms, and telephony carriers). LetssAI provides access solely as a convenience and is not responsible for the availability, uptime, or terms of third-party services.",
      ],
    },
    {
      heading: "8. Warranties and Disclaimers",
      paragraphs: [
        'TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.',
        "Probabilistic Nature of AI: You acknowledge that artificial intelligence models generate outputs probabilistically. While LetssAI implements deterministic guardrails and verification checks, you remain responsible for validating AI outputs prior to relying on them for mission-critical business decisions.",
      ],
    },
    {
      heading: "9. Limitation of Liability",
      paragraphs: [
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER LETSSAI NOR ITS SUPPLIERS WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOST REVENUES, LOSS OF DATA, OR BUSINESS INTERRUPTION.",
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL LETSSAI'S TOTAL LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS EXCEED THE AMOUNTS ACTUALLY PAID BY YOU TO LETSSAI IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED UNITED STATES DOLLARS ($100), WHICHEVER IS LESS, IF YOU HAVE HAD NO PAYMENT OBLIGATIONS.",
      ],
    },
    {
      heading: "10. Indemnification",
      paragraphs: [
        "You agree to defend, indemnify, and hold harmless LetssAI, its affiliates, directors, officers, and employees from any third-party claims, liabilities, damages, and legal expenses arising from your violation of these Terms or unlawful use of the Services.",
      ],
    },
    {
      heading: "11. Term and Termination",
      paragraphs: [
        "We may suspend or terminate your access to the Services at our sole discretion, without prior notice, if you breach these Terms. All provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, liability limitations, and indemnity.",
      ],
    },
    {
      heading: "12. Governing Law and Jurisdiction",
      paragraphs: [
        "LetssAI is an enterprise company of Indian origin providing services globally across India, the United States, Ireland, the United Kingdom, the Netherlands, Singapore, Malaysia, Australia, the United Arab Emirates, New Zealand, Canada, Denmark, and Finland.",
        "These Terms will be governed by and construed in accordance with the laws of India, without giving effect to conflict of laws principles. The competent courts in Bengaluru (Bangalore), Karnataka, India shall have exclusive jurisdiction over any disputes arising under these Terms, without prejudice to international commercial arbitration provisions in executed Master Services Agreements.",
      ],
    },
    {
      heading: "13. General Provisions",
      paragraphs: [
        "These Terms, together with our Privacy Policy, constitute the entire agreement between you and LetssAI regarding the Services. If any provision is held unenforceable, the remaining provisions will remain in full effect. No waiver of any breach shall constitute a waiver of any subsequent breach.",
      ],
    },
    {
      heading: "14. Contact Information",
      paragraphs: [
        "If you have any questions about these Terms, please contact LetssAI at sales@letssai.com.",
      ],
    },
  ],
  closing: {
    entity: "LetssAI ",
    subtext: "Enterprise AI Workflows & Systems Operations",
    email: "sales@letssai.com",
    location: "Headquartered in India | Global Remote Delivery",
    date: "Last updated October 9, 2026",
  },
}

const de: LegalDocument = {
  metaTitle: "Allgemeine Geschäftsbedingungen | LetssAI",
  metaDescription:
    "Nutzungsbedingungen für den Zugriff auf LetssAI-Websites, KI-Workflow-Demos, Sprachagenten und Unternehmensautomatisierungsdienste.",
  title: "Allgemeine Geschäftsbedingungen",
  lastUpdated: "Zuletzt aktualisiert am 9. Oktober 2026",
  intro: [
    "Bitte lesen Sie diese Allgemeinen Geschäftsbedingungen („Bedingungen“) sorgfältig durch, da sie Ihre Nutzung der Websites, interaktiven Demonstrationen und Softwaredienste von LetssAI  („LetssAI“, „wir“, „uns“ oder „unser“), einem aus Indien stammenden Anbieter von Unternehmens-KI-Lösungen für autonome Sprachassistenten und Workflow-Automatisierungen weltweit, regeln.",
  ],
  sections: [
    {
      heading: "1. Zustimmung zu den Bedingungen",
      paragraphs: [
        "Durch den Zugriff auf unsere Website (letssai.com), das Testen interaktiver KI-Demonstrationen oder die Nutzung unserer Dienste erklären Sie sich mit diesen Bedingungen einverstanden.",
        "Wenn Sie im Namen eines Unternehmens handeln, sichern Sie zu, dass Sie bevollmächtigt sind, dieses Unternehmen rechtsverbindlich zu verpflichten.",
      ],
    },
    {
      heading: "2. Beschreibung der KI-Dienste",
      paragraphs: [
        "LetssAI entwickelt praxisnahe KI-Systeme für Unternehmensabläufe, darunter autonome Telefon-Sprachassistenten, Kundensupport-Assistenten und CRM-Automatisierungen. Da sich KI-Technologien kontinuierlich weiterentwickeln, behalten wir uns das Recht vor, Funktionen zur Gewährleistung von Stabilität und Sicherheit jederzeit anzupassen.",
      ],
    },
    {
      heading: "3. Vorrang von Enterprise-Verträgen",
      paragraphs: [
        "Bei Kunden mit individuell geschlossenen Master Services Agreements (MSA) oder Leistungsbeschreibungen (SOW) haben die Vereinbarungen des jeweiligen Enterprise-Vertrags Vorrang vor diesen Online-Bedingungen.",
      ],
    },
    {
      heading: "4. Zulässige Nutzung und Verbote",
      paragraphs: [
        "Sie verpflichten sich, die Dienste ausschließlich für rechtmäßige Zwecke zu nutzen. Untersagt sind insbesondere: Reverse Engineering von Software und Prompts, automatisiertes Scraping, Umgehung von Sicherheitsmechanismen, adversariales Prompting („Jailbreaking“) sowie der Versand unzulässiger Werbenachrichten oder automatisierter Anrufe.",
      ],
    },
    {
      heading: "5. Geistiges Eigentum und Kundendaten",
      paragraphs: [
        "Alle Rechte an der Plattform, den Algorithmen und Marken von LetssAI verbleiben ausschließlich bei LetssAI. Kunden behalten das uneingeschränkte Eigentum an ihren eigenen Unternehmens- und Kundendaten. LetssAI nutzt vertrauliche Kundendaten nicht zum Training öffentlicher KI-Basismodelle.",
      ],
    },
    {
      heading: "6. Gewährleistungsausschluss und Haftungsbeschränkung",
      paragraphs: [
        "Die Dienste werden im gesetzlich zulässigen Rahmen „wie besehen“ („as is“) bereitgestellt. Aufgrund der probabilistischen Natur generativer KI-Modelle übernimmt LetssAI keine Garantie für die absolute Fehlerfreiheit von KI-Antworten; Kunden prüfen KI-Ergebnisse vor geschäftskritischen Entscheidungen eigenverantwortlich.",
        "Die Haftung für indirekte Schäden, entgangenen Gewinn oder Betriebsunterbrechungen ist ausgeschlossen. Die Gesamthaftung ist auf den im vorangegangenen 12-Monats-Zeitraum gezahlten Betrag bzw. maximal 100 USD beschränkt.",
      ],
    },
    {
      heading: "7. Anwendbares Recht und Gerichtsstand",
      paragraphs: [
        "Diese Bedingungen unterliegen dem Recht von Indien. Ausschließlicher Gerichtsstand für alle Streitigkeiten ist Bengaluru (Bangalore), Karnataka, Indien, unbeschadet etwaiger schiedsgerichtlicher Vereinbarungen in individuellen Verträgen.",
      ],
    },
    {
      heading: "8. Kontakt",
      paragraphs: [
        "Bei Fragen zu diesen Bedingungen kontaktieren Sie uns bitte unter sales@letssai.com.",
      ],
    },
  ],
  closing: {
    entity: "LetssAI ",
    subtext: "Rechtsabteilung & Enterprise-Verträge",
    email: "sales@letssai.com",
    location: "Hauptsitz in Indien | Globale Bereitstellung",
    date: "Zuletzt aktualisiert am 9. Oktober 2026",
  },
}

const es: LegalDocument = {
  metaTitle: "Términos y Condiciones | LetssAI",
  metaDescription:
    "Términos que rigen su acceso a los sitios web de LetssAI, demostraciones de flujos de trabajo de IA, agentes de voz y servicios de automatización empresarial.",
  title: "Términos y condiciones",
  lastUpdated: "Última actualización: 9 de octubre de 2026",
  intro: [
    "Lea atentamente estos Términos y Condiciones («Términos»), ya que rigen el acceso y uso de los sitios web, demostraciones interactivas y servicios de software de LetssAI  («LetssAI», «nosotros» o «nuestro»), una empresa de origen indio proveedora de soluciones de IA empresarial a nivel mundial.",
  ],
  sections: [
    {
      heading: "1. Aceptación de los Términos",
      paragraphs: [
        "Al acceder a nuestro sitio web (letssai.com) o utilizar nuestras demostraciones y flujos de trabajo, usted acepta quedar vinculado legalmente por estos Términos.",
        "Si utiliza los Servicios en nombre de una empresa o entidad legal, usted declara y garantiza que posee plena autoridad para vincular a dicha entidad a estos Términos.",
      ],
    },
    {
      heading: "2. Descripción de los Servicios de IA",
      paragraphs: [
        "LetssAI desarrolla sistemas de inteligencia artificial prácticos diseñados para integrarse con flujos de trabajo empresariales existentes (agentes de voz para llamadas, asistentes de atención al cliente y automatizaciones de CRM). Nos reservamos el derecho de actualizar y mejorar las funciones periódicamente para mantener la estabilidad del sistema.",
      ],
    },
    {
      heading: "3. Uso Aceptable y Prohibiciones",
      paragraphs: [
        "Usted se compromete a no realizar ingeniería inversa, extracción automatizada de datos (scraping), ataques de inyección de instrucciones («jailbreaking»), elusión de medidas de seguridad ni envío de comunicaciones ilegales o llamadas automáticas no autorizadas.",
      ],
    },
    {
      heading: "4. Propiedad Intelectual y Datos del Cliente",
      paragraphs: [
        "LetssAI es el propietario exclusivo de su plataforma, código y marcas. Los clientes conservan la propiedad total y exclusiva de sus datos («Datos del Cliente»). LetssAI no utiliza datos confidenciales de clientes para entrenar modelos públicos de inteligencia artificial.",
      ],
    },
    {
      heading: "5. Limitación de Responsabilidad",
      paragraphs: [
        "En la máxima medida permitida por la ley, los Servicios se proporcionan «tal cual». No seremos responsables de daños indirectos, pérdida de beneficios o interrupción de negocios. La responsabilidad total acumulada de LetssAI no superará el importe abonado por usted en los doce meses anteriores o 100 USD.",
      ],
    },
    {
      heading: "6. Ley Aplicable y Jurisdicción",
      paragraphs: [
        "Estos Términos se rigen por las leyes de la India. Los tribunales competentes en Bengaluru (Bangalore), Karnataka, India, tendrán jurisdicción exclusiva sobre cualquier controversia derivada de estos Términos.",
      ],
    },
    {
      heading: "7. Contacto",
      paragraphs: [
        "Para cualquier pregunta sobre estos Términos, comuníquese con sales@letssai.com.",
      ],
    },
  ],
  closing: {
    entity: "LetssAI ",
    subtext: "Operaciones Legales y Contratos Empresariales",
    email: "sales@letssai.com",
    location: "Sede en India | Entrega Remota Global",
    date: "Última actualización: 9 de octubre de 2026",
  },
}

const fr: LegalDocument = {
  metaTitle: "Conditions Générales | LetssAI",
  metaDescription:
    "Conditions régissant l'accès aux sites web de LetssAI, aux démonstrations d'agents IA vocaux et aux services d'automatisation d'entreprise.",
  title: "Conditions générales",
  lastUpdated: "Dernière mise à jour le 9 octobre 2026",
  intro: [
    "Veuillez lire attentivement les présentes Conditions Générales (« Conditions »), qui régissent votre accès et votre utilisation des sites web, démonstrations interactives et services logiciels de LetssAI  (« LetssAI », « nous » ou « notre »), entreprise d'origine indienne fournissant des solutions d'IA d'entreprise à l'échelle internationale.",
  ],
  sections: [
    {
      heading: "1. Acceptation des Conditions",
      paragraphs: [
        "En accédant à notre site web (letssai.com) ou en utilisant nos services et démonstrations interactives, vous acceptez d'être lié par les présentes Conditions.",
        "Si vous agissez au nom d'une personne morale ou d'une entreprise, vous garantissez disposer du pouvoir légal d'engager cette entité.",
      ],
    },
    {
      heading: "2. Description des Services d'IA",
      paragraphs: [
        "LetssAI conçoit des assistants d'intelligence artificielle professionnels (agents vocaux téléphoniques, automatisation du support client, intégration CRM). Compte tenu de l'évolution rapide de l'IA, LetssAI se réserve le droit de faire évoluer ses services pour en préserver la sécurité et la qualité.",
      ],
    },
    {
      heading: "3. Utilisation Acceptable et Interdictions",
      paragraphs: [
        "Vous vous engagez à ne pas procéder à de la rétro-ingénierie, à l'extraction automatisée de données (scraping), au contournement des sécurités, à des attaques par injection de prompts (« jailbreaking ») ni à l'émission de communications frauduleuses ou non sollicitées.",
      ],
    },
    {
      heading: "4. Propriété Intellectuelle et Données Client",
      paragraphs: [
        "LetssAI demeure le propriétaire exclusif de sa plateforme, de ses algorithmes et de sa marque. Les clients conservent l'entière propriété de leurs données opérationnelles (« Données Client »). LetssAI n'utilise jamais les données confidentielles de ses clients pour entraîner des modèles publics d'IA sans consentement formel.",
      ],
    },
    {
      heading: "5. Limitation de Responsabilité",
      paragraphs: [
        "Les Services sont fournis « en l'état ». En aucun cas LetssAI ne sera tenue responsable des dommages indirects, pertes de profits ou interruptions d'activité. La responsabilité globale de LetssAI est plafonnée aux sommes effectivement versées au cours des 12 derniers mois ou à 100 USD.",
      ],
    },
    {
      heading: "6. Droit Applicable et Juridiction",
      paragraphs: [
        "Les présentes Conditions sont régies par le droit indien. Tout litige relèvera de la compétence exclusive des tribunaux de Bengaluru (Bangalore), Karnataka, Inde, sous réserve des clauses d'arbitrage commercial international prévues dans les contrats-cadres signés.",
      ],
    },
    {
      heading: "7. Contact",
      paragraphs: [
        "Pour toute question relative aux présentes Conditions, veuillez nous contacter à sales@letssai.com.",
      ],
    },
  ],
  closing: {
    entity: "LetssAI ",
    subtext: "Direction Juridique & Contrats d'Entreprise",
    email: "sales@letssai.com",
    location: "Siège en Inde | Prestations à l'échelle mondiale",
    date: "Dernière mise à jour le 9 octobre 2026",
  },
}

const hi: LegalDocument = {
  metaTitle: "नियम और शर्तें | LetssAI",
  metaDescription:
    "LetssAI वेबसाइट, AI वर्कफ़्लो डेमो, वॉयस एजेंट और एंटरप्राइज ऑटोमेशन सेवाओं तक आपकी पहुँच और उपयोग को नियंत्रित करने वाले नियम और शर्तें।",
  title: "नियम और शर्तें",
  lastUpdated: "अंतिम अद्यतन: 9 अक्टूबर 2026",
  intro: [
    'कृपया इन नियमों और शर्तों ("शर्तें") को ध्यान से पढ़ें, क्योंकि ये भारतीय मूल की एंटरप्राइज AI समाधान प्रदाता कंपनी LetssAI  ("LetssAI," "हम," या "हमारा"), जो विश्व स्तर पर स्वायत्त वॉयस एजेंट और वर्कफ़्लो ऑटोमेशन प्रदान करती है, की वेबसाइटों और सॉफ़्टवेयर सेवाओं तक आपकी पहुँच और उपयोग को नियंत्रित करती हैं।',
  ],
  sections: [
    {
      heading: "1. शर्तों की स्वीकृति",
      paragraphs: [
        "हमारी वेबसाइट (letssai.com) का उपयोग करके या हमारी AI सिमुलेशन सेवाओं से जुड़कर, आप इन शर्तों से कानूनी रूप से बाध्य होने की सहमति देते हैं।",
        "यदि आप किसी कंपनी या संगठन की ओर से सेवाओं का उपयोग कर रहे हैं, तो आप यह प्रमाणित करते हैं कि आपके पास उस संगठन को इन शर्तों से बाध्य करने का पूर्ण कानूनी अधिकार है।",
      ],
    },
    {
      heading: "2. AI सेवाओं का विवरण",
      paragraphs: [
        "LetssAI व्यावहारिक AI समाधान विकसित करता है, जिसमें स्वायत्त वॉयस AI एजेंट, ग्राहक सहायता ऑटोमेशन और CRM एकीकरण शामिल हैं। AI तकनीक के निरंतर विकास को देखते हुए, हम सिस्टम की स्थिरता और सुरक्षा सुनिश्चित करने के लिए सेवाओं को अपडेट करने का अधिकार सुरक्षित रखते हैं।",
      ],
    },
    {
      heading: "3. स्वीकार्य उपयोग और प्रतिबंध",
      paragraphs: [
        "आप सेवाओं का उपयोग केवल वैध व्यावसायिक उद्देश्यों के लिए करने पर सहमत हैं। रिवर्स इंजीनियरिंग, स्वचालित डेटा स्क्रैपिंग, सुरक्षा तंत्र को दरकिनार करना, दुर्भावनापूर्ण प्रॉम्प्ट इंजेक्शन और अवांछित स्पैम संचार भेजना सख्त वर्जित है।",
      ],
    },
    {
      heading: "4. बौद्धिक संपदा और ग्राहक डेटा",
      paragraphs: [
        'LetssAI अपने प्लेटफ़ॉर्म, कोड और ट्रेडमार्क का अनन्य स्वामी है। ग्राहक अपने स्वयं के डेटा ("ग्राहक डेटा") का पूर्ण और अनन्य स्वामित्व बनाए रखते हैं। LetssAI सार्वजनिक AI मॉडल को प्रशिक्षित करने के लिए ग्राहकों के गोपनीय डेटा का उपयोग नहीं करता है।',
      ],
    },
    {
      heading: "5. देयता की सीमा",
      paragraphs: [
        'कानून द्वारा अनुमत अधिकतम सीमा तक, सेवाएं "जैसी हैं" ("as is") के आधार पर प्रदान की जाती हैं। LetssAI किसी भी अप्रत्यक्ष क्षति, लाभ की हानि, या व्यावसायिक रुकावट के लिए उत्तरदायी नहीं होगा। हमारी कुल देयता पिछले 12 महीनों में भुगतान की गई राशि या 100 अमेरिकी डॉलर तक सीमित है।',
      ],
    },
    {
      heading: "6. शासी कानून और क्षेत्राधिकार",
      paragraphs: [
        "ये शर्तें भारत के कानूनों द्वारा शासित होंगी। किसी भी विवाद के समाधान के लिए बेंगलुरु (बैंगलोर), कर्नाटक, भारत की सक्षम अदालतों के पास अनन्य क्षेत्राधिकार होगा।",
      ],
    },
    {
      heading: "7. संपर्क विवरण",
      paragraphs: [
        "इन नियमों के संबंध में किसी भी प्रश्न के लिए कृपया sales@letssai.com पर संपर्क करें।",
      ],
    },
  ],
  closing: {
    entity: "LetssAI ",
    subtext: "कानूनी एवं एंटरप्राइज अनुबंध विभाग",
    email: "sales@letssai.com",
    location: "मुख्यालय: भारत | वैश्विक रिमोट डिलीवरी",
    date: "अंतिम अद्यतन: 9 अक्टूबर 2026",
  },
}

const documents: Record<Locale, LegalDocument> = { en, de, es, fr, hi }

export function getTermsAndConditionsContent(locale: Locale): LegalDocument {
  return documents[locale] || documents.en
}
