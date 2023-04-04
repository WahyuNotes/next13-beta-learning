import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import RootLayout from './layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>
      Home Page
    </RootLayout>
  )
}
