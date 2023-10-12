import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { FC, ReactNode } from 'react'
import { AnchorButton, Description, Heading } from '@/shared/ui'
import styles from './UseCasesCard.module.scss'
import { clsx } from "@/shared/utils";

interface UseCasesCardProps {
  imagePath: string | StaticImport
  heading: ReactNode
  description: ReactNode
  backgroundClass: string
}

export const UseCasesCard: FC<UseCasesCardProps> = ({
  heading,
  imagePath,
  description,
  backgroundClass
}) => {
  return (
    <section className={styles.card}>
      <div className={clsx(styles.imageContainer, backgroundClass)}>
        <Image className={styles.image} src={imagePath} alt="use-case" width={1000} height={1000}/>
      </div>
      <div className={styles.mainBlock}>
        <div className={styles.infoBlock}>
          <Heading theme="dark" level="h2" className={styles.heading}>
            {heading}
          </Heading>
          <Description theme="dark" className={styles.description}>
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
