import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function currentTheme(): Theme {
  const attr = document.documentElement.dataset.theme;
  return attr === "light" ? "light" : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  useEffect(() => {
    let stored: string | null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      return;
    }
    if (stored) return;

    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (event: MediaQueryListEvent) => {
      document.documentElement.dataset.theme = event.matches ? "light" : "dark";
      setTheme(event.matches ? "light" : "dark");
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignore
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
