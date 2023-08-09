import Image from 'next/image'

import Link from 'next/link'
import styles from './page.module.css'

import type { Metadata } from 'next'


export const metadata:Metadata={
  title:'Home',
  description:'Welcome to Next.js'
}
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World!</h1>
      <Link href="/about">Go to About Page</Link>
    </main>
  )
}


