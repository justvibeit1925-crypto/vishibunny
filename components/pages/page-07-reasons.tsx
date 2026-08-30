'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { AmbientDecor } from '@/components/decorations'
import { useBurst } from '@/components/burst-context'
import { PageShell } from '@/components/pages/page-shell'

const reasons = [
  { front: 'reason #1', back: 'STICKYYYY BROOO 😭', emoji: '⭐' },
  { front: 'reason #2', back: 'VISHIIIIIIIII 💜', emoji: '💜' },
  { front: 'reason #3', back: 'Bunny SISTERRR 🫂', emoji: '🫂' },
  { front: 'reason #4', back: "YOU'RE CUTE AF 🎀", emoji: '🎀' },
  { front: 'reason #5', back: 'MY CUTE LITTLE SISTAAAA 🥹', emoji: '🥹' },
  { front: 'reason #6', back: 'ONLY MY SISTA. NO REFUNDS. 😤💜', emoji: '🔒' },
]

export function PageReasons() {
  const fire = useBurst()
  const [open, setOpen] = useState<boolean[]>(() => reasons.map(() => false))

  const flip = (i: number) => {
    setOpen((prev) => {
      if (prev[i]) return prev
      const next = [...prev]
      next[i] = true
      return next
    })
    fire(['💜', '✨'])
  }

  const allOpen = open.every(Boolean)

  return (
    <PageShell center={false}>
      <AmbientDecor items={['💜', '⭐', '🎀', '✨']} />
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-hand text-4xl text-lav-700"
        >
          Reasons you&apos;re my fav 💜
        </motion.h1>
        <p className="mt-3 text-sm text-ink-soft">(tap each card, sista 👀)</p>

        <div className="mt-7 grid grid-cols-2 gap-3.5">
          {reasons.map((r, i) => (
            <motion.button
              key={i}
              onClick={() => flip(i)}
              whileTap={{ scale: 0.94 }}
              className="relative h-28 [perspective:1000px]"
              aria-label={open[i] ? r.back : `Reveal ${r.front}`}
            >
              <motion.div
                className="relative h-full w-full [transform-style:preserve-3d]"
                animate={{ rotateY: open[i] ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-lav-300 p-2 [backface-visibility:hidden]">
                  <span className="text-2xl">{r.emoji}</span>
                  <span className="font-hand mt-1 text-xl text-ink">{r.front}</span>
                </div>
                <div className="paper absolute inset-0 flex items-center justify-center rounded-2xl p-3 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <span className="font-hand text-lg leading-tight text-ink">{r.back}</span>
                </div>
              </motion.div>
            </motion.button>
          ))}
        </div>

        {allOpen && (
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-hand mt-6 text-2xl text-lav-700"
          >
            ...and a million more 💜✨
          </motion.p>
        )}
      </div>
    </PageShell>
  )
}
