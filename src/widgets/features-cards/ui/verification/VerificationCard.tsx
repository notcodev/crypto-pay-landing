import { FeaturesCard } from '@/entities/features'
import { ThemeImage } from '@/entities/theme'
import { clsx } from '@/shared/utils'
import { CardProps } from '@/widgets/features-cards/lib'
import styles from './VerificationCard.module.scss'

const notifications = [
  {
    name: 'design-contest',
    alt: 'iPhone Crypto Bot design contest notification',
    className: styles.first,
  },
  {
    name: 'winner',
    alt: 'iPhone Crypto Bot winner notification',
    className: styles.second,
  },
  {
    name: 'interest',
    alt: 'iPhone Crypto Bot interest notification',
    className: styles.third,
  },
]

export const VerificationCard = ({ markupClass }: CardProps) => {
  return (
    <FeaturesCard
      heading="Send coins to users"
      description={
        <>
          Automate payouts to users with{' '}
          <span className="highlight">transfer</span> API method
        </>
      }
      className={clsx(styles.verificationCard, markupClass)}
    >
      <div className={styles.animationContainer}>
        <div className={styles.mockupContainer}>
          <ThemeImage
            className={styles.mockup}
            width={1017}
            height={792}
            path="/images/phone/bottom-mockup"
            lightFile="light.png"
            darkFile="dark.png"
            alt="iPhone notifications screen mockup"
          />
        </div>
        <div className={styles.notificationsContainer}>
          {notifications.map((data) => (
            <ThemeImage
              key={data.name}
              className={clsx(styles.notification, data.className)}
              width={1592}
              height={500}
              path={`/images/notifications/${data.name}`}
              lightFile="light.png"
              darkFile="dark.png"
              alt={data.alt}
            />
          ))}
        </div>
      </div>
    </FeaturesCard>
  )
}
