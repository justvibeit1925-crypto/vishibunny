'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

/* ---------- Starry night background ---------- */
export function StarField({ count = 40 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
        dur: Math.random() * 2 + 2,
      })),
    [count],
  )
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

/* ---------- Ambient floating emoji (soft, slow) ---------- */
export function AmbientDecor({
  items = ['💜', '✨', '🌷', '🎀', '🦋', '🌙', '⭐', '☁️'],
}: {
  items?: string[]
}) {
  const bits = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        emoji: items[i % items.length],
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 14 + 16,
        delay: Math.random() * 4,
        dur: Math.random() * 4 + 5,
        op: Math.random() * 0.25 + 0.15,
      })),
    [items],
  )
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {bits.map((b) => (
        <span
          key={b.id}
          className="absolute"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            fontSize: b.size,
            opacity: b.op,
            animation: `floaty ${b.dur}s ease-in-out ${b.delay}s infinite`,
          }}
        >
          {b.emoji}
        </span>
      ))}
    </div>
  )
}

/* ---------- Emoji burst (sticker attack / hearts flying) ---------- */
type Particle = {
  id: string
  emoji: string
  x: number
  rot: number
  size: number
  drift: number
}

export function EmojiBurst({
  trigger,
  emojis = ['💜', '✨', '🌷', '🎀', '😭', '🫂', '⭐'],
  count = 26,
}: {
  trigger: number
  emojis?: string[]
  count?: number
}) {
  const [batches, setBatches] = useState<{ key: number; parts: Particle[] }[]>([])

  useEffect(() => {
    if (trigger === 0) return
    const parts: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: `${trigger}-${i}`,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 100,
      rot: Math.random() * 720 - 360,
      size: Math.random() * 20 + 22,
      drift: Math.random() * 120 - 60,
    }))
    setBatches((b) => [...b, { key: trigger, parts }])
    const t = setTimeout(() => {
      setBatches((b) => b.filter((batch) => batch.key !== trigger))
    }, 2600)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger])

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden">
      <AnimatePresence>
        {batches.map((batch) =>
          batch.parts.map((p) => (
            <motion.span
              key={p.id}
              className="absolute bottom-0"
              style={{ left: `${p.x}%`, fontSize: p.size }}
              initial={{ y: 40, opacity: 0, rotate: 0 }}
              animate={{ y: -700, x: p.drift, opacity: [0, 1, 1, 0], rotate: p.rot }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.4, ease: 'easeOut' }}
            >
              {p.emoji}
            </motion.span>
          )),
        )}
      </AnimatePresence>
    </div>
  )
}
