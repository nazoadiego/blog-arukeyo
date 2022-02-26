import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from 'next/link'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="mb-8 rounded-lg p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            {category.name}
          </Link>
        ))}
      </h3>
    </div>
  )
}

export default Categories
