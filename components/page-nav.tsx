'use client'

import { ChevronLeft, ChevronRight, Moon } from 'lucide-react'
import { CuteButton } from '@/components/cute-button'

export function TopBar({ page, total }: { page: number; total: number }) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 text-sm font-bold text-ink-soft shadow-sm backdrop-blur">
        <Moon className="h-4 w-4 text-lav-600" />
        <span>Eclipse GC</span>
      </div>
      <div className="pointer-events-auto rounded-full bg-white/70 px-3 py-1.5 font-hand text-lg text-lav-700 shadow-sm backdrop-blur">
        ♡ {page} / {total} ♡
      </div>
    </header>
  )
}

export function BottomNav({
  page,
  total,
  onBack,
  onNext,
  dark = false,
}: {
  page: number
  total: number
  onBack: () => void
  onNext: () => void
  dark?: boolean
}) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-3 px-4 pb-5 pt-2 sm:px-6">
      <CuteButton
        variant={dark ? 'dark' : 'soft'}
        onClick={onBack}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
        Back
      </CuteButton>

      <div className="flex gap-1.5">
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`h-2 rounded-full transition-all ${
              i + 1 === page
                ? 'w-5 bg-lav-600'
                : i + 1 < page
                  ? 'w-2 bg-lav-500'
                  : 'w-2 bg-lav-400/50'
            }`}
          />
        ))}
      </div>

      <CuteButton
        variant="solid"
        onClick={onNext}
        disabled={page >= total}
        aria-label="Next page"
      >
        Next
        <ChevronRight className="h-5 w-5" />
      </CuteButton>
    </nav>
  )
}
