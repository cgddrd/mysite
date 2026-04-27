'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { useState } from 'react'

const links = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#writing', label: 'Writing' },
  { href: '/#connect', label: 'Contact' },
]

export default function NavLinks() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div
      className="site-nav__links"
      onMouseLeave={() => setHovered(null)}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="site-nav__link"
          onMouseEnter={() => setHovered(link.href)}
          onFocus={() => setHovered(link.href)}
          onBlur={() => setHovered(null)}
        >
          {link.label}
          {hovered === link.href && (
            <motion.span
              layoutId="nav-underline"
              className="site-nav__indicator"
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            />
          )}
        </Link>
      ))}
    </div>
  )
}
