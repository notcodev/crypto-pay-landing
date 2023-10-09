import CryptoPay from '@assets/icons/cryptopay-icon.svg'
import { FC, ReactElement } from 'react'
import { Section } from '@/shared/lib'
import { AnchorButton } from '@/shared/ui'
import { clsx } from '@/shared/utils'
import styles from './Navigation.module.scss'

interface NavigationProps {
  theme: Appearance
  themeToggleButton?: ReactElement
}

const bullets: {
  id: string
  text: string
}[] = [
  { id: Section.USE_CASES, text: 'Use cases' },
  { id: Section.FEATURES, text: 'Features' },
  { id: Section.HOW_TO_START, text: 'How to start' },
]

export const Navigation: FC<NavigationProps> = ({
  theme,
  themeToggleButton,
}) => {
  return (
    <nav className={styles.navigation}>
      <a
        href="#top"
        className={clsx(styles.icon, {
          [styles.long]: Boolean(themeToggleButton),
        })}
      >
        <CryptoPay />
      </a>
      <ul className={clsx(styles.bullets)}>
        {bullets.map((bullet) => (
          <li key={bullet.id} className={clsx(styles.bullet)}>
            <a className={styles[theme]} href={`#${bullet.id}`}>
              {bullet.text}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.actions}>
        {themeToggleButton}
        <AnchorButton
          kind="secondary"
          theme={theme}
          href={`#${Section.USE_CASES}`}
        >
          Get started
        </AnchorButton>
      </div>
    </nav>
  )
}
