'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from '@/features/theme'

export const withTheme = (component: () => ReactNode) => () => {
  return <ThemeProvider>{component()}</ThemeProvider>
}
