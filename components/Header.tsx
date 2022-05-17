import React, { FC } from 'react'
import Link from 'next/link'
// import { getCategories } from '../services'

const Header: FC = () => {
  return (
    <nav className="m-2 flex items-center justify-center px-2 py-2">
      <ul className="flex flex-wrap items-center justify-center">
        <li className="mb-8 flex basis-full justify-center lg:order-2 lg:basis-auto">
          <Link href="/posts">
            <a className="mx-4 cursor-pointer text-6xl font-bold">Arukeyo</a>
          </Link>
        </li>
        <li className="mx-2 pb-4 lg:order-1">
          <Link href="/category/programming">
            <a className="underline-drop cursor-pointer text-2xl font-light">
              Programming
            </a>
          </Link>
        </li>
        <li className="mx-2 pb-4 lg:order-1">
          <Link href="/category/music">
            <a className="underline-drop cursor-pointer text-2xl font-light">
              Music
            </a>
          </Link>
        </li>
        <li className="mx-2 pb-4 lg:order-3">
          <Link href="/category/japanese">
            <a className="underline-drop cursor-pointer text-2xl font-light">
              Japanese
            </a>
          </Link>
        </li>

        <li className="mx-2 pb-4 lg:order-3">
          <Link href="/category/movies">
            <a className="underline-drop cursor-pointer text-2xl font-light">
              Movies
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
