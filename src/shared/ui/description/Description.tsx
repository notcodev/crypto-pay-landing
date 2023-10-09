import { FC, HTMLAttributes } from 'react'
import { clsx } from '@/shared/utils'
import styles from './Description.module.scss'

interface DescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  theme: Appearance
}

export const Description: FC<DescriptionProps> = ({
  className,
  children,
  theme,
  ...props
}) => {
  return (
    <p
      className={clsx(className, styles[theme], styles.description)}
      {...props}
    >
      {children}
    </p>
  )
}
