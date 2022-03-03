import React from 'react'
import moment from 'moment'

const PostDate = ({ post }) => {
  return (
    <div className="flex items-center font-medium text-gray-700">
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
  )
}

export default PostDate
