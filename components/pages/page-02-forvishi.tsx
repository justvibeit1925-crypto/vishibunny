'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { AmbientDecor } from '@/components/decorations'
import { CuteButton } from '@/components/cute-button'
import { PageShell } from '@/components/pages/page-shell'

const labels = [
  { text: 'Sticky Sis', rot: -4 },
  { text: 'Sista', rot: 3 },
  { text: 'Jikook partner', rot: -2 },
  { text: 'Cutest bean', rot: 4 },
  { text: 'Professional sticker menace 😭', rot: -3 },
]

export function PageForVishi() {
  const [revealed, setRevealed] = useState(false)

  return (
    <PageShell>
      <AmbientDecor />
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-hand text-4xl text-lav-700"
        >
          To my Vishii Bro...
        </motion.h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          {labels.map((l, i) => (
            <motion.span
              key={l.text}
              initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: l.rot }}
              transition={{ delay: 0.15 + i * 0.12, type: 'spring', stiffness: 240 }}
              className="font-hand rounded-full border-2 border-dashed border-lav-500 bg-white/80 px-4 py-1.5 text-lg text-ink shadow-sm"
            >
              {l.text}
            </motion.span>
          ))}
        </div>

        <p className="mt-8 text-base text-ink-soft">Before you continue...</p>

        <div className="mt-4 flex justify-center">
          {!revealed ? (
            <CuteButton onClick={() => setRevealed(true)}>WHAT? 👀</CuteButton>
          ) : null}
        </div>

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="paper mx-auto mt-4 max-w-sm rounded-2xl px-6 py-6"
            >
              <p className="font-hand text-2xl leading-snug text-ink">
                You became way more than just someone I met in Eclipse GC. 💜
              </p>
              <p className="mt-3 text-sm text-ink-soft">(keep going, sista 👇)</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageShell>
  )
}
