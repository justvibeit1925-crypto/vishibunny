'use client'

import { motion } from 'framer-motion'
import { AmbientDecor, StarField } from '@/components/decorations'
import { Polaroid } from '@/components/polaroid'
import { PageShell } from '@/components/pages/page-shell'
import { photos } from '@/lib/photos'

export function PageStart() {
  return (
    <PageShell dark center={false}>
      <StarField />
      <AmbientDecor items={['🌙', '✨', '⭐', '💜']} />
      <div className="relative text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-hand text-4xl text-lav-300 text-glow"
        >
          Where it all started...
        </motion.h1>

        <p className="mt-5 text-base text-lav-200">We met through Eclipse GC. 🌙</p>
        <p className="mt-4 text-sm text-lav-200/80">At first, you were just my...</p>

        <motion.p
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="font-hand my-3 text-5xl text-pink-accent text-glow"
        >
          STICKY BRO 😭
        </motion.p>

        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-lav-200/90">
          You were ALWAYS sending memes, stickers and random chaotic things into the GC.
        </p>
        <p className="mt-4 text-sm text-lav-200/80">And me being me...</p>
        <p className="font-hand mt-1 text-2xl text-lav-300">I started making WEIRD stickers.</p>
        <p className="mx-auto mt-4 max-w-sm text-sm text-lav-200/90">
          That was literally how our friendship started.
        </p>

        <div className="mt-8 flex flex-wrap items-start justify-center gap-6 pb-4">
          <Polaroid photo={photos.sistaContacts} rotate={-4} sticker="🦕" caption="sticky bro era ♡" />
          <Polaroid photo={photos.stickerWar} rotate={3} sticker="✨" caption="the chaos begins 😭" />
        </div>
      </div>
    </PageShell>
  )
}
