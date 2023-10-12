import './transition.scss'
import { FC, memo, RefObject, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { clsx } from '@/shared/utils'
import styles from './ThemeTransitionScreen.module.scss'

interface ThemeTransitionScreenProps {
  isVisible: boolean
  onEntered: () => void
  latestTheme: RefObject<Theme | null>
}

export const ThemeTransitionScreen: FC<ThemeTransitionScreenProps> = memo(
  ({ isVisible, onEntered, latestTheme }) => {
    const [screenTheme, setScreenTheme] = useState<Theme | null>(null)
    const nodeRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
      setScreenTheme(latestTheme.current)
    }, [latestTheme])

    return (
      <CSSTransition
        nodeRef={nodeRef}
        in={isVisible}
        onEntered={onEntered}
        onExited={() => setScreenTheme(latestTheme.current)}
        timeout={800}
        classNames="expand-in-fade-out"
        unmountOnExit
      >
        <div
          ref={nodeRef}
          className={clsx(
            styles.screen,
            screenTheme === 'dark' ? styles.light : styles.dark,
          )}
        />
      </CSSTransition>
    )
  },
)
