import { useEffect, useRef, useState } from 'react'
import { debounce } from '@/shared/utils'

export const useInView = <T extends HTMLElement>() => {
  const inViewRef = useRef<boolean>(false)
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (ref.current === null) return

      inViewRef.current =
        window.scrollY + window.outerHeight >= ref.current.offsetTop
    }, 300)

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [ref, inViewRef])

  return { ref, inViewRef }
}
