import React from 'react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { PostDate } from '.'

const PostDetail = ({ post }) => {
  return (
    <div className="mb-8 rounded-lg border border-gray-300 bg-white pb-12 shadow-lg lg:p-12 lg:pb-20">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <img
          src={post.featuredImage.url}
          alt=""
          className="h-full w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="mb-8 flex w-full items-center">
          <div className="mr-8 hidden items-center justify-center md:flex lg:mb-0 lg:w-auto">
            <Image
              alt={post.author.name}
              unoptimized
              height="80px"
              width="80px"
              className="rounded-full object-cover object-center"
              src={post.author.photo.url}
            />
            <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">
              {post.author.name}
            </p>
          </div>
          <PostDate post={post} />
        </div>
        <div className="prose max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
