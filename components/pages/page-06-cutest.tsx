'use client'

import { motion } from 'framer-motion'
import { AmbientDecor } from '@/components/decorations'
import { Polaroid } from '@/components/polaroid'
import { PageShell } from '@/components/pages/page-shell'
import { photos } from '@/lib/photos'

export function PageCutest() {
  return (
    <PageShell center={false}>
      <AmbientDecor items={['🌷', '💗', '🎀', '✨']} />
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-hand text-4xl text-lav-700"
        >
          The Cutest Sista Alive 🌷
        </motion.h1>
        <p className="mt-3 text-sm text-ink-soft">(objectively. this is a fact. no debate 💅)</p>

        <div className="mt-8 flex flex-wrap items-start justify-center gap-6">
          <Polaroid photo={photos.vishiSelfie} rotate={-5} sticker="💗" caption="pink queen 👑" />
          <Polaroid photo={photos.vishiCrown} rotate={4} sticker="🌟" caption="dreamy bean ✨" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="paper mx-auto mt-9 max-w-sm rounded-2xl px-6 py-5"
        >
          <p className="font-hand text-2xl leading-snug text-ink">
            look at my sista being the prettiest AND the funniest?? unfair fr 😭💜
          </p>
        </motion.div>
      </div>
    </PageShell>
  )
}
