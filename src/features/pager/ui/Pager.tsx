'use client'

import './fade.scss'
import { FC, ReactElement, SetStateAction, useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useArrows } from '@/features/pager/hooks/useArrows'
import { useDirectedPagination } from '@/features/pager/hooks/useDirectedPagination'
import { useSwipe } from '@/features/pager/hooks/useSwipe'
import { clsx } from '@/shared/utils'
import styles from './Pager.module.scss'

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
  const { page, direction, switchPage } = useDirectedPagination(children.length)

  const decreasePage = () =>
    switchPage((prev) => (prev === 1 ? length : prev - 1))

  const increasePage = () =>
    switchPage((prev) => (prev === length ? 1 : prev + 1))

  useArrows((key: 'ArrowLeft' | 'ArrowRight') => {
    switch (key) {
      case 'ArrowLeft':
        decreasePage()
        break
      case 'ArrowRight':
        increasePage()
        break
      default:
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
    <div className={clsx(className, styles.pager)}>
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
