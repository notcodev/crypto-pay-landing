import Go from '@assets/icons/pl/go.svg'
import NodeJs from '@assets/icons/pl/JS.svg'
import DotNet from '@assets/icons/pl/NET.svg'
import Php from '@assets/icons/pl/php.svg'
import Python from '@assets/icons/pl/Python.svg'
import Image from 'next/image'
import { PropsWithChildren, ReactElement, ReactNode } from 'react'
import * as uuid from 'uuid'
import { ThemeImage } from '@/entities/theme'
import { UseCasesCard } from '@/entities/usecases'
import { Pager } from '@/features/pager/ui/Pager'
import { Section } from '@/shared/lib'
import { AnchorButton, Description, Heading } from '@/shared/ui'
import { clsx } from '@/shared/utils'
import {
  AnonymousCard,
  CommissionCard,
  CurrencyCard,
  ExchangeCard,
  StatsCard,
  VerificationCard,
} from '@/widgets/features-cards'
import styles from './Home.module.scss'

const botsPictures = Array.from({ length: 5 }).map((_, index) => ({
  path: `/images/bots/${index + 1}.png`,
  id: uuid.v4(),
}))

// TODO: Поменять ссылки на кнопках Get started

const MainBlock = () => (
  <section className={styles.mainBlock}>
    <div className={styles.ctaContainer}>
      <header className={styles.header}>
        <Heading theme="auto" level="h1" className={styles.text}>
          Crypto payments for{' '}
          <span className={styles.blueText}>telegram&nbsp;bots</span>
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
          {botsPictures.map((picture) => (
            <Image
              key={picture.id}
              className={styles.botImage}
              src={picture.path}
              alt="bot-image"
              width={512}
              height={512}
            />
          ))}
        </div>
        <Description theme="auto" className={styles.text}>
          Popular bots use Crypto Pay
        </Description>
      </footer>
    </div>
    <div className={styles.mockupContainer}>
      <ThemeImage
        className={styles.mockup}
        width={1240}
        height={2560}
        path="/images/phone/cryptobot"
        lightFile="light.png"
        darkFile="dark.png"
        alt="iPhone Crypto Bot telegram chat"
      />
    </div>
  </section>
)

const UseCasesBlock = () => (
  <section className={styles.useCases} id={Section.USE_CASES}>
    <Pager className={styles.pager}>
      <UseCasesCard
        key={0}
        imagePath="/images/usecases/channels-integration.png"
        heading={
          <>
            <span className={styles.blueText}>Instant Auto&nbsp;Sales:</span>{' '}
            Boost&nbsp;conversion
          </>
        }
        description="Immediately deliver digital products and services to your users."
        backgroundClass={styles.pink}
      />
      <UseCasesCard
        key={1}
        imagePath="/images/usecases/instant-auto-sales.png"
        heading={
          <>
            <span className={styles.blueText}>Channels integration:</span>{' '}
            Seamless access
          </>
        }
        description="Automatically unlock exclusive content to your users."
        backgroundClass={styles.yellow}
      />
      <UseCasesCard
        key={2}
        imagePath="/images/usecases/endless-customization.png"
        heading={
          <>
            <span className={styles.blueText}>Endless customization</span> with
            Webhooks
          </>
        }
        description="Receive successful payment notifications in real&#8209;time. Integrate to any scenario of your service."
        backgroundClass={styles.blue}
      />
    </Pager>
  </section>
)

const FeaturesBlock = () => (
  <section className={styles.features} id="features">
    <CurrencyCard markupClass={styles.currencyCardMarkup} />
    <CommissionCard markupClass={styles.commissionCardMarkup} />
    <ExchangeCard markupClass={styles.exchangeCardMarkup} />
    <StatsCard markupClass={styles.statsCardMarkup} />
    <VerificationCard markupClass={styles.verificationCardMarkup} />
    <AnonymousCard markupClass={styles.anonymousCardMarkup} />
  </section>
)

// TODO: Поменять потом alt

const Highlight = ({ children }: PropsWithChildren) => {
  return <span className="highlight">{children}</span>
}

const ListItem = ({ children }: PropsWithChildren) => (
  <li className={styles.listItem}>{children}</li>
)

const Step = ({
  heading,
  index,
  children,
  image,
  colorClass,
}: PropsWithChildren<{
  heading: ReactNode
  image: ReactElement
  index: number
  colorClass: string
}>) => (
  <section className={styles.step}>
    <div className={clsx(styles.illustration, colorClass)}>{image}</div>
    <div className={styles.info}>
      <span className={styles.stepCounter}>{index}</span>
      <div className={styles.description}>
        <h3 className={styles.stepHeading}>{heading}</h3>
        {children}
      </div>
    </div>
  </section>
)

