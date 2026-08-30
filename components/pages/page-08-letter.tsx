```tsx
'use client'

import { motion } from 'framer-motion'
import { AmbientDecor, StarField } from '@/components/decorations'
import { PageShell } from '@/components/pages/page-shell'

const message = `💌 Dear Vishii bro...

Sometimes I still can't believe that someone I met through a random GC ended up becoming someone who feels like a real sister to me.

When we first met, you were just my Sticky Bro — the girl who was always sending memes, stickers and random chaotic things in Eclipse GC.

And because I am me, I started making weird stickers too. 😭

I never thought that silly little sticker chaos would become the beginning of such a special friendship.

Somewhere between the memes, stickers, random conversations, BTS/Taekook chaos and all the little moments in between, you became my Sista.

And then Milli and Divya literally adopted you as their second daughter. 😭

At this point, you're not escaping this family.

You genuinely feel like my real sister.

You're seriously the cutest, happiest little bean, and I love your energy so much.

Even though we're in different cities, I never want distance to make this friendship feel any smaller.

You're my Vishii bro.
My Sticky Sis.
We Jikook DUO.
My sister.

And I'm so grateful Eclipse GC brought you into my life.

Thank you for every meme.
Every sticker.
Every random conversation.
Every "SISTAAAAA."
Every stupid little memory.

I love you sooooo much.

Please stay my sister forever. 💜🫂`

export function PageLetter() {
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
            {message}
          </p>
        </motion.div>
      </div>
    </PageShell>
  )
}
```
