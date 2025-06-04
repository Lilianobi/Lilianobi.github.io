import { useEffect, useState } from 'react';

/**
 * A custom hook that detects and returns the system's preferred color scheme.
 *
 * @returns {'light' | 'dark'} The current system color scheme.
 */
const useSystemColorScheme = () => {
  const [colorScheme, setColorScheme] = useState('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Set initial value
    setColorScheme(mediaQuery.matches ? 'dark' : 'light');

    const handleChange = (e) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return colorScheme;
};

export default useSystemColorScheme;
