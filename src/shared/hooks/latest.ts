'use client'

import { useInsertionEffect, useRef } from 'react'

export const useLatest = <T>(value: T) => {
  const ref = useRef<T | null>(null)

  useInsertionEffect(() => {
    ref.current = value
  }, [value, ref])

  return ref
}
