'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { AmbientDecor } from '@/components/decorations'
import { CuteButton } from '@/components/cute-button'
import { Polaroid } from '@/components/polaroid'
import { useBurst } from '@/components/burst-context'
import { PageShell } from '@/components/pages/page-shell'
import { photos } from '@/lib/photos'

export function PageStickerWar() {
  const fire = useBurst()
  const [count, setCount] = useState(0)

  const attack = () => {
    fire(['😭', '💀', '✨', '🎀', '💜', '🕺', '🍵', '👁️'])
    setCount((c) => c + 1)
  }

  return (
    <PageShell>
      <AmbientDecor items={['😭', '💜', '✨', '🎀']} />
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-hand text-4xl text-lav-700"
        >
          The Legendary Sticker War ⚔️
        </motion.h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
          {'"No you\'re wrong" ... "I think this is right?" 👁️'} — nobody was ever right, but
          it was ALWAYS funny.
        </p>

        <div className="mt-6 flex justify-center">
          <Polaroid photo={photos.stickerWar} rotate={-3} sticker="💥" caption="exhibit A 😭" widthClass="w-64" />
        </div>

        <div className="mt-8">
          <CuteButton onClick={attack}>🔥 SEND STICKER ATTACK 🔥</CuteButton>
          {count > 0 && (
            <motion.p
              key={count}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-hand mt-3 text-xl text-lav-700"
            >
              {count === 1
                ? 'HA! take that sista 😭'
                : count < 4
                  ? `${count} attacks sent!! you can\'t win 💜`
                  : 'okay okay we get it you\'re unstoppable 💀✨'}
            </motion.p>
          )}
        </div>
      </div>
    </PageShell>
  )
}
