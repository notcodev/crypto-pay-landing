import { Navigation } from '@/entities/nav/ui/Navigation'
import { ToggleTheme } from '@/features/theme/ui/ToggleTheme'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation theme="auto" themeToggleButton={<ToggleTheme />} />
    </header>
  )
}
