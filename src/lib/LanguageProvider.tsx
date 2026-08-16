import { useCallback, useEffect, useState, type ReactNode } from "react";
import { LanguageContext, messages, type Lang, type MessageKey } from "./i18n";

const STORAGE_KEY = "lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    let stored: Lang = "en";
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      if (value === "id" || value === "en") stored = value;
    } catch {
      /* ignore */
    }
    setLangState(stored);
    document.documentElement.lang = stored;
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback((key: MessageKey) => messages[lang][key], [lang]);
  const pick = useCallback(<T,>(value: { en: T; id: T }): T => value[lang], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}
