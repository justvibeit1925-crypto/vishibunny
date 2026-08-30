'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { BurstProvider } from '@/components/burst-context'
import { LightboxProvider } from '@/components/lightbox'
import { BottomNav, TopBar } from '@/components/page-nav'
import { PageEnvelope } from '@/components/pages/page-01-envelope'
import { PageForVishi } from '@/components/pages/page-02-forvishi'
import { PageStart } from '@/components/pages/page-03-start'
import { PageStickerWar } from '@/components/pages/page-04-stickerwar'
import { PageUs } from '@/components/pages/page-05-us'
import { PageCutest } from '@/components/pages/page-06-cutest'
import { PageReasons } from '@/components/pages/page-07-reasons'
import { PageLetter } from '@/components/pages/page-08-letter'
import { PagePromise } from '@/components/pages/page-09-promise'
import { PageFinale } from '@/components/pages/page-10-finale'

// Pages that use the dark night-sky background
const darkPages = new Set([3, 5, 8, 10])

export function Storybook() {
  const [page, setPage] = useState(1)
  const [dir, setDir] = useState(1)

  const goNext = useCallback(() => {
    setDir(1)
    setPage((p) => Math.min(p + 1, TOTAL))
  }, [])
  const goBack = useCallback(() => {
    setDir(-1)
    setPage((p) => Math.max(p - 1, 1))
  }, [])
  const restart = useCallback(() => {
    setDir(-1)
    setPage(1)
  }, [])

  const isDark = darkPages.has(page)

  const render = () => {
    switch (page) {
      case 1:
        return <PageEnvelope goNext={goNext} />
      case 2:
        return <PageForVishi />
      case 3:
        return <PageStart />
      case 4:
        return <PageStickerWar />
      case 5:
        return <PageUs />
      case 6:
        return <PageCutest />
      case 7:
        return <PageReasons />
      case 8:
        return <PageLetter />
      case 9:
        return <PagePromise />
      case 10:
        return <PageFinale onRestart={restart} />
      default:
        return null
    }
  }

  return (
    <LightboxProvider>
      <BurstProvider>
        <main
          className={`relative h-[100dvh] w-full overflow-hidden transition-colors duration-700 ${
            isDark ? 'night-sky' : 'bg-lav-100'
          }`}
        >
          <TopBar page={page} total={TOTAL} />

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="absolute inset-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={(_, info) => {
                if (info.offset.x < -90 && page < TOTAL) goNext()
                else if (info.offset.x > 90 && page > 1) goBack()
              }}
            >
              {render()}
            </motion.div>
          </AnimatePresence>

          <BottomNav page={page} total={TOTAL} onBack={goBack} onNext={goNext} dark={isDark} />
        </main>
      </BurstProvider>
    </LightboxProvider>
  )
}

const TOTAL = 10

const pageVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
}
