import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import { getTheme, themeToVars } from '@/lib/themes';
import './globals.css';

// Outfit — clean geometric sans, excellent for display headings
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

// Inter — the benchmark for clean readable UI text
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: { template: '%s | Portfolio', default: 'Student Portfolio' },
  description: 'A verified record of academic achievement, projects, and personal growth.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const themeId = (process.env.NEXT_PUBLIC_THEME as 'codex' | 'constellation') ?? 'codex';
  const theme = getTheme(themeId);
  const cssVars = {
    ...themeToVars(theme),
    '--font-sans':    'var(--font-inter)',
    '--font-display': 'var(--font-outfit)',
  };

  return (
    <html
      lang="en"
      dir="ltr"
      className={`${outfit.variable} ${inter.variable}`}
      style={cssVars as React.CSSProperties}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={theme.colorBackground} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
