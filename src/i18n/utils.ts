import { defaultLang, languages, type Lang, ui } from "./ui";

const isLang = (value: string): value is Lang => value in languages;

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  if (maybeLang && isLang(maybeLang)) {
    return maybeLang;
  }

  return defaultLang;
}

function getValue(lang: Lang, key: string) {
  const dictionary = ui[lang] as Record<string, unknown>;
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object") {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, dictionary);
}

export function t(lang: Lang, key: string): string {
  const value = getValue(lang, key);
  if (typeof value === "string") {
    return value;
  }

  const fallback = getValue(defaultLang, key);
  if (typeof fallback === "string") {
    return fallback;
  }

  return key;
}

export function useTranslations(lang: Lang) {
  return (key: string) => t(lang, key);
}

export function localizePath(lang: Lang, path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (lang === defaultLang) {
    return normalizedPath;
  }

  return normalizedPath === "/" ? `/${lang}/` : `/${lang}${normalizedPath}`;
}

export function localizeHomeContactFormPath(lang: Lang): string {
  return `${localizePath(lang, "/")}#contact-form`;
}

export function switchLocalePath(pathname: string, targetLang: Lang): string {
  const normalized = pathname === "" ? "/" : pathname;
  const segments = normalized.split("/").filter(Boolean);

  if (segments.length > 0 && isLang(segments[0])) {
    segments.shift();
  }

  const basePath = segments.length > 0 ? `/${segments.join("/")}` : "/";
  return localizePath(targetLang, basePath);
}
