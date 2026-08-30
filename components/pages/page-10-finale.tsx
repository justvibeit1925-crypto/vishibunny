'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { AmbientDecor, StarField } from '@/components/decorations'
import { CuteButton } from '@/components/cute-button'
import { useBurst } from '@/components/burst-context'
import { PageShell } from '@/components/pages/page-shell'

export function PageFinale({ onRestart }: { onRestart: () => void }) {
  const fire = useBurst()

  useEffect(() => {
    const t = setTimeout(() => fire(['💜', '✨', '🎉', '🌷', '💗', '⭐', '🎀']), 400)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageShell dark>
      <StarField count={60} />
      <AmbientDecor items={['💜', '🎉', '✨', '🌷', '⭐']} />
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-base text-lav-200"
        >
          so, from your weird sticker bro turned sista...
        </motion.p>

        <motion.h1
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.15 }}
          className="font-hand mt-4 text-5xl leading-tight text-lav-200 text-glow"
        >
          HAPPY 1 YEAR TO US, VISHI💗
          <br />
          ✦ ECLIPSE GC ✦
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-lav-200/90"
        >
          One whole year together, let's build more years togather. I love you soooo much veey muchhh MWAHHH 💜🌷🫂
        </motion.p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <CuteButton variant="dark" onClick={() => fire(['💜', '🎉', '✨', '🌷', '💗'])}>
            🎉 MORE CONFETTI 🎉
          </CuteButton>
          <button
            onClick={onRestart}
            className="font-hand text-lg text-lav-300 underline decoration-dotted underline-offset-4"
          >
            read it again from the start ♡
          </button>
        </div>

        <p className="font-hand mt-9 text-xl text-lav-300/80">
          — made with 💜 by your only sista
        </p>
      </div>
    </PageShell>
  )
}
