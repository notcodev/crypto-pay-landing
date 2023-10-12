'use client'

import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ThemeSwitcherProps {
  lightElement: ReactElement
  darkElement: ReactElement
}

const ThemeContext = createContext<Theme | null | undefined>(undefined)
const SetThemeContext = createContext<
  Dispatch<SetStateAction<Theme | null>> | undefined
>(undefined)

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme as Theme)

    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = ({ matches }: MediaQueryListEvent) => {
      setTheme(matches ? 'dark' : 'light')
    }
    mediaQueryList.addEventListener('change', handleChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleChange)
    }
  }, [setTheme])

  useEffect(() => {
    if (!theme) return

    document.documentElement.dataset.theme = theme

    const pictures = document.querySelectorAll('picture')

    pictures.forEach((picture) => {
      const sources: NodeListOf<HTMLSourceElement> = picture.querySelectorAll(`
        source[media*="prefers-color-scheme"], 
        source[data-media*="prefers-color-scheme"]
      `)

      sources.forEach((source) => {
        // Preserve the source `media` as a data-attribute
        // to be able to switch between preferences
        if (source.media.includes('prefers-color-scheme')) {
          source.dataset.media = source.media
        }

        // If the source element `media` target is the `preference`,
        // override it to 'all' to show
        // or set it to 'none' to hide
        if (source.dataset.media?.includes(theme)) {
          source.media = 'all'
        } else {
          source.media = 'none'
        }
      })
    })
  }, [theme])

  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  )
}

export const useTheme = (): Theme | null => {
  const theme = useContext(ThemeContext)

  if (theme === undefined) throw new Error('use useTheme with ThemeProvider')

  return theme
}
export const useSetTheme = (): Dispatch<SetStateAction<Theme | null>> => {
  const setTheme = useContext(SetThemeContext)

  if (setTheme === undefined)
    throw new Error('use useSetTheme with ThemeProvider')

  return setTheme
}

export const ThemeSelector: FC<ThemeSwitcherProps> = ({
  lightElement,
  darkElement,
}) => {
  const theme = useTheme()
  const elements = { light: lightElement, dark: darkElement }

  return theme ? elements[theme] : null
}
