import { PropsWithChildren } from 'react'
import { clsx } from '@/shared/utils'
import styles from './Card.module.scss'

export const Card = ({
  heading,
  description,
  children,
  className,
}: PropsWithChildren<{
  heading: string
  description: string
  className?: string
}>) => {
  return (
    <div className={clsx(styles.card, className)}>
      {children}
      <div className={styles.info}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
