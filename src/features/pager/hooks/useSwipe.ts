import { RefObject, useEffect, useRef } from 'react'

export const useSwipe = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  callback: (direction: 'left' | 'right') => void,
) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    let touchStartX: number | null = null

    const node = ref.current

    const handleTouchStart = (event: TouchEvent) => {
      touchStartX = event.changedTouches[0].clientX
    }

    const handleTouchEnd = (event: TouchEvent) => {
      if (touchStartX === null) return
      const touchEndX = event.changedTouches[0].clientX

      if (Math.abs(touchStartX - touchEndX) > 50) {
        callbackRef.current(touchEndX < touchStartX ? 'left' : 'right')
      }

      touchStartX = null
    }

    node?.addEventListener('touchstart', handleTouchStart)
    node?.addEventListener('touchend', handleTouchEnd)

    return () => {
      node?.removeEventListener('touchstart', handleTouchStart)
      node?.removeEventListener('touchstart', handleTouchEnd)
    }
  }, [ref, callbackRef])
}
