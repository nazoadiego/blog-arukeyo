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
        <div className="mb-4 flex w-full items-center">
          <div className="mr-2 hidden items-center justify-center md:flex lg:mb-0 lg:w-auto">
            <Image
              alt={post.author.name}
              unoptimized
              height="80px"
              width="80px"
              className="rounded-full object-cover object-center"
              src={post.author.photo.url}
            />
          </div>
          <div className="ml-2">
            <PostDate post={post} />
            <h5 className="inline align-middle text-base font-light text-gray-400">
              by {post.author.name}
            </h5>
          </div>
        </div>
        <div className="prose max-w-none px-2">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
