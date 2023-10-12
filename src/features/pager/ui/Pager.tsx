'use client'

import './fade.scss'
import { FC, ReactElement, SetStateAction, useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import {
  useDirectedPagination,
  useKeys,
  useSwipe,
} from '@/features/pager/hooks'
import { useInView } from '@/shared/hooks'
import { clsx } from '@/shared/utils'
import styles from './Pager.module.scss'

type StringDigit = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0'

interface PagerProps {
  children: ReactElement[]
  className: string
}

interface PagerControlsProps {
  page: number
  length: number
  switchPage: (newState: SetStateAction<number>) => void
}

const PagerControls: FC<PagerControlsProps> = ({
  length,
  page,
  switchPage,
}) => (
  <div className={styles.controls}>
    <span className={styles.tag}>0{page}</span>
    {Array.from({ length }).map((_, index) => (
      <button
        key={index}
        className={clsx(styles.button, {
          [styles.active]: index === page - 1,
        })}
        onClick={() => switchPage(index + 1)}
      >
        <span className={clsx(styles.line)} />
      </button>
    ))}
    <span className={styles.tag}>0{length}</span>
  </div>
)

export const Pager: FC<PagerProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const nodeRef = useRef<HTMLDivElement | null>(null)
  const { page, direction, switchPage } = useDirectedPagination()
  const { ref, inViewRef } = useInView<HTMLDivElement>()

  const decreasePage = () =>
    switchPage((prev) => (prev === 1 ? children.length : prev - 1))

  const increasePage = () =>
    switchPage((prev) => (prev === children.length ? 1 : prev + 1))

  useKeys((key: KeyboardEvent['key']) => {
    if (!inViewRef.current) return

    const isNumericKey = (keyToCheck: string): keyToCheck is StringDigit => {
      return Array.from({ length: 10 })
        .map((_, index) => index.toString())
        .includes(keyToCheck)
    }

    const handleNumericKey = (key: number) => {
      if (key >= 1 && key <= children.length) switchPage(key)
    }

    switch (key) {
      case 'ArrowLeft':
        decreasePage()
        break
      case 'ArrowRight':
        increasePage()
        break
      default:
        if (isNumericKey(key)) handleNumericKey(Number(key))
        break
    }
  })

  useSwipe(containerRef, (direction: 'left' | 'right') => {
    switch (direction) {
      case 'left':
        increasePage()
        break
      case 'right':
        decreasePage()
        break
      default:
        break
    }
  })

  return (
    <div className={clsx(className, styles.pager)} ref={ref}>
      <div ref={containerRef}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={page}
            nodeRef={nodeRef}
            addEndListener={(done) => {
              nodeRef.current?.addEventListener('transitionend', done, false)
            }}
            classNames={`fade-to-${direction}`}
          >
            <div ref={nodeRef}>{children[page - 1]}</div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <PagerControls
        page={page}
        length={children.length}
        switchPage={switchPage}
      />
    </div>
  )
}
