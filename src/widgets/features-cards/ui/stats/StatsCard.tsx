import Image from 'next/image'
import { FeaturesCard } from '@/entities/features'
import { clsx } from '@/shared/utils'
import { CardProps } from '@/widgets/features-cards/lib'
import styles from './StatsCard.module.scss'

export const StatsCard = ({ markupClass }: CardProps) => {
  return (
    <FeaturesCard
      heading="Payment statistics"
      description={
        <>
          Open <span className="highlight">@CryptoBot</span>, go to{' '}
          <span className="highlight">Crypto Pay</span> and{' '}
          <span className="highlight">My Apps</span>, <br />
          App Name to get Statistics
        </>
      }
      className={clsx(styles.statsCard, markupClass)}
    >
      <div className={styles.animationContainer}>
        <div className={styles.message}>
          <div className={styles.imagesContainer}>
            <Image
              src="/images/messages/stats/all-time.png"
              alt="all-time-stats-message"
              className={clsx(styles.messageImage, styles.allTime)}
              width={1760}
              height={886}
            />
            <Image
              src="/images/messages/stats/today.png"
              alt="today-stats-message"
              className={clsx(styles.messageImage, styles.today)}
              width={1760}
              height={886}
            />
            <Image
              src="/images/messages/stats/yesterday.png"
              alt="yesterday-stats-message"
              className={clsx(styles.messageImage, styles.yesterday)}
              width={1760}
              height={886}
            />
          </div>
          <div className={styles.row}>
            <div className={clsx(styles.inlineButton, styles.allTime)}>
              All Time
            </div>
            <div className={clsx(styles.inlineButton, styles.today)}>Today</div>
          </div>
          <div className={styles.row}>
            <div className={clsx(styles.inlineButton, styles.yesterday)}>
              Yesterday
            </div>
            <div className={styles.inlineButton}>Week</div>
          </div>
          <div className={styles.row}>
            <div className={styles.inlineButton}>Month</div>
          </div>
          <div className={styles.row}>
            <div className={styles.inlineButton}>{'<'} Back</div>
          </div>
        </div>
      </div>
    </FeaturesCard>
  )
}
