import { useEffect, useState } from "react";

function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateDarkMode = (e) => setIsDark(e.matches);

    setIsDark(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateDarkMode);

    return () => mediaQuery.removeEventListener("change", updateDarkMode);
  }, []);

  return isDark;
}

export default function useColors(colors, colorName) {
  const isDark = useDarkMode();
  if (!Array.isArray(colors)) return {};
  const color = colors.find((c) => c.name === colorName);

  if (!color) return {};

  return {
    background: `linear-gradient(to right, ${
      isDark
        ? `${color.darkStartColor}, ${color.darkEndColor}`
        : `${color.startColor}, ${color.endColor}`
    })`,
  };
}
