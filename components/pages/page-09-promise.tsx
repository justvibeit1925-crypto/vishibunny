'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { AmbientDecor } from '@/components/decorations'
import { CuteButton } from '@/components/cute-button'
import { useBurst } from '@/components/burst-context'
import { PageShell } from '@/components/pages/page-shell'

export function PagePromise() {
  const fire = useBurst()
  const [sealed, setSealed] = useState(false)

  const seal = () => {
    setSealed(true)
    fire(['💜', '🫂', '✨', '🤞', '💗', '🌷'])
  }

  return (
    <PageShell>
      <AmbientDecor items={['🤞', '💜', '✨', '🫂']} />
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-hand text-4xl text-lav-700"
        >
          A little promise 🤞
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-hand mx-auto mt-6 max-w-sm text-2xl leading-snug text-ink"
        >
          &ldquo;Always be my sistaaa. Only mine. Don&apos;t find another sistaaaa.&rdquo;
        </motion.p>

        <div className="mt-9 flex flex-col items-center">
          {!sealed ? (
            <CuteButton onClick={seal}>🤞 PINKY PROMISE 🤞</CuteButton>
          ) : (
            <AnimatePresence>
              <motion.div
                key="sealed"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                className="paper rounded-2xl px-7 py-6"
              >
                <div className="text-5xl">🫂💜</div>
                <p className="font-hand mt-3 text-2xl text-ink">promise sealed forever ✨</p>
                <p className="mt-1 text-sm text-ink-soft">no take-backs. it&apos;s official now 😌</p>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </PageShell>
  )
}
