'use client'

import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react'
import { EmojiBurst } from '@/components/decorations'

type FireFn = (emojis?: string[]) => void

const BurstContext = createContext<FireFn | null>(null)

export function useBurst() {
  const ctx = useContext(BurstContext)
  if (!ctx) throw new Error('useBurst must be used within BurstProvider')
  return ctx
}

export function BurstProvider({ children }: { children: ReactNode }) {
  const [trigger, setTrigger] = useState(0)
  const emojisRef = useRef<string[] | undefined>(undefined)
  const [emojis, setEmojis] = useState<string[] | undefined>(undefined)

  const fire = useCallback((e?: string[]) => {
    emojisRef.current = e
    setEmojis(e)
    setTrigger((t) => t + 1)
  }, [])

  return (
    <BurstContext.Provider value={fire}>
      {children}
      <EmojiBurst trigger={trigger} emojis={emojis} />
    </BurstContext.Provider>
  )
}
