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
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>
      <div>
        <ul className="grid grid-cols-2">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link href={`/category/${category.slug}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Categories
