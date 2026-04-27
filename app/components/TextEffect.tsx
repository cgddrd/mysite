'use client'

import { motion } from 'motion/react'

export default function TextEffect({
  text,
  delay = 0,
  className,
}: {
  text: string
  delay?: number
  className?: string
}) {
  return (
    <span aria-label={text} className={className}>
      {Array.from(text).map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          aria-hidden
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: delay + i * 0.035,
            ease: [0.2, 0.65, 0.35, 1],
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  )
}
