import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ post }) => {
  return (
    <div className="mb-8 rounded-lg pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          unoptimized
          layout="fill"
          className="absolute rounded-t-lg object-cover
            object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <Link href={`/post/${post.slug}`}>
        <h2
          className="duration-600 mb-8 cursor-pointer text-center
      text-3xl font-semibold text-black transition hover:text-violet-600"
        >
          {post.title}
        </h2>
      </Link>
      <div
        className="mb-8 block w-full items-center
      justify-center text-center lg:flex"
      >
        <div className="mb-4 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <Image
            src={post.author.photo.url}
            alt={post.author.name}
            unoptimized
            height="50px"
            width="50px"
            className="rounded-full object-cover object-center"
          />
          <p className="inline align-middle text-gray-700">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline h-6 w-6 text-violet-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
      <p className="mb-8 px-4 text-center text-lg font-normal text-gray-700 lg:px-20">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span
            className="btn-purple transform transition
          duration-500 hover:-translate-y-1"
          >
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
