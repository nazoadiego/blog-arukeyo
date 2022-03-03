import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div
      className="relative mt-20 mb-8 rounded-lg border
    border-violet-500 bg-violet-500 bg-opacity-80
    p-12 text-center shadow-md shadow-violet-300"
    >
      <div className="absolute left-0 right-0 -top-12">
        <Image
          src={author.photo.url}
          alt={author.name}
          unoptimized
          height="100px"
          width="100px"
          className="rounded-full object-cover align-middle"
        />
      </div>
      <h3 className="mt-4 mb-4 text-2xl font-bold text-white">{author.name}</h3>
      <p className="text-ellipsis text-sm text-white">{author.bio}</p>
      <a
        href="https://nazoadiego.github.io/portfolio/"
        className="font-semibold text-violet-800 underline underline-offset-2"
      >
        Nzoa's Portfolio
      </a>
    </div>
  )
}

export default Author
