import Cursor from '@assets/cursor.svg'
import { FeaturesCard } from '@/entities/features'
import { clsx } from '@/shared/utils'
import { CardProps } from '@/widgets/features-cards/lib'
import styles from './CommissionCard.module.scss'

export const CommissionCard = ({ markupClass }: CardProps) => {
  return (
    <FeaturesCard
      heading="One click to start"
      description={
        <>
          Open <span className="highlight">@CryptoBot</span>, go to{' '}
          <span className="highlight">Crypto Pay</span> and tap Create App to{' '}
          get API Token
        </>
      }
      className={clsx(styles.commissionCard, markupClass)}
    >
      <div className={styles.animationContainer}>
        <div className={styles.button}>🏝 Create App</div>
        <Cursor className={styles.cursor} />
      </div>
    </FeaturesCard>
  )
}
