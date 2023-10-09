import './index.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Providers } from '@/app/providers'
import { Scripts } from '@/app/scripts'
import { Header } from '@/widgets/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CryptoPay',
  description:
    'We create a fast, secure, and seamless payment solution that allows anyone to buy, sell, store and pay with cryptocurrency right in Telegram.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
        <div id="portal" />
      </body>
      <Scripts />
    </html>
  )
}
