"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Garante que só renderiza depois que o componente montar no client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // ou um skeleton / placeholder
  }

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
}
