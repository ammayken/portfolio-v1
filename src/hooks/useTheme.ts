import { useCallback, useState } from "react";
import { flushSync } from "react-dom";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

// index.html sets data-theme before React loads, so this matches what's on screen.
function readTheme(): Theme {
  const attr = document.documentElement.dataset.theme;
  return attr === "dark" ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

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
