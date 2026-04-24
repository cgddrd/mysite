import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'

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
    <html lang="en">
      <body>
        <Navigation />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
