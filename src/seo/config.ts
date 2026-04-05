import { defaultLang, type Lang } from "../i18n/ui";
import { localizePath } from "../i18n/utils";

export const siteConfig = {
  siteName: "Basha IT Solutions",
  defaultSocialImage: "/favicon.svg",
  contactEmail: "basha.IT.Solution@gmail.com",
  locality: "Braunschweig",
  countryCode: "DE",
};

export const pagePathMap = {
  home: "/",
  services: "/services",
  about: "/about",
  contact: "/contact",
  impressum: "/impressum",
  datenschutz: "/datenschutz",
} as const;

export type SeoPageKey = keyof typeof pagePathMap;

interface PageSeoEntry {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const pageSeo: Record<Lang, Record<SeoPageKey, PageSeoEntry>> = {
  en: {
    home: {
      title: "Basha IT Solutions | Modern IT Services for Growing Businesses",
      description:
        "Basha IT Solutions delivers practical network, web, app, and SaaS development services for businesses that value reliability and clarity.",
      ogTitle: "Basha IT Solutions | Modern IT Services for Growing Businesses",
      ogDescription:
        "Reliable IT services across networks, websites, apps, and SaaS platforms, delivered with a practical business-first approach.",
      twitterTitle: "Basha IT Solutions | Modern IT Services",
      twitterDescription:
        "Professional IT solutions for networks, websites, apps, and SaaS platforms.",
    },
    services: {
      title: "IT Services | Network, Web, App & SaaS Development",
      description:
        "Explore professional IT services including network support, website development, app engineering, SaaS products, and technical consulting.",
      ogTitle: "Professional IT Services by Basha IT Solutions",
      ogDescription:
        "From network optimization to SaaS development, discover practical IT services designed to support business growth.",
      twitterTitle: "Professional IT Services | Basha IT Solutions",
      twitterDescription:
        "Network support, websites, apps, SaaS development, and technical consulting.",
    },
    about: {
      title: "About Basha IT Solutions | Clear Strategy, Practical Delivery",
      description:
        "Learn how Basha IT Solutions helps businesses with practical technology strategy, transparent communication, and modern software delivery.",
      ogTitle: "About Basha IT Solutions",
      ogDescription:
        "Get to know Basha IT Solutions and our practical approach to reliable, business-focused IT delivery.",
      twitterTitle: "About | Basha IT Solutions",
      twitterDescription:
        "A practical IT partner for networks, websites, apps, and SaaS systems.",
    },
    contact: {
      title: "Contact Basha IT Solutions | Start Your IT Project",
      description:
        "Contact Basha IT Solutions to discuss your website, app, SaaS, or network project and get a practical next-step recommendation.",
      ogTitle: "Contact Basha IT Solutions",
      ogDescription:
        "Tell us about your IT project and get expert support for networks, web, app, and SaaS development.",
      twitterTitle: "Contact | Basha IT Solutions",
      twitterDescription:
        "Reach out to discuss your project and next technical steps.",
    },
    impressum: {
      title: "Legal Notice (Impressum) | Basha IT Solutions",
      description:
        "Official legal notice and provider information for Basha IT Solutions in accordance with applicable regulations.",
      ogTitle: "Legal Notice | Basha IT Solutions",
      ogDescription: "Legal provider information for Basha IT Solutions.",
      twitterTitle: "Legal Notice | Basha IT Solutions",
      twitterDescription: "Official legal information for Basha IT Solutions.",
    },
    datenschutz: {
      title: "Privacy Policy | Basha IT Solutions",
      description:
        "Review how Basha IT Solutions processes, protects, and stores personal data for website visitors and business inquiries.",
      ogTitle: "Privacy Policy | Basha IT Solutions",
      ogDescription: "Information about data processing and privacy practices at Basha IT Solutions.",
      twitterTitle: "Privacy Policy | Basha IT Solutions",
      twitterDescription: "Learn how your data is handled and protected.",
    },
  },
  de: {
    home: {
      title: "Basha IT Solutions | Moderne IT-Services für wachsende Unternehmen",
      description:
        "Basha IT Solutions bietet praxisnahe IT-Leistungen für Netzwerke, Webseiten, Apps und SaaS-Plattformen – zuverlässig und verständlich umgesetzt.",
      ogTitle: "Basha IT Solutions | Moderne IT-Services für Unternehmen",
      ogDescription:
        "Zuverlässige IT-Unterstützung für Netzwerke, Webseiten, Apps und SaaS-Lösungen mit klarem Fokus auf den Geschäftsnutzen.",
      twitterTitle: "Basha IT Solutions | Moderne IT-Services",
      twitterDescription:
        "Professionelle IT-Lösungen für Netzwerke, Webseiten, Apps und SaaS-Plattformen.",
    },
    services: {
      title: "IT-Leistungen | Netzwerk, Web, App & SaaS Entwicklung",
      description:
        "Entdecken Sie professionelle IT-Leistungen von Netzwerksupport über Web- und App-Entwicklung bis zu SaaS-Produkten und technischer Beratung.",
      ogTitle: "Professionelle IT-Leistungen von Basha IT Solutions",
      ogDescription:
        "Von Netzwerkoptimierung bis SaaS-Entwicklung: praxisnahe IT-Leistungen für moderne Unternehmen.",
      twitterTitle: "IT-Leistungen | Basha IT Solutions",
      twitterDescription:
        "Netzwerksupport, Webseiten, Apps, SaaS-Entwicklung und technische Beratung.",
    },
    about: {
      title: "Über Basha IT Solutions | Klare Strategie, praxisnahe Umsetzung",
      description:
        "Erfahren Sie, wie Basha IT Solutions Unternehmen mit transparenter Kommunikation, technischer Klarheit und moderner Umsetzung unterstützt.",
      ogTitle: "Über Basha IT Solutions",
      ogDescription:
        "Lernen Sie den praxisnahen Ansatz von Basha IT Solutions für zuverlässige und unternehmensorientierte IT kennen.",
      twitterTitle: "Über uns | Basha IT Solutions",
      twitterDescription:
        "Ihr IT-Partner für Netzwerke, Webseiten, Apps und SaaS-Systeme.",
    },
    contact: {
      title: "Kontakt | Basha IT Solutions IT-Projekte starten",
      description:
        "Kontaktieren Sie Basha IT Solutions, um Ihr Webseiten-, App-, SaaS- oder Netzwerkprojekt zu besprechen und klare nächste Schritte zu erhalten.",
      ogTitle: "Kontakt zu Basha IT Solutions",
      ogDescription:
        "Sprechen Sie mit uns über Ihr IT-Projekt und erhalten Sie Unterstützung für Netzwerk, Web, App und SaaS.",
      twitterTitle: "Kontakt | Basha IT Solutions",
      twitterDescription:
        "Jetzt Projektanfrage stellen und technische nächste Schritte klären.",
    },
    impressum: {
      title: "Impressum | Basha IT Solutions",
      description:
        "Rechtliche Anbieterkennzeichnung und Pflichtangaben von Basha IT Solutions gemäß geltenden gesetzlichen Vorgaben.",
      ogTitle: "Impressum | Basha IT Solutions",
      ogDescription: "Rechtliche Pflichtangaben von Basha IT Solutions.",
      twitterTitle: "Impressum | Basha IT Solutions",
      twitterDescription: "Rechtliche Informationen zu Basha IT Solutions.",
    },
    datenschutz: {
      title: "Datenschutzerklärung | Basha IT Solutions",
      description:
        "Erfahren Sie, wie Basha IT Solutions personenbezogene Daten von Website-Besuchern und Projektanfragen verarbeitet und schützt.",
      ogTitle: "Datenschutzerklärung | Basha IT Solutions",
      ogDescription: "Informationen zur Datenverarbeitung und zum Datenschutz bei Basha IT Solutions.",
      twitterTitle: "Datenschutz | Basha IT Solutions",
      twitterDescription: "So werden Ihre Daten verarbeitet und geschützt.",
    },
  },
};

export function toAbsoluteUrl(path: string, base: URL): string {
  return new URL(path, base).toString();
}

export function getCanonicalPath(page: SeoPageKey, lang: Lang): string {
  return localizePath(lang, pagePathMap[page]);
}

export function getAlternateUrls(page: SeoPageKey, base: URL) {
  return [
    { hreflang: "en", href: toAbsoluteUrl(getCanonicalPath(page, "en"), base) },
    { hreflang: "de", href: toAbsoluteUrl(getCanonicalPath(page, "de"), base) },
    { hreflang: "x-default", href: toAbsoluteUrl(getCanonicalPath(page, defaultLang), base) },
  ];
}

export function getCommonStructuredData(base: URL) {
  const rootUrl = new URL("/", base).toString();

  return {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.siteName,
      url: rootUrl,
      email: siteConfig.contactEmail,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.locality,
        addressCountry: siteConfig.countryCode,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.contactEmail,
        contactType: "customer support",
        availableLanguage: ["English", "German"],
      },
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.siteName,
      url: rootUrl,
      inLanguage: ["en", "de"],
    },
  };
}

export function getWebPageStructuredData({
  page,
  lang,
  canonical,
}: {
  page: SeoPageKey;
  lang: Lang;
  canonical: string;
}) {
  const meta = pageSeo[lang][page];

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: meta.title,
    description: meta.description,
    url: canonical,
    inLanguage: lang,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.siteName,
    },
  };
}
