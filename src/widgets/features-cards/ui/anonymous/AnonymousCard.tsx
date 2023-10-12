import Image from 'next/image'
import { FeaturesCard } from '@/entities/features'
import { clsx } from '@/shared/utils'
import { CardProps } from '@/widgets/features-cards/lib'
import styles from './AnonymousCard.module.scss'

// TODO: Поменять alt

export const AnonymousCard = ({ markupClass }: CardProps) => {
  return (
    <FeaturesCard
      heading="Anonymous payments"
      description={
        <>
          Use allow_anonymous parameter in&nbsp;
          <span className="highlight">createInvoice</span> method to give user
          an option to remain private
        </>
      }
      className={clsx(styles.anonymousCard, markupClass)}
    >
      <div className={styles.animationContainer}>
        <Image
          className={styles.message}
          src="/images/messages/anonymous/1.png"
          alt="First message image"
          width={2895}
          height={1015}
        />
        <Image
          className={styles.message}
          src="/images/messages/anonymous/2.png"
          alt="Second message image"
          width={2895}
          height={1015}
        />
        <Image
          className={styles.message}
          src="/images/messages/anonymous/3.png"
          alt="Third message image"
          width={2895}
          height={1015}
        />
      </div>
    </FeaturesCard>
  )
}
