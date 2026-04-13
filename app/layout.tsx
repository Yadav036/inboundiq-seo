import { ThemeProvider } from '@/context/theme';
import type { Metadata } from 'next';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteFrame } from '@/components/SiteFrame';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'InboundIQ',
  description: 'Qualified leads. Pay per reply.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <SiteFrame>
              {children}
              <SiteFooter />
            </SiteFrame>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
