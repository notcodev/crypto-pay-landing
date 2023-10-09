'use client'

import compose from 'compose-function'
import { ReactNode } from 'react'
import { withTheme } from './with-theme'

const withProviders = compose(withTheme)

export const Providers = ({ children }: { children: ReactNode }) =>
  withProviders(() => <>{children}</>)()
