import React from 'react'

const Card = () => {
  return (
    <div className="bg-gray-800 rounded-md shadow-md overflow-hidden">
  {/* Banner */}
  <div className="h-40 bg-gray-300">
    {/* Your banner content (e.g., course image) */}
    <img src="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg" alt="Course" className="object-cover w-full h-full" />
  </div>
  {/* Creator and categories */}
  <div className="p-4">
    <h3 className="text-lg text-gray-200 font-semibold mb-2">Course Title</h3>
    <p className="text-gray-500 mb-2">By Creator Name</p>
    <div className="flex space-x-2 text-sm text-gray-500 mb-3">
      {/* Category labels */}
      <span className='bg-gray-900 p-1 rounded-md text-white shadow-md'>Category 1</span>
      <span className='bg-gray-900 p-1 ml-1 rounded-md text-white shadow-md'>Category 2</span>
      {/* Add more categories as needed */}
    </div>
    {/* Course price, rating, and published date */}
    <div className="flex justify-between items-center border-t border-gray-300 pt-2">
      <div className="flex items-center space-x-4">
        <span className="text-gray-500 font-semibold">$99</span>
        <span className="text-yellow-500">⭐⭐⭐⭐</span>
      </div>
      <span className="text-gray-500 text-sm ml-2">Published on May 21, 2023</span>
    </div>
  </div>
</div>

  )
}

export default Card

