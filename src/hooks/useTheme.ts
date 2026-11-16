import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function systemTheme(): Theme {
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

// index.html sets data-theme before React loads, so this matches what's on screen.
function readTheme(): Theme {
  const attr = document.documentElement.dataset.theme;
  return attr === "dark" || attr === "light" ? attr : systemTheme();
}

function hasSavedChoice(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  // Follow the OS setting until the visitor makes their own choice.
  useEffect(() => {
    const mq = window.matchMedia(DARK_QUERY);
    const onChange = () => {
      if (hasSavedChoice()) return;
      const next: Theme = mq.matches ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable: the choice just won't persist */
    }

    const apply = () => {
      root.dataset.theme = next;
      flushSync(() => setTheme(next));
    };

    const reduceMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;

    // Best case: the browser cross-fades the whole page for us.
    if (document.startViewTransition && !reduceMotion) {
      document.startViewTransition(apply);
      return;
    }

    // Fallback: briefly enable CSS transitions on colors, then switch.
    if (!reduceMotion) {
      root.classList.add("theme-transition");
      window.setTimeout(() => root.classList.remove("theme-transition"), 450);
    }
    apply();
  }, [theme]);

  return { theme, toggle };
}
