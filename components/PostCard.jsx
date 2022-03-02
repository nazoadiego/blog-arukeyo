import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PostDate } from '.'

const PostCard = ({ post }) => {
  return (
    <div className="mb-8 rounded-lg border border-gray-300 pb-12 shadow-lg lg:p-8 lg:pb-12">
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
          transition hover:text-violet-600"
        >
          {post.title}
        </h2>
      </Link>
      <div
        className="mb-8 block w-full items-center
      justify-center lg:flex"
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
          <div className="ml-4 flex flex-col">
            <PostDate post={post} />
            <h5 className="font-semibold text-gray-700">{post.author.name}</h5>
          </div>
        </div>
      </div>
      <p className="mb-8 px-4 text-center text-lg text-gray-600 lg:px-10">
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
