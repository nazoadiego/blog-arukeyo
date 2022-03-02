import React, { useState } from 'react'
import { Header, Layout } from '../components'
import '../styles/globals.css'
import '../styles/application.scss'
import ParticlesBackground from '../components/ParticlesBackground'

function MyApp({ Component, pageProps }) {
  const [displayHome, setDisplayHome] = useState(false)

  const navigateHome = () => {
    setDisplayHome(!displayHome)
  }

  return (
    <>
      {!displayHome && (
        <>
          <ParticlesBackground />
          <div className="absolute bottom-0 right-0 left-0">
            <Header navigateHome={navigateHome} />
          </div>
        </>
      )}
      {displayHome && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  )
}

export default MyApp
