export const languages = {
  en: "English",
  de: "Deutsch",
} as const;

export type Lang = keyof typeof languages;

type TranslationValue = string | TranslationDict | TranslationValue[];
interface TranslationDict {
  [key: string]: TranslationValue;
}

export const defaultLang: Lang = "en";

export const ui: Record<Lang, TranslationDict> = {
  en: {
    meta: {
      defaultDescription: "Professional IT solutions without unnecessary complexity.",
    },
    brand: {
      name: "Basha IT Solutions",
      tagline: "Professional IT solutions without unnecessary complexity",
      location: "Braunschweig, Germany",
    },
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Get in Touch",
      mobileCta: "Contact",
      language: "Language",
    },
    footer: {
      servicesHeading: "Services",
      companyHeading: "Company",
      rights: "© 2026 Basha IT Solutions. All rights reserved.",
      network: "Network Solutions",
      web: "Website Development",
      app: "App Development",
      saas: "SaaS Development",
      impressum: "Impressum",
      privacy: "Privacy Policy",
    },
    pages: {
      home: {
        title: "Basha IT Solutions | Professional IT solutions without unnecessary complexity",
        description: "Networks, apps, websites, and SaaS solutions built to solve real business problems.",
      },
      services: {
        title: "Services | Basha IT Solutions",
        description: "Explore network, website, app, SaaS, and technical support services.",
      },
about: {
  kicker: "About",
  title: "Clear technology, practical execution, real results",
  p1: "Basha IT Solutions focuses on building modern digital solutions without unnecessary complexity. The goal is simple: create systems that are useful, professional, and aligned with real needs.",
  p2: "From network support to websites, apps, and SaaS development, the work is centered around trust, clarity, and practical outcomes that clients can actually use.",

  snapshot: {
    kicker: "Company profile",
    title: "Built for modern digital needs",
    item1: "Websites and platforms with clear business purpose",
    item2: "Apps and SaaS tools designed for real workflows",
    item3: "Technical systems support with practical focus",
    item4: "Structured implementation without unnecessary complexity",
  },

  principles: {
    kicker: "Principles",
    title: "How the work is approached",
    clarity: {
      title: "Clarity first",
      copy: "Solutions should be understandable, maintainable, and aligned with what the client actually needs."
    },
    execution: {
      title: "Practical execution",
      copy: "The focus is on useful delivery, clean structure, and systems that work in real conditions."
    },
    reliability: {
      title: "Reliable by design",
      copy: "Strong foundations, thoughtful structure, and controlled complexity create more trustworthy outcomes."
    }
  },

  focus: {
    kicker: "Focus areas",
    title: "What Basha IT Solutions works on",
    copy: "The work combines modern software, digital delivery, and technical problem solving.",
    web: {
      label: "Web",
      title: "Professional websites",
      copy: "Modern, structured websites built to communicate trust and support real business goals."
    },
    apps: {
      label: "Apps",
      title: "Application development",
      copy: "Custom applications designed around usability, clarity, and practical value."
    },
    saas: {
      label: "SaaS",
      title: "SaaS systems",
      copy: "Scalable digital products and internal tools built with maintainability and real workflows in mind."
    },
    systems: {
      label: "Systems",
      title: "Technical systems support",
      copy: "Support for networks, technical setup, and digital infrastructure where clarity and reliability matter."
    }
  },

  cta: {
    kicker: "Next step",
    title: "Looking for a clear and capable technology partner?",
    copy: "Whether the need is a website, application, SaaS platform, or technical system support, the goal is always the same: useful solutions, built well.",
    primary: "Start a Project",
    secondary: "Explore Services"
  }
},
      contact: {
        title: "Contact | Basha IT Solutions",
        description: "Get in touch to discuss networks, websites, apps, SaaS, or other IT solutions.",
      },
      impressum: {
        title: "Legal Notice | Basha IT Solutions",
      },
      datenschutz: {
        title: "Privacy Policy | Basha IT Solutions",
      },
    },
    home: {
      hero: {
        kicker: "Modern solutions for businesses and individuals",
        title: "Professional IT solutions without unnecessary complexity",
        copy: "I help clients with network solutions, websites, app development, and SaaS platforms — built to solve real problems with clear, practical execution.",
        ctaPrimary: "Start Your Project",
        ctaSecondary: "Explore Services",
      },
      featured: {
        label: "Featured Capabilities",
        title: "Built for trust, speed, and clarity",
        badge: "IT Solutions",
      },
      contactForm: {
        success: "Thanks — your message was sent successfully. I'll get back to you soon.",
        error: "Something went wrong. Please try again or email me directly at",
        name: "Name",
        email: "Email",
        service: "Service needed",
        servicePlaceholder: "Select a service",
        message: "Project details",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@example.com",
        messagePlaceholder: "Tell me a little about what you need...",
        helper: "A short message is enough to get started.",
        submit: "Send Inquiry",
        sending: "Sending…",
      },
    },
    services: {
      kicker: "Services",
      title: "Solutions designed to be useful, modern, and effective",
      copy: "Every service is focused on solving real client problems with as little unnecessary complexity as possible.",
    },
    about: {
      kicker: "About",
      title: "Clear technology, practical execution, real results",
      p1: "Basha IT Solutions focuses on building modern digital solutions without unnecessary complexity. The goal is simple: create systems that are useful, professional, and aligned with real needs.",
      p2: "From network support to websites, apps, and SaaS development, the work is centered around trust, clarity, and practical outcomes that clients can actually use.",
      snapshot: {
        kicker: "Company Snapshot",
        title: "A focused technology partner for modern operations",
        copy: "Basha IT Solutions supports organizations that need dependable digital systems, clear communication, and practical implementation from planning through delivery.",
        item1: "Based in Braunschweig, serving projects with local context and remote delivery",
        item2: "Work across websites, applications, SaaS products, and technical systems",
        item3: "Structured execution with realistic scope, timelines, and priorities",
        item4: "Long-term maintainability as a default requirement, not an afterthought",
      },
      principles: {
        kicker: "Core Principles",
        title: "How decisions are made",
        clarity: {
          title: "Clarity over complexity",
          copy: "Architecture and communication stay transparent so teams can make sound technical and business decisions.",
        },
        execution: {
          title: "Practical execution",
          copy: "Solutions are designed to perform in day-to-day operations, not only in presentations or prototypes.",
        },
        reliability: {
          title: "Reliability as standard",
          copy: "Stable foundations, controlled change, and disciplined delivery reduce risk and improve long-term value.",
        },
      },
      focus: {
        kicker: "Focus Areas",
        title: "Where Basha IT Solutions delivers value",
        copy: "The service portfolio combines software development and technical systems work to support real business workflows.",
        web: {
          label: "Websites",
          title: "Professional web presence",
          copy: "Websites and web platforms built for credibility, performance, and clear user journeys.",
        },
        apps: {
          label: "Apps",
          title: "Application development",
          copy: "Custom applications with clean interfaces, maintainable code, and direct operational relevance.",
        },
        saas: {
          label: "SaaS",
          title: "SaaS and platform products",
          copy: "Scalable products and internal platforms developed with robust structure and measurable business purpose.",
        },
        systems: {
          label: "Systems",
          title: "Technical systems and infrastructure",
          copy: "Support for networks and technical environments where uptime, security, and consistency are essential.",
        },
      },
      cta: {
        kicker: "Start a Conversation",
        title: "Planning a project with technical depth?",
        copy: "If you need a capable partner for a website, application, SaaS solution, or technical systems work, let’s define a clear scope and move forward with confidence.",
        primary: "Start a Project",
        secondary: "Contact Basha IT Solutions",
      },
    },
    contact: {
      kicker: "Contact",
      title: "Let's build something useful",
      copy: "Whether you need a professional website, app, SaaS product, or help with networks and technical systems, I'd be happy to hear about your project.",
      inquiryTitle: "Project Inquiry",
      emailLabel: "Email:",
      locationLabel: "Location:",
      focusLabel: "Focus:",
      focusValue: "Networks, apps, websites, SaaS, and technical solutions",
      cta: "Email Me Directly",
    },
    legal: {
      impressumHeading: "Legal Notice",
      privacyHeading: "Privacy Policy",
    },
  },
  de: {
    meta: {
      defaultDescription: "Professionelle IT-Lösungen ohne unnötige Komplexität.",
    },
    brand: {
      name: "Basha IT Solutions",
      tagline: "Professionelle IT-Lösungen ohne unnötige Komplexität",
      location: "Braunschweig, Deutschland",
    },
    nav: {
      home: "Start",
      services: "Leistungen",
      about: "Über uns",
      contact: "Kontakt",
      cta: "Kontakt aufnehmen",
      mobileCta: "Kontakt",
      language: "Sprache",
    },
    footer: {
      servicesHeading: "Leistungen",
      companyHeading: "Unternehmen",
      rights: "© 2026 Basha IT Solutions. Alle Rechte vorbehalten.",
      network: "Netzwerklösungen",
      web: "Webseiten-Entwicklung",
      app: "App-Entwicklung",
      saas: "SaaS-Entwicklung",
      impressum: "Impressum",
      privacy: "Datenschutz",
    },
    pages: {
      home: {
        title: "Basha IT Solutions | Professionelle IT-Lösungen ohne unnötige Komplexität",
        description: "Netzwerke, Apps, Webseiten und SaaS-Lösungen für echte Geschäftsanforderungen.",
      },
      services: {
        title: "Leistungen | Basha IT Solutions",
        description: "Entdecken Sie Leistungen rund um Netzwerk, Webseite, App, SaaS und technischen Support.",
      },
      about: {
        title: "Über uns | Basha IT Solutions",
        description: "Erfahren Sie mehr über Basha IT Solutions und den Fokus auf klare, praxisnahe Technologie.",
      },
      contact: {
        title: "Kontakt | Basha IT Solutions",
        description: "Kontaktieren Sie uns für Netzwerke, Webseiten, Apps, SaaS oder andere IT-Lösungen.",
      },
      impressum: {
        title: "Impressum | Basha IT Solutions",
      },
      datenschutz: {
        title: "Datenschutz | Basha IT Solutions",
      },
    },
    home: {
      hero: {
        kicker: "Moderne Lösungen für Unternehmen und Privatkunden",
        title: "Professionelle IT-Lösungen ohne unnötige Komplexität",
        copy: "Ich unterstütze Kundinnen und Kunden bei Netzwerklösungen, Webseiten, App-Entwicklung und SaaS-Plattformen – praxisnah, verständlich und auf reale Probleme ausgerichtet.",
        ctaPrimary: "Projekt starten",
        ctaSecondary: "Leistungen ansehen",
      },
      featured: {
        label: "Kernkompetenzen",
        title: "Entwickelt für Vertrauen, Tempo und Klarheit",
        badge: "IT-Lösungen",
      },
      contactForm: {
        success: "Danke — Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich zeitnah zurück.",
        error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie direkt an",
        name: "Name",
        email: "E-Mail",
        service: "Gewünschte Leistung",
        servicePlaceholder: "Leistung auswählen",
        message: "Projektbeschreibung",
        namePlaceholder: "Ihr Name",
        emailPlaceholder: "sie@beispiel.de",
        messagePlaceholder: "Beschreiben Sie kurz, was Sie benötigen...",
        helper: "Eine kurze Nachricht reicht für den Start.",
        submit: "Anfrage senden",
        sending: "Wird gesendet…",
      },
    },
    services: {
      kicker: "Leistungen",
      title: "Lösungen, die praktisch, modern und wirksam sind",
      copy: "Jede Leistung ist darauf ausgelegt, echte Probleme mit möglichst wenig unnötiger Komplexität zu lösen.",
    },
    about: {
      kicker: "Über uns",
      title: "Klare Technologie, praxisnahe Umsetzung, messbare Ergebnisse",
      p1: "Basha IT Solutions entwickelt moderne digitale Lösungen ohne unnötige Komplexität. Das Ziel ist klar: Systeme schaffen, die nützlich, professionell und an realen Anforderungen ausgerichtet sind.",
      p2: "Von Netzwerk-Support bis hin zu Webseiten, Apps und SaaS-Entwicklung stehen Vertrauen, Verständlichkeit und praktische Ergebnisse im Mittelpunkt.",
      snapshot: {
        kicker: "Unternehmensprofil",
        title: "Ein fokussierter Technologiepartner für moderne Abläufe",
        copy: "Basha IT Solutions unterstützt Organisationen, die verlässliche digitale Systeme, klare Kommunikation und praxisnahe Umsetzung von der Planung bis zur Lieferung benötigen.",
        item1: "Standort Braunschweig mit regionalem Verständnis und effizienter Remote-Umsetzung",
        item2: "Leistungsschwerpunkte in Webseiten, Anwendungen, SaaS-Produkten und technischen Systemen",
        item3: "Strukturierte Umsetzung mit realistischen Umfängen, Zeitplänen und Prioritäten",
        item4: "Langfristige Wartbarkeit als Grundanforderung statt nachträglicher Ergänzung",
      },
      principles: {
        kicker: "Leitprinzipien",
        title: "Wie Entscheidungen getroffen werden",
        clarity: {
          title: "Klarheit vor Komplexität",
          copy: "Architektur und Kommunikation bleiben nachvollziehbar, damit Teams fundierte technische und geschäftliche Entscheidungen treffen können.",
        },
        execution: {
          title: "Praxisnahe Umsetzung",
          copy: "Lösungen werden für den zuverlässigen Alltagseinsatz entwickelt, nicht nur für Präsentationen oder Prototypen.",
        },
        reliability: {
          title: "Zuverlässigkeit als Standard",
          copy: "Stabile Grundlagen, kontrollierte Änderungen und disziplinierte Lieferung reduzieren Risiken und stärken den langfristigen Nutzen.",
        },
      },
      focus: {
        kicker: "Fokusbereiche",
        title: "Wo Basha IT Solutions Mehrwert schafft",
        copy: "Das Leistungsportfolio verbindet Softwareentwicklung mit technischer Systemarbeit für reale Geschäftsprozesse.",
        web: {
          label: "Webseiten",
          title: "Professionelle Webpräsenz",
          copy: "Webseiten und Webplattformen mit hoher Glaubwürdigkeit, solider Performance und klaren Nutzerwegen.",
        },
        apps: {
          label: "Apps",
          title: "Anwendungsentwicklung",
          copy: "Individuelle Anwendungen mit klaren Oberflächen, wartbarem Code und direktem operativem Nutzen.",
        },
        saas: {
          label: "SaaS",
          title: "SaaS- und Plattformlösungen",
          copy: "Skalierbare Produkte und interne Plattformen mit robuster Struktur und messbarem Geschäftszweck.",
        },
        systems: {
          label: "Systeme",
          title: "Technische Systeme und Infrastruktur",
          copy: "Unterstützung für Netzwerke und technische Umgebungen, in denen Verfügbarkeit, Sicherheit und Konsistenz entscheidend sind.",
        },
      },
      cta: {
        kicker: "Nächster Schritt",
        title: "Sie planen ein Projekt mit technischer Tiefe?",
        copy: "Wenn Sie einen verlässlichen Partner für Webseite, Anwendung, SaaS-Lösung oder technische Systemarbeit suchen, definieren wir gemeinsam einen klaren Umfang und setzen zielgerichtet um.",
        primary: "Projekt starten",
        secondary: "Basha IT Solutions kontaktieren",
      },
    },
    contact: {
      kicker: "Kontakt",
      title: "Lassen Sie uns etwas Sinnvolles bauen",
      copy: "Ob professionelle Webseite, App, SaaS-Produkt oder Unterstützung bei Netzwerken und technischen Systemen – ich freue mich auf Ihr Projekt.",
      inquiryTitle: "Projektanfrage",
      emailLabel: "E-Mail:",
      locationLabel: "Standort:",
      focusLabel: "Fokus:",
      focusValue: "Netzwerke, Apps, Webseiten, SaaS und technische Lösungen",
      cta: "Direkt E-Mail senden",
    },
    legal: {
      impressumHeading: "Impressum",
      privacyHeading: "Datenschutzerklärung",
    },
  },
};
