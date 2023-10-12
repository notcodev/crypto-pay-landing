import { useEffect } from 'react'
import { useLatest } from '@/shared/hooks'

export const useKeys = (
  callback: (pressedArrow: KeyboardEvent['key']) => void,
) => {
  const callbackRef = useLatest(callback)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) =>
      callbackRef.current?.call(global, event.key)

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [callbackRef])
}
