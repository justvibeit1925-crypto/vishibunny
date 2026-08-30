'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { AmbientDecor } from '@/components/decorations'
import { CuteButton } from '@/components/cute-button'
import { useBurst } from '@/components/burst-context'
import { PageShell } from '@/components/pages/page-shell'

export function PageEnvelope({ goNext }: { goNext: () => void }) {
  const [open, setOpen] = useState(false)
  const fire = useBurst()

  const handleOpen = () => {
    setOpen(true)
    fire(['💜', '✨', '💗', '🌷', '⭐'])
    setTimeout(goNext, 1200)
  }

  return (
    <PageShell>
      <AmbientDecor />
      <div className="flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-hand text-2xl text-lav-700"
        >
          💌 You have a little something...
        </motion.p>

        <motion.div
          className="relative my-8 h-52 w-72 max-w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 160, damping: 16, delay: 0.15 }}
          style={{ animation: 'floaty 5s ease-in-out infinite' }}
        >
          {/* envelope body */}
          <div className="absolute inset-0 rounded-2xl bg-lav-400 shadow-[0_18px_40px_-16px_rgba(90,70,130,0.7)]" />
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {/* letter peeking out when opening */}
            <motion.div
              className="paper absolute inset-x-4 bottom-3 top-16 rounded-lg"
              animate={open ? { y: -70, rotate: -1 } : { y: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            >
              <div className="flex h-full flex-col items-center justify-center px-3">
                <p className="font-hand text-xl text-ink">For my Vishii bro ♡</p>
              </div>
            </motion.div>
            {/* bottom pocket */}
            <div
              className="absolute inset-x-0 bottom-0 top-1/3 bg-lav-500"
              style={{ clipPath: 'polygon(0 35%, 50% 0, 100% 35%, 100% 100%, 0 100%)' }}
            />
            {/* flap */}
            <motion.div
              className="absolute inset-x-0 top-0 h-2/3 origin-top bg-lav-500"
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)', backfaceVisibility: 'hidden' }}
              animate={open ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.5 }}
            />
            {/* heart seal */}
            <AnimatePresence>
              {!open && (
                <motion.div
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-3xl"
                >
                  💜
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span aria-hidden className="absolute -left-3 -top-3 text-2xl">
            ✨
          </span>
          <span aria-hidden className="absolute -bottom-3 -right-2 text-2xl">
            🎀
          </span>
        </motion.div>

        <p className="font-hand text-lg text-ink-soft">For my Vishii bro ♡</p>
        <p className="mt-1 text-sm text-ink-soft/80">Made by your Weird Sticker Bro</p>

        <div className="mt-7">
          <CuteButton onClick={handleOpen} disabled={open}>
            {open ? 'opening... 💜' : 'OPEN IT 💜'}
          </CuteButton>
        </div>
      </div>
    </PageShell>
  )
}
