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

export default function useColors(colors, colorName, isLoading) {
  const isDark = useDarkMode();
  if (isLoading) return {};

  const colorTypes = ["Background", "Text"];
  const colorType = colorTypes.find((type) => colorName.includes(type));

  const color = colors.find((c) => c.name === colorName);

  // Determine which color to return based on colorType
  if (colorType === "Text") {
    return {
      color: isDark ? `${color.darkStartColor}` : `${color.startColor}`,
    };
  }

  if (colorType === "Background") {
    return {
      background: `linear-gradient(to right, ${
        isDark
          ? `${color.darkStartColor}, ${color.darkEndColor}`
          : `${color.startColor}, ${color.endColor}`
      })`,
    };
  }

  return {};
}
