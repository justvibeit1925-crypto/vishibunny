'use client'

import { motion } from 'framer-motion'
import { AmbientDecor, StarField } from '@/components/decorations'
import { Polaroid } from '@/components/polaroid'
import { PageShell } from '@/components/pages/page-shell'
import { photos } from '@/lib/photos'

export function PageUs() {
  return (
    <PageShell dark center={false}>
      <StarField />
      <AmbientDecor items={['💜', '🐰', '🐥', '✨']} />
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-hand text-4xl text-lav-300 text-glow"
        >
          From Bros → Sistas 💜
        </motion.h1>

        <div className="mt-4 flex items-center justify-center gap-3 font-hand text-3xl text-lav-200">
          <span>ME</span>
          <span className="text-pink-accent">+</span>
          <span>YOU</span>
          <span className="text-pink-accent">=</span>
          <motion.span
            initial={{ scale: 0.4 }}
            animate={{ scale: [0.4, 1.3, 1] }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-pink-accent text-glow"
          >
            US
          </motion.span>
        </div>

        <div className="mt-7 flex justify-center">
          <Polaroid
            photo={photos.meYouUs}
            rotate={2}
            sticker="🎀"
            caption="you literally made this for me 🥹"
            widthClass="w-64"
          />
        </div>

        <p className="mx-auto mt-7 max-w-sm text-sm leading-relaxed text-lav-200/90">
          Somewhere between all the stickers and the chaos, we stopped being weird bros...
        </p>
        <p className="font-hand mt-2 text-2xl text-lav-300">and became DA SISTASSSS ikkkk!! ✨</p>
      </div>
    </PageShell>
  )
}
