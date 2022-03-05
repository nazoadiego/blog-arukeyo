import React from 'react'
import '../styles/globals.css'
import '../styles/application.scss'
import Head from 'next/head'
import Meta from '../components/Meta'

function MyApp({ Component, pageProps }) {
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
