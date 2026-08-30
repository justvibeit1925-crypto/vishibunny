'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { AmbientDecor, StarField } from '@/components/decorations'
import { Polaroid } from '@/components/polaroid'
import { PageShell } from '@/components/pages/page-shell'
import { photos } from '@/lib/photos'

const message = `Happiest birthday to my favieee and only sistaaaaaaa 💜🌷

Even though we don't talk a lot, I always find you cool like you are super duper cool!!!!! I love you sooooo much.

We started as weird bro and sticker bro... now we are DA SISTASSSS. We da awesome sistaassss ikkkk!!!

ALWAYS be my sistaaa. Only mine, don't find another sistaaaa.

I will annoy youuuu muehehe ✨😝✌️`

function useTypewriter(text: string, start: boolean, speed = 22) {
  const [out, setOut] = useState('')
  const iRef = useRef(0)
  useEffect(() => {
    if (!start) return
    iRef.current = 0
    setOut('')
    const id = setInterval(() => {
      iRef.current += 1
      setOut(text.slice(0, iRef.current))
      if (iRef.current >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, start, speed])
  return out
}

export function PageLetter() {
  const [start, setStart] = useState(false)
  const typed = useTypewriter(message, start)

  useEffect(() => {
    const t = setTimeout(() => setStart(true), 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <PageShell dark center={false}>
      <StarField count={55} />
      <AmbientDecor items={['💜', '✨', '🌷', '🌙']} />
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-hand text-4xl text-lav-300 text-glow"
        >
          A letter for you 💌
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="paper mx-auto mt-6 max-w-sm rounded-2xl px-6 py-6 text-left"
        >
          <p className="font-hand whitespace-pre-line text-xl leading-snug text-ink">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-ink align-middle" />
          </p>
        </motion.div>

        <div className="mt-7 flex justify-center pb-2">
          <Polaroid
            photo={photos.birthday}
            rotate={-3}
            sticker="💜"
            caption="the original bday msg ♡"
            widthClass="w-48"
          />
        </div>
      </div>
    </PageShell>
  )
}
