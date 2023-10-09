import { AnchorHTMLAttributes, FC } from 'react'
import { clsx } from '@/shared/utils'
import styles from './AnchorButton.module.scss'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  (
    | {
        kind: 'general'
        theme?: never
      }
    | {
        kind: 'secondary'
        theme: Appearance
      }
  )

export const AnchorButton: FC<ButtonProps> = ({
  className,
  children,
  kind,
  theme,
  ...props
}) => {
  return (
    <a
      className={clsx(
        styles.button,
        styles[kind],
        theme && styles[theme],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
