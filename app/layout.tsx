import type { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Jeremy Davidson',
  description:
    'Principal Software Engineer & Engineering Lead at Rocketboots. Edge computing, computer vision, and platform engineering from Oxfordshire, UK.',
  authors: [{ name: 'Jeremy Davidson' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <body>
        <Navigation />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
