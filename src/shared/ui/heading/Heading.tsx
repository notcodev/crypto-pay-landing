import { createElement, FC, HTMLAttributes } from 'react'
import { clsx } from '@/shared/utils'
import styles from './Heading.module.scss'

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  theme: Appearance
  level: 'h1' | 'h2' | 'h3' | 'h4'
}

export const Heading: FC<TitleProps> = ({
  level,
  children,
  className,
  theme,
  ...props
}) => {
  return createElement(
    level,
    {
      className: clsx(className, styles[theme], styles.heading, styles[level]),
      ...props,
    },
    children,
  )
}
