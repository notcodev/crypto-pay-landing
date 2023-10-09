import { useEffect, useRef } from 'react'

const isLeftOrRightArrow = (
  key: KeyboardEvent['key'],
): key is 'ArrowLeft' | 'ArrowRight' => {
  return ['ArrowLeft', 'ArrowRight'].includes(key)
}

export const useArrows = (
  callback: (pressedArrow: 'ArrowLeft' | 'ArrowRight') => void,
) => {
  const callbackRef = useRef(callback)
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) =>
      isLeftOrRightArrow(event.key) && callbackRef.current(event.key)

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [callbackRef])
}
