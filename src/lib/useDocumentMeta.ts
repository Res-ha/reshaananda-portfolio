import { useEffect } from "react";

type DocumentMeta = {
  title: string;
  description?: string;
  canonical?: string;
  type?: string;
  robots?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

function appendMeta(attribute: "name" | "property", key: string, content: string) {
  const existing = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (existing) {
    existing.content = content;
    return;
  }

  const element = document.createElement("meta");
  element.setAttribute(attribute, key);
  element.content = content;
  element.dataset["portfolioMeta"] = "true";
  document.head.appendChild(element);
}

export function useDocumentMeta(meta: DocumentMeta) {
  const serializedMeta = JSON.stringify(meta);

  useEffect(() => {
    const current = JSON.parse(serializedMeta) as DocumentMeta;

    document
      .querySelectorAll('[data-portfolio-meta="true"]')
      .forEach((element) => element.remove());
    document.title = current.title;

    if (current.description) {
      appendMeta("name", "description", current.description);
      appendMeta("property", "og:description", current.description);
    }

    appendMeta("property", "og:title", current.title);
    appendMeta("property", "og:type", current.type ?? "website");
    appendMeta("name", "twitter:card", "summary_large_image");

    if (current.canonical) {
      appendMeta("property", "og:url", current.canonical);
      const canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = current.canonical;
      canonical.dataset["portfolioMeta"] = "true";
      document.head.appendChild(canonical);
    }

    if (current.robots) {
      appendMeta("name", "robots", current.robots);
    }

    if (current.structuredData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(current.structuredData);
      script.dataset["portfolioMeta"] = "true";
      document.head.appendChild(script);
    }
  }, [serializedMeta]);
}
