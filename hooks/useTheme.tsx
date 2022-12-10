import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [setTheme]);

  if (!mounted) {
    return {
      theme: null,
    };
  }

  return {
    theme,
    toggleTheme: setTheme,
  };
};
