import React, { ReactNode } from 'react'
import Head from 'next/head'
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
            <a href="https://laadanlanguage.com">Láadan Official Website</a>
          </li>
          <li>
            <a href="#">About Láadan</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
)

export default Layout
