import React, { useEffect, useState, FC } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

import { getComments } from '../services'

interface Comment {
  name: string
  createdAt: string
  comment: string
}

interface CommentsProps {
  slug: string
}

const Comments: FC<CommentsProps> = ({ slug }) => {
  console.log(slug)
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result)
    })
  }, [slug])

  return (
    <>
      {comments.length > 0 && (
        <div className="mb-8 rounded-lg border border-gray-300 bg-white p-8 pb-12 shadow-lg">
          <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
            {comments.length} Comments
          </h3>
          {[...comments].reverse().map((comment, index) => (
            <div key={index} className="mb-4 border-b border-gray-100 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="w-full whitespace-pre-line text-gray-600">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
