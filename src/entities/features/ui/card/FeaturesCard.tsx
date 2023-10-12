import { PropsWithChildren, ReactElement } from 'react'
import { clsx } from '@/shared/utils'
import styles from './FeaturesCard.module.scss'

export const FeaturesCard = ({
  className,
  children,
  heading,
  description,
}: PropsWithChildren<{
  className?: string
  heading: string
  description: string | ReactElement
}>) => {
  return (
    <section className={clsx(styles.card, className)}>
      {children}
      <div className={styles.details}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
}
