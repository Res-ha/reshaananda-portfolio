import { useCallback, useEffect, useState } from "react";

export const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

const themeColors = { light: "#f3f4f2", dark: "#0b1118" } as const;

function syncThemeColor(theme: "light" | "dark") {
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColors[theme]);
}

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(initialTheme);
    syncThemeColor(initialTheme);
    setMounted(true);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      syncThemeColor(next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return { theme, toggle, mounted };
}
