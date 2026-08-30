'use client'

import { motion } from 'framer-motion'
import { useLightbox } from '@/components/lightbox'
import type { Photo } from '@/lib/photos'

type PolaroidProps = {
  photo: Photo
  caption?: string
  rotate?: number
  tape?: boolean
  sticker?: string
  className?: string
  widthClass?: string
}

export function Polaroid({
  photo,
  caption,
  rotate = 0,
  tape = true,
  sticker,
  className = '',
  widthClass = 'w-52 sm:w-56',
}: PolaroidProps) {
  const open = useLightbox()
  const label = caption ?? photo.caption

  return (
    <motion.button
      type="button"
      onClick={() => open(photo)}
      initial={{ opacity: 0, y: 24, rotate: rotate * 1.6 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.04, rotate: rotate + 1, zIndex: 20 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      aria-label={`Open photo: ${label}`}
      className={`relative inline-block cursor-pointer rounded-[6px] bg-[#fffdf8] p-2.5 pb-0 shadow-[0_12px_28px_-14px_rgba(90,70,130,0.6)] ${widthClass} ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      {tape && (
        <span
          aria-hidden
          className="washi absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rounded-[2px] opacity-90"
          style={{ transform: `translateX(-50%) rotate(${rotate > 0 ? -6 : 6}deg)` }}
        />
      )}
      {sticker && (
        <span aria-hidden className="absolute -right-2 -top-2 text-2xl drop-shadow">
          {sticker}
        </span>
      )}
      <div className="overflow-hidden rounded-[3px] bg-lav-200">
        <img
          src={photo.src || '/placeholder.svg'}
          alt={photo.alt}
          className="block h-auto w-full select-none"
          draggable={false}
        />
      </div>
      <p className="font-hand py-2 text-center text-lg leading-tight text-ink">{label}</p>
    </motion.button>
  )
}
