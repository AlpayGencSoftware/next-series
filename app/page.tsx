import Image from 'next/image'

import Link from 'next/link'
import styles from './page.module.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react';


export const pageInfo: Metadata = {
  title: 'Users',
};

const inter=Inter({subsets: ['latin']})

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World!</h1>
      <Link href="/about">Go to About Page</Link>
      <Link href="/users">Go to users page</Link>
    </main>
  )
}


