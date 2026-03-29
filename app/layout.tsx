import type { Metadata } from 'next'
import { Roboto, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const roboto = Roboto({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto"
});

const robotoMono = Roboto_Mono({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-roboto-mono"
});

export const metadata: Metadata = {
  title: 'gЕко - Превърни старата си бутилка в супер сила!',
  description: 'Креативни работилници за деца. Ти носиш пластмасовите бутилки от вкъщи, ние носим артистичното вдъхновение.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bg">
      <body className={`${roboto.variable} ${robotoMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
