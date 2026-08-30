'use client'

import { motion } from 'framer-motion'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'solid' | 'soft' | 'ghost' | 'dark'

const variants: Record<Variant, string> = {
  solid:
    'bg-lav-600 text-white shadow-[0_8px_20px_-8px_rgba(155,134,201,0.9)] hover:bg-lav-700',
  soft: 'bg-lav-300 text-ink hover:bg-lav-400',
  ghost: 'bg-white/70 text-ink-soft hover:bg-white',
  dark: 'bg-lav-500/90 text-night-deep hover:bg-lav-400',
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: Variant
}

export function CuteButton({ children, variant = 'solid', className = '', ...rest }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      className={`inline-flex select-none items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${variants[variant]} ${className}`}
      {...(rest as any)}
    >
      {children}
    </motion.button>
  )
}
