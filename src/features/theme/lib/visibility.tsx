'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

const IsVisibleContext = createContext<boolean | undefined>(undefined)
const SetIsVisibleContext = createContext<
  Dispatch<SetStateAction<boolean>> | undefined
>(undefined)

export const useIsVisible = (): boolean => {
  const isVisible = useContext(IsVisibleContext)

  if (isVisible === undefined)
    throw new Error('use useIsVisible with VisibilityProvider')

  return isVisible
}
export const useSetIsVisible = (): Dispatch<SetStateAction<boolean>> => {
  const setIsVisible = useContext(SetIsVisibleContext)

  if (setIsVisible === undefined)
    throw new Error('use useSetIsVisible with VisibilityProvider')

  return setIsVisible
}

export const VisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  return (
    <IsVisibleContext.Provider value={isVisible}>
      <SetIsVisibleContext.Provider value={setIsVisible}>
        {children}
      </SetIsVisibleContext.Provider>
    </IsVisibleContext.Provider>
  )
}
