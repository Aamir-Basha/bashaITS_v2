import type { APIRoute } from "astro";

const site = import.meta.env.SITE ?? "https://www.bashaitsolutions.com";

export const GET: APIRoute = () => {
  const sitemapUrl = new URL("/sitemap-index.xml", site).toString();

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
