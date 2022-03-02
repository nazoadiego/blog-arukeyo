import React from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Header = (props) => {
  return (
    <nav className="flex items-center justify-center lg:mb-4 lg:py-8">
      <ul className="flex flex-wrap items-center justify-center">
        <li
          onClick={props.navigateHome}
          className="mb-8 flex basis-full justify-center lg:order-2 lg:basis-auto"
        >
          <Link href="/">
            <span className="mx-4 cursor-pointer text-6xl font-bold">
              Arukeyo
            </span>
          </Link>
        </li>
        <li onClick={props.navigateHome} className="mx-2 pb-4 lg:order-1">
          <Link href="/category/programming">
            <span className="cursor-pointer text-2xl font-light">
              Programming
            </span>
          </Link>
        </li>
        <li onClick={props.navigateHome} className="mx-2 pb-4 lg:order-1">
          <Link href="/category/music">
            <span className="cursor-pointer text-2xl font-light">Music</span>
          </Link>
        </li>
        <li onClick={props.navigateHome} className="mx-2 pb-4 lg:order-3">
          <Link href="/category/japanese">
            <div className="cursor-pointer text-2xl font-light">Japanese</div>
          </Link>
        </li>

        <li onClick={props.navigateHome} className="mx-2 pb-4 lg:order-3">
          <Link href="/category/movies">
            <div className="cursor-pointer text-2xl font-light">Movies</div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
