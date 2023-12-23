import React from 'react'


const Card = ({category,price,title,bannerImageRef,creatorname, publishedDate,image}) => {
  return (
    <div className="bg-gray-800 rounded-md shadow-md overflow-hidden">
  {/* Banner */}
  <div className="h-40 bg-gray-300">
    {/* Your banner content (e.g., course image) */}
    <img src="https://cdni.iconscout.com/illustration/premium/thumb/male-web-developer-doing-research-on-development-5691622-4759504.png" />
  </div>
  {/* Creator and categories */}
  <div className="p-4">
    <h3 className="text-lg text-gray-200 font-semibold mb-2">{title}</h3>
    <p className="text-gray-500 mb-2">{creatorname}</p>
    <div className="flex space-x-2 text-sm text-gray-500 mb-3">
      {/* Category labels */}
      <span className='bg-gray-900 p-1 rounded-md text-white shadow-md'>{category}</span>
      {/* Add more categories as needed */}
    </div>
    {/* Course price, rating, and published date */}
    <div className="flex justify-between items-center border-t border-gray-300 pt-2">
      <div className="flex items-center space-x-4">
        <span className="text-gray-500 font-semibold">${price}</span>
        <span className="text-yellow-500">⭐⭐⭐⭐</span>
      </div>
      <span className="text-gray-500 text-sm ml-2"> published on {publishedDate}</span>
    </div>
  </div>
</div>

  )
}

export default Card

