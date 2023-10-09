import './transition.scss'
import { FC, RefObject, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { clsx } from '@/shared/utils'
import styles from './ThemeTransitionScreen.module.scss'

interface ThemeTransitionScreenProps {
  isVisible: boolean
  onEntered: () => void
  screenTheme: RefObject<Theme | null>
}

export const ThemeTransitionScreen: FC<ThemeTransitionScreenProps> = ({
  isVisible,
  onEntered,
  screenTheme,
}) => {
  const nodeRef = useRef<HTMLDivElement | null>(null)

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isVisible}
      onEntered={onEntered}
      timeout={800}
      classNames="expand-in-fade-out"
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className={clsx(
          styles.screen,
          screenTheme.current === 'dark' ? styles.light : styles.dark,
        )}
      />
    </CSSTransition>
  )
}
