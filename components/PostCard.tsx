import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PostDate } from '.'
import { motion } from 'framer-motion'

interface PostCardProps {
  post: {
    author: { bio: string; name: string; id: string; photo: { url: string } }
    createdAt: string
    excerpt: string
    categories: { name: string; slug: string }[]
    featuredImage: { url: string }
    slug: string
    title: string
  }
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <motion.div className="mb-8 rounded-lg border border-gray-300 pb-12 shadow-lg lg:p-8 lg:pb-12">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <Link href={`/post/${post.slug}`}>
          <a>
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              unoptimized
              priority
              layout="fill"
              className="absolute cursor-pointer rounded-t-lg
            object-cover object-top shadow-lg lg:rounded-lg"
            />
          </a>
        </Link>
      </div>
      <Link href={`/post/${post.slug}`}>
        <a
          className="duration-600 mb-8 block cursor-pointer px-6 text-center text-xl
          transition hover:text-violet-600 lg:text-4xl"
        >
          {post.title}
        </a>
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
            <h5 className="text-base font-light text-gray-400">
              {post.author.name}
            </h5>
          </div>
        </div>
      </div>
      <p className="mb-8 px-4 text-center text-base text-gray-600 lg:px-10 lg:text-lg">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <a
            className="btn-purple transform
          transition duration-500 hover:-translate-y-1"
          >
            Continue Reading
          </a>
        </Link>
      </div>
    </motion.div>
  )
}

export default PostCard
