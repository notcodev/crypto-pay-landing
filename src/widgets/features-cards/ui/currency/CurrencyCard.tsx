import BinanceCoin from '@assets/icons/currencies/BNB.svg'
import Bitcoin from '@assets/icons/currencies/BTC.svg'
import Ethereum from '@assets/icons/currencies/ETH.svg'
import LiteCoin from '@assets/icons/currencies/LTC.svg'
import Ton from '@assets/icons/currencies/TON.svg'
import Tron from '@assets/icons/currencies/TRX.svg'
import UsdCoin from '@assets/icons/currencies/USDC.svg'
import UsdTether from '@assets/icons/currencies/USDT.svg'
import { CSSProperties } from 'react'
import { FeaturesCard } from '@/entities/features'
import { clsx } from '@/shared/utils'
import { CardProps } from '@/widgets/features-cards/lib'
import styles from './CurrencyCard.module.scss'

const currencies = [
  { Component: Ethereum, name: 'ETH' },
  { Component: UsdTether, name: 'USDT' },
  { Component: Bitcoin, name: 'BTC' },
  { Component: Ton, name: 'TON' },
  { Component: BinanceCoin, name: 'BNB' },
  { Component: Tron, name: 'TRX' },
  { Component: UsdCoin, name: 'USDC' },
  { Component: LiteCoin, name: 'LTC' },
]

export const CurrencyCard = ({ markupClass }: CardProps) => {
  return (
    <FeaturesCard
      heading="Accept a wide range of cryptocurrencies"
      description={
        <>
          Bill any supported cryptocurrencies with asset parameter in{' '}
          <span className="highlight">GetInvoice</span> method
        </>
      }
      className={clsx(styles.currencyCard, markupClass)}
    >
      <div className={styles.animationContainer}>
        {currencies.map(({ Component, name }, index) => (
          <figure
            key={name}
            style={{ '--index': index } as CSSProperties}
            className={styles.currenciesContainer}
          >
            <Component className={styles.currencyImage} />
            <figcaption className={styles.currencyName}>{name}</figcaption>
          </figure>
        ))}
      </div>
    </FeaturesCard>
  )
}
