import { ThemeProvider } from '@/context/theme';
import type { Metadata } from 'next';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteFrame } from '@/components/SiteFrame';
import { buildLogoIqFaviconDataUrl } from '@/components/svg/favicon';

import './globals.css';

export const metadata: Metadata = {
  title: 'InboundIQ',
  description: 'Qualified leads. Pay per reply.',
  icons: {
    icon: [{ url: buildLogoIqFaviconDataUrl(), type: 'image/svg+xml' }],
    shortcut: [buildLogoIqFaviconDataUrl()],
  },
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

            <SiteFrame>
              {children}
              <SiteFooter />
            </SiteFrame>

        </ThemeProvider>
      </body>
    </html>
  );
}