const CommunityBlock = () => {
  return (
    <section className={styles.community} id="how-to-start">
      <h2 className={styles.heading}>
        Quick start using <span className={styles.blueText}>Crypto Pay</span>
      </h2>
      <Step
        heading="Authorizing your app"
        image={
          <Image
            className={styles.tokenImage}
            src="/images/quick-start/token.png"
            alt="1"
            width={1132}
            height={735}
          />
        }
        index={1}
        colorClass={styles.pink}
      >
        <ol className={styles.authorizingSteps}>
          <ListItem>
            Open <Highlight>@CryptoBot</Highlight>
          </ListItem>
          <ListItem>
            Go to <Highlight>Crypto Pay</Highlight>
          </ListItem>
          <ListItem>
            Tap <Highlight>Create App</Highlight>
          </ListItem>
          <ListItem>
            Get <Highlight>API Token</Highlight>
          </ListItem>
        </ol>
      </Step>
      <Step
        heading={<>Crypto Pay API&nbsp;Request</>}
        image={
          <Image
            className={styles.apiRequestImage}
            src="/images/quick-start/api-request.png"
            alt="1"
            width={1202}
            height={270}
          />
        }
        index={2}
        colorClass={styles.yellow}
      >
        <p className={styles.paragraph}>
          Requests are only served over HTTPS
          To&nbsp;pass&nbsp;parameters&nbsp;use:
        </p>
        <ul className={styles.apiRequestList}>
          <ListItem>
            <Highlight>URL query string</Highlight>
          </ListItem>
          <ListItem>
            <Highlight>application/json</Highlight>
          </ListItem>
          <ListItem>
            <Highlight>application/x-www-form-urlencoded</Highlight>
          </ListItem>
          <ListItem>
            <Highlight>multipart/form-data</Highlight>
          </ListItem>
        </ul>
      </Step>
      <Step
        heading="Getting updates"
        image={
          <Image
            className={styles.gettingUpdatesImage}
            src="/images/quick-start/getting-updates.png"
            alt="1"
            width={1186}
            height={597}
          />
        }
        index={3}
        colorClass={styles.blue}
      >
        <p className={styles.paragraph}>
          There are two ways of receiving
          <br />
          updates for your app:
        </p>
        <ul className={styles.gettingUpdatesList}>
          <ListItem>
            <Highlight>getInvoices</Highlight> method to get a list of created
            invoices.
          </ListItem>
          <ListItem>
            <Highlight>Webhooks</Highlight> to receive updates in realtime.
          </ListItem>
        </ul>
      </Step>
    </section>
  )
}

const APIBlock = () => {
  return (
    <section className={styles.api}>
      <div className={styles.container}>
        <Image
          className={styles.shapes}
          src="/images/api-block-shapes.png"
          alt="1"
          width={1424}
          height={2036}
        />
        <div className={styles.content}>
          <h2 className={styles.heading}>Crypto Pay API</h2>
          <p className={styles.paragraph}>
            Explore available methods and types and integrate them in any
            programming language.
          </p>
          <AnchorButton
            href="https://help.crypt.bot/crypto-pay-api"
            kind="secondary"
            theme="dark"
            target="_blank"
            className={styles.button}
          >
            Open API Docs
          </AnchorButton>
        </div>
      </div>
    </section>
  )
}

const BottomCommunityBlock = () => {
  return (
    <section className={styles.bottomCommunity}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Join dev community</h2>
        <p className={styles.paragraph}>
          Connect with bot developers and explore the possibilities our crypto
          payments service unlocks.
        </p>
        <div className={styles.programmingLanguages}>
          <a
            className={styles.libLink}
            href="https://github.com/Foile/crypto-pay-api"
            target="_blank"
          >
            <NodeJs className={styles.icon} />
            <span className={styles.apiName}>crypto-pay-api</span>
          </a>
          <a
            className={styles.libLink}
            href="https://github.com/WinoGarcia/CryptoPay"
            target="_blank"
          >
            <DotNet className={styles.icon} />
            <span className={styles.apiName}>CryptoPay</span>
          </a>
          <a
            className={styles.libLink}
            href="https://github.com/klev-o/crypto-pay-api"
            target="_blank"
          >
            <Php className={styles.icon} />
            <span className={styles.apiName}>crypto-pay-api</span>
          </a>
          <a
            className={styles.libLink}
            href="https://github.com/layerqa/aiocryptopay"
            target="_blank"
          >
            <Python className={styles.icon} />
            <span className={styles.apiName}>aiocryptopay</span>
          </a>
          <a
            className={styles.libLink}
            href="https://github.com/arthurshafikov/cryptobot-sdk-golang"
            target="_blank"
          >
            <Go className={styles.icon} />
            <span className={styles.apiName}>cryptobot-sdk-golang</span>
          </a>
        </div>
        <AnchorButton
          href="https://t.me/CryptoPayDev"
          target="_blank"
          kind="general"
        >
          Open Devs chat
        </AnchorButton>
      </div>
    </section>
  )
}

// const Footer = () => (
//   <footer className={styles.footer}>
//     <Navigation theme="dark" />
//   </footer>
// )

const HomePage = () => (
  <>
    <MainBlock />
    <UseCasesBlock />
    <FeaturesBlock />
    <CommunityBlock />
    <APIBlock />
    <BottomCommunityBlock />
    {/*<Footer/>*/}
  </>
)

export default HomePage
