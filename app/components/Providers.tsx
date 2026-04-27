'use client'

import { MotionConfig } from 'motion/react'
import type { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: [0.2, 0.65, 0.35, 1] }}>
      {children}
    </MotionConfig>
  )
}
