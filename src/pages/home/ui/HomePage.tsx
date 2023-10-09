import Alien from '@assets/images/bots/alien.png'
import Dog from '@assets/images/bots/dog.png'
import Duck from '@assets/images/bots/duck.png'
import Star from '@assets/images/bots/star.png'
import Yeti from '@assets/images/bots/yeti.png'
import DarkCryptoBotPhone from '@assets/images/phone/cryptobot/dark.png'
import LightCryptoBotPhone from '@assets/images/phone/cryptobot/light.png'
import ChannelsIntegration from '@assets/images/usecases/channels-integration.png'
import EndlessCustomization from '@assets/images/usecases/endless-customization.png'
import InstantAutoSales from '@assets/images/usecases/instant-auto-sales.png'
import Image from 'next/image'
import * as uuid from 'uuid'
import { UseCasesCard } from '@/entities/usecases/ui/card/UseCasesCard'
import { Pager } from '@/features/pager/ui/Pager'
import { ThemeSelector } from '@/features/theme'
import { Section } from '@/shared/lib'
import { AnchorButton, Description, Heading } from '@/shared/ui'
import styles from './Home.module.scss'

const botsImages = [Duck, Alien, Star, Dog, Yeti].map((path) => ({
  path,
  id: uuid.v4(),
}))

export const HomePage = () => {
  return (
    <>
      <section className={styles.mainSection}>
        <div className={styles.ctaContainer}>
          <header className={styles.header}>
            <Heading theme="auto" level="h1" className={styles.text}>
              Crypto payments for{' '}
              <span className={styles.highlight}>telegram&nbsp;bots</span>
            </Heading>
          </header>
          <main className={styles.main}>
            <Description theme="auto" className={styles.text}>
              Seamlessly accept crypto payments <br />
              in your Telegram bots and services.
            </Description>
            <AnchorButton kind="general" href={`#${Section.USE_CASES}`}>
              Get started
            </AnchorButton>
          </main>
          <footer className={styles.footer}>
            <div className={styles.botsImageGroup}>
              {botsImages.map((image) => (
                <Image
                  key={image.id}
                  className={styles.botImage}
                  src={image.path}
                  alt="bot-image"
                />
              ))}
            </div>
            <Description theme="auto" className={styles.text}>
              Popular bots use Crypto Pay
            </Description>
          </footer>
        </div>
        <div className={styles.mockupContainer}>
          <ThemeSelector
            lightElement={
              <Image
                className={styles.mockup}
                src={LightCryptoBotPhone}
                alt="crypto-bot-telegram-chat"
              />
            }
            darkElement={
              <Image
                className={styles.mockup}
                src={DarkCryptoBotPhone}
                alt="crypto-bot-telegram-chat"
              />
            }
          />
        </div>
      </section>
      <section className={styles.useCasesSection} id={Section.USE_CASES}>
        <Pager className={styles.pager}>
          <UseCasesCard
            key={0}
            imagePath={InstantAutoSales}
            heading={
              <>
                <span className={styles.highlight}>
                  Instant Auto&nbsp;Sales:
                </span>{' '}
                Boost&nbsp;conversion
              </>
            }
            description="Immediately deliver digital products and services to your users."
          />
          <UseCasesCard
            key={1}
            imagePath={ChannelsIntegration}
            heading={
              <>
                <span className={styles.highlight}>Channels integration:</span>{' '}
                Seamless access
              </>
            }
            description="Automatically unlock exclusive content to your users."
          />
          <UseCasesCard
            key={2}
            imagePath={EndlessCustomization}
            heading={
              <>
                <span className={styles.highlight}>Endless customization</span>{' '}
                with Webhooks
              </>
            }
            description="Receive successful payment notifications in real&#8209;time. Integrate to any scenario of your service."
          />
        </Pager>
      </section>
    </>
  )
}
