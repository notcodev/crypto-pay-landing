import { SetStateAction, useCallback, useState } from 'react'
import { flushSync } from 'react-dom'
import { useLatest } from '@/shared/hooks'

type Direction = 'start' | 'end'

export const useDirectedPagination = (length: number) => {
  const [page, setPage] = useState<number>(1)
  const [direction, setDirection] = useState<Direction>('end')
  const latestPage = useLatest(page)

  const switchPage = useCallback(
    (newState: SetStateAction<number>) => {
      flushSync(() => {
        if (!latestPage.current) return

        if (typeof newState === 'function') {
          setDirection(
            newState(latestPage.current) > latestPage.current ? 'end' : 'start',
          )
        } else {
          setDirection(newState > latestPage.current ? 'end' : 'start')
        }
      })

      setPage(newState)
    },
    [latestPage, setPage, setDirection],
  )

  return {
    page,
    direction,
    switchPage,
  }
}
