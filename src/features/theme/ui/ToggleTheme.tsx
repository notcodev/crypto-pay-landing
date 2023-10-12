'use client'

// import DarkTheme from '@assets/icons/theme/dark.svg'
// import LightTheme from '@assets/icons/theme/light.svg'
// import { useCallback, useEffect, useRef, useState } from 'react'
// import { createPortal, flushSync } from 'react-dom'
import {
  SunAndMoon,
  // ThemeTransitionScreen
} from '@/entities/theme'
// import { useLatest } from '@/shared/hooks'
// import { delay } from '@/shared/utils'
import {
  // useIsVisible,
  // useSetIsVisible,
  useSetTheme,
  // useTheme,
  VisibilityProvider,
} from '../lib'
import styles from './ToggleTheme.module.scss'

// const ScreenPortal = () => {
//   const theme = useTheme()
//   const latestTheme = useLatest(theme)
//   const setTheme = useSetTheme()
//
//   const [isMounted, setIsMounted] = useState<boolean>(false)
//   const portalRef = useRef<HTMLDivElement | null>(null)
//
//   const isVisible = useIsVisible()
//   const setIsVisible = useSetIsVisible()
//
//   useEffect(() => {
//     portalRef.current = document.querySelector<HTMLDivElement>('#portal')
//     setIsMounted(true)
//   }, [])
//
//   const onEntered = useCallback(() => {
//     setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
//
//     delay(350).then(() => {
//       flushSync(() => {
//         setIsVisible(false)
//       })
//     })
//   }, [setIsVisible, setTheme])
//
//   return (
//     isMounted &&
//     portalRef.current &&
//     createPortal(
//       <ThemeTransitionScreen
//         isVisible={isVisible}
//         onEntered={onEntered}
//         latestTheme={latestTheme}
//       />,
//       portalRef.current,
//     )
//   )
// }

const ToggleButton = () => {
  // const theme = useTheme()
  // const setIsVisible = useSetIsVisible()
  const setTheme = useSetTheme()

  const onClick = () => {
    // setIsVisible(true)
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button className={styles.button} onClick={onClick}>
      {/*{theme === 'light' ? (*/}
      {/*  <LightTheme className={styles.icon} />*/}
      {/*) : (*/}
      {/*  <DarkTheme className={styles.icon} />*/}
      {/*)}*/}
      <SunAndMoon />
    </button>
  )
}

export const ToggleTheme = () => {
  return (
    <VisibilityProvider>
      <ToggleButton />
      {/*<ScreenPortal />*/}
    </VisibilityProvider>
  )
}
