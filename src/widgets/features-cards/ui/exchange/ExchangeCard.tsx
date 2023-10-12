import { FeaturesCard } from '@/entities/features'
import { clsx } from '@/shared/utils'
import { CardProps } from '@/widgets/features-cards/lib'
import styles from './ExchangeCard.module.scss'
import USDTLogo from '@assets/icons/currencies/logos/USDT.svg'
import BTCLogo from '@assets/icons/currencies/logos/BTC.svg'
import TONLogo from '@assets/icons/currencies/logos/TON.svg'
import Arrow from '@assets/arrow.svg'

export const ExchangeCard = ({ markupClass }: CardProps) => {
  return (
    <FeaturesCard
      heading="Real-time exchange rates"
      description={
        <>
          Request up to date currency rate with the{' '}
          <span className="highlight">getExchangeRates</span> API method
        </>
      }
      className={clsx(styles.exchangeCard, markupClass)}
    >
      <div className={styles.animationContainer}>
        <div className={styles.cryptoCurrencies}>
          <div className={clsx(styles.currency, styles.tether)}>
            <USDTLogo className={styles.logo} />
          </div>
          <div className={clsx(styles.currency, styles.bitcoin)}>
            <BTCLogo className={styles.logo} />
          </div>
          <div className={clsx(styles.currency, styles.ton)}>
            <TONLogo className={styles.logo} />
          </div>
        </div>
        <div className={styles.exchangeBadge}>
          <Arrow className={styles.arrow} />
          <Arrow className={styles.arrow} />
        </div>
        <div className={clsx(styles.currency, styles.dollar)}>$</div>
      </div>
    </FeaturesCard>
  )
}
