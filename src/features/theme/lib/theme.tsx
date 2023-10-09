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

const ThemeContext = createContext<Theme | undefined>(undefined)
const SetThemeContext = createContext<
  Dispatch<SetStateAction<Theme>> | undefined
>(undefined)

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  )
}

export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext)

  if (!theme) throw new Error('use useTheme with ThemeProvider')

  return theme
}
export const useSetTheme = (): Dispatch<SetStateAction<Theme>> => {
  const setTheme = useContext(SetThemeContext)

  if (!setTheme) throw new Error('use useSetTheme with ThemeProvider')

  return setTheme
}

export const ThemeSelector: FC<ThemeSwitcherProps> = ({
  lightElement,
  darkElement,
}) => {
  const theme = useTheme()
  const elements = { light: lightElement, dark: darkElement }

  return elements[theme]
}
