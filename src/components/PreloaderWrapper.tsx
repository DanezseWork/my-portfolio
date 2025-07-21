'use client';

import { useTheme } from 'next-themes';
import Preloader from './Preloader';
import { useEffect, useState } from 'react';

const PreloaderWrapper = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent SSR mismatch by rendering only after mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !resolvedTheme) return null;

  const themeStyles = {
    '--bg-color': resolvedTheme === 'light' ? '#ffffff' : '#000000',
    '--text-color': resolvedTheme === 'light' ? '#000000' : '#ffffff',
  } as React.CSSProperties;

  return (
    <div style={themeStyles}>
      <Preloader key={resolvedTheme} />
    </div>
  );
};

export default PreloaderWrapper;
