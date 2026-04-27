'use client'

import { motion, useInView } from 'motion/react'
import { useRef, type ReactNode } from 'react'

export default function InView({
  children,
  delay = 0,
  y = 16,
  className,
  as = 'div',
  amount = 0.25,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'section' | 'header' | 'li'
  amount?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, amount })
  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.65, 0.35, 1] }}
    >
      {children}
    </MotionTag>
  )
}
