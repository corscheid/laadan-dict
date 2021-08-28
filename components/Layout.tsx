import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './Layout.module.css'

import Navbar from './Navbar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={styles.layout}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#e7d7c1" />
    </Head>
    <header>
      <Navbar />
    </header>
    <main>
      <div className="container">
        {children}
      </div>
    </main>
    <footer className={styles.footer}>
      <div className="container">
        <ul>
          <li>
            <Link href="https://en.wikipedia.org/wiki/L%C3%A1adan"><a>About Láadan</a></Link>
          </li>
          <li>
            <Link href="https://laadanlanguage.com"><a>Láadan Official Website</a></Link>
          </li>
          <li>
            <Link href="https://laadanlanguage.com/community"><a>Láadan Language Forum</a></Link>
          </li>
        </ul>
      </div>
    </footer>
  </div>
)

export default Layout
