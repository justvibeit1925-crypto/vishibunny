'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import type { Photo } from '@/lib/photos'

type LightboxContextValue = (photo: Photo) => void

const LightboxContext = createContext<LightboxContextValue | null>(null)

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider')
  return ctx
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<Photo | null>(null)

  const open = useCallback((photo: Photo) => setActive(photo), [])
  const close = useCallback(() => setActive(null), [])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close])

  return (
    <LightboxContext.Provider value={open}>
      {children}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-5"
            style={{ background: 'rgba(40, 33, 64, 0.82)', backdropFilter: 'blur(6px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
          >
            <button
              onClick={close}
              aria-label="Close photo"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-lav-300 text-ink shadow-lg active:scale-90"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.figure
              className="flex max-h-[85vh] max-w-[92vw] flex-col items-center"
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.src || '/placeholder.svg'}
                alt={active.alt}
                className="max-h-[74vh] max-w-full rounded-2xl object-contain shadow-2xl"
              />
              <figcaption className="font-hand mt-3 text-center text-xl text-lav-200">
                {active.caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  )
}
