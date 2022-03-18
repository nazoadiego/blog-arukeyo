import React from 'react'
import '../styles/globals.css'
import '../styles/application.scss'
import Head from 'next/head'
import Meta from '../components/Meta'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Arukeyo - Nzoa's Personal Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <Meta />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
