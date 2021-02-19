import React, { ReactNode } from 'react'
import Head from 'next/head'

import Navbar from './Navbar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="layout">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar />
    </header>
    <main>
      <div className="container">
        {children}
      </div>
    </main>
    <footer className="footer">
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
