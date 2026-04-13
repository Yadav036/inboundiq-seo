'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ThemePropsInterface {
  children?: React.ReactNode;
  [key: string]: unknown;
}

export const ThemeProvider: React.FC<ThemePropsInterface> = ({
  children,
  ...props
}) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
