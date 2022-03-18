import React from 'react'
import { Header } from './'
import { FC } from 'react'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
