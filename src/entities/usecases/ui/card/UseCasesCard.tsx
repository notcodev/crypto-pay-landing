import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { FC, ReactNode } from 'react'
import { AnchorButton, Description, Heading } from '@/shared/ui'
import styles from './UseCasesCard.module.scss'

interface UseCasesCardProps {
  imagePath: string | StaticImport
  heading: ReactNode
  description: ReactNode
}

export const UseCasesCard: FC<UseCasesCardProps> = ({
  heading,
  imagePath,
  description,
}) => {
  return (
    <section className={styles.card}>
      <Image className={styles.image} src={imagePath} alt="use-case" />
      <div className={styles.mainBlock}>
        <div className={styles.infoBlock}>
          <Heading theme="dark" level="h2" className={styles.text}>
            {heading}
          </Heading>
          <Description theme="dark" className={styles.text}>
            {description}
          </Description>
        </div>
        <AnchorButton
          href="https://help.crypt.bot/crypto-pay-api"
          kind="general"
          target="_blank"
          className={styles.button}
        >
          Open API Docs
        </AnchorButton>
      </div>
    </section>
  )
}
