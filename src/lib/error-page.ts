type ErrorPageLanguage = "en" | "id";

const copy = {
  en: {
    lang: "en",
    title: "This page didn't load",
    description: "Something went wrong on our end. You can try refreshing or head back home.",
    retry: "Try again",
    home: "Go home",
  },
  id: {
    lang: "id",
    title: "Halaman ini gagal dimuat",
    description: "Terjadi kendala dari sisi kami. Coba muat ulang atau kembali ke beranda.",
    retry: "Coba lagi",
    home: "Ke beranda",
  },
} satisfies Record<ErrorPageLanguage, Record<string, string>>;

export function renderErrorPage(language: ErrorPageLanguage = "en"): string {
  const text = copy[language];

  return `<!doctype html>
<html lang="${text.lang}">
  <head>
    <meta charset="utf-8" />
    <title>${text.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #18181b; display: grid; place-items: center; min-height: 100dvh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #52525b; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { min-height: 44px; padding: 0.5rem 1rem; border-radius: 999px; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      a:focus-visible, button:focus-visible { outline: 2px solid #2dd4bf; outline-offset: 2px; }
      .primary { background: #0f766e; color: #fff; }
      .secondary { background: transparent; color: #18181b; border-color: #d4d4d8; }
      @media (prefers-color-scheme: dark) {
        body { background: #18181b; color: #f4f4f5; }
        p { color: #a1a1aa; }
        .primary { background: #2dd4bf; color: #18181b; }
        .secondary { color: #f4f4f5; border-color: #52525b; }
      }
    </style>
  </head>
  <body>
    <main class="card" aria-labelledby="error-title">
      <h1 id="error-title">${text.title}</h1>
      <p>${text.description}</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">${text.retry}</button>
        <a class="secondary" href="/">${text.home}</a>
      </div>
    </main>
  </body>
</html>`;
}
