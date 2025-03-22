import React from 'react'

const Trending = ({
    place,
    trend,
    postNUm
}) => {
  return (
    <>
      <div className='text-sm ml-4'>trending in {place}</div>
      <div className='text-xl ml-4 text-blue-700 hover:underline'>#{trend} </div>
      <div className='text-sm ml-4 text-gray-500'>{postNUm} posts</div>
    </>
  )
}

export default Trending
