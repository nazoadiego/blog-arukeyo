import React, { useState, useEffect } from 'react'
import { submitComment } from '../services'

interface Event {
  target: { name: string; value: string }
}

const CommentsForm = ({ slug }: { slug: string }) => {
  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  })

  const onInputChange = (e: Event) => {
    const { target } = e
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = () => {
    setError(false)
    const { name, email, comment } = formData
    if (!name || !email || !comment) {
      setError(true)
      return
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    }

    setFormData((prevState) => ({ ...prevState, comment: '' }))
    setShowSuccessMessage(true)
    submitComment(commentObj)
  }

  return (
    <div className="mb-8 rounded-lg border border-gray-300 bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        Leave a Reply
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          value={formData.comment}
          onChange={onInputChange}
          className="gray-input h-40 p-4"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          value={formData.name}
          onChange={onInputChange}
          className="gray-input py-2 px-4"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          value={formData.email}
          onChange={onInputChange}
          className="gray-input py-2 px-4"
          placeholder="Email"
          name="email"
        />
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are mandatory</p>
      )}
      {showSuccessMessage && (
        <span className="mt-3 text-base font-semibold text-green-500">
          Your comment has been submitted! It'll be approved soon.
        </span>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleSubmit}
          className="ease btn-purple transition duration-500 hover:bg-pink-500"
        >
          Post Comment
        </button>
      </div>
    </div>
  )
}

export default CommentsForm
