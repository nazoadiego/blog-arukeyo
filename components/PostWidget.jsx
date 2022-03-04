import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        const reversedPosts = result.slice(0).reverse()
        setRelatedPosts(reversedPosts)
      })
    } else {
      getRecentPosts().then((result) => {
        const reversedPosts = result.slice(0).reverse()
        setRelatedPosts(reversedPosts)
      })
    }
  }, [slug])

  return (
    <div className="mb-8 rounded-lg border border-gray-300 p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.slice(0, 5).map((post) => (
        <div key={post.title} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              unoptimized
              height="60px"
              width="60px"
              className="rounded-full align-middle"
            />
          </div>
          <div className="ml-4 flex-grow">
            <p className="font-xs text-gray-500">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
