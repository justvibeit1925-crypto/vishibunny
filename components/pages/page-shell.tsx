'use client'

import type { ReactNode } from 'react'

/**
 * Scrollable content area sized between the top bar and bottom nav.
 * Every page uses this so nothing hides behind the fixed chrome.
 */
export function PageShell({
  children,
  dark = false,
  center = true,
}: {
  children: ReactNode
  dark?: boolean
  center?: boolean
}) {
  return (
    <div
      className={`scrollbar-hidden relative z-10 h-full w-full overflow-y-auto px-5 pb-28 pt-20 sm:px-8 ${
        center ? 'flex flex-col items-center justify-center' : ''
      } ${dark ? 'text-lav-100' : 'text-ink'}`}
    >
      <div className="mx-auto w-full max-w-md">{children}</div>
    </div>
  )
}
