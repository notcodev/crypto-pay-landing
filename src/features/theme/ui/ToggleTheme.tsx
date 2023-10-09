'use client'

import DarkTheme from '@assets/icons/theme/dark.svg'
import LightTheme from '@assets/icons/theme/light.svg'
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal, flushSync } from 'react-dom'
import { ThemeTransitionScreen } from '@/entities/theme'
import { useLatest } from '@/shared/hooks'
import { delay } from '@/shared/utils'
import {
  useIsVisible,
  useSetIsVisible,
  useSetTheme,
  useTheme,
  VisibilityProvider,
} from '../lib'
import styles from './ToggleTheme.module.scss'

const ScreenPortal = () => {
  const theme = useTheme()
  const setTheme = useSetTheme()

  const latestTheme = useLatest(theme)
  const screenTheme = useRef<Theme | null>(null)

  const [isMounted, setIsMounted] = useState<boolean>(false)
  const portalRef = useRef<HTMLDivElement | null>(null)

  const isVisible = useIsVisible()
  const setIsVisible = useSetIsVisible()

  useEffect(() => {
    portalRef.current = document.querySelector<HTMLDivElement>('#portal')
    setIsMounted(true)
  }, [])

  const onEntered = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

    delay(350).then(() => {
      flushSync(() => setIsVisible(false))
      screenTheme.current = latestTheme.current
    })
  }, [setIsVisible, setTheme, latestTheme])

  return (
    isMounted &&
    portalRef.current &&
    createPortal(
      <ThemeTransitionScreen
        isVisible={isVisible}
        onEntered={onEntered}
        screenTheme={screenTheme}
      />,
      portalRef.current,
    )
  )
}

const ToggleButton = () => {
  const theme = useTheme()
  const setIsVisible = useSetIsVisible()

  const onClick = () => {
    setIsVisible(true)
  }

  return (
    <button className={styles.button} onClick={onClick}>
      {theme === 'light' ? (
        <LightTheme className={styles.icon} />
      ) : (
        <DarkTheme className={styles.icon} />
      )}
    </button>
  )
}

export const ToggleTheme = () => {
  return (
    <VisibilityProvider>
      <ToggleButton />
      <ScreenPortal />
    </VisibilityProvider>
  )
}
