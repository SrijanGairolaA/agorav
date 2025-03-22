import React from 'react'

const Mssg = ({
  pic,
  name,
  mssg,
  time
}) => {
  return (
    <>
    <div className='bg-white border-b border-gray-400 h-16 flex justify-between'>
            <div className='bg-blue-00 w-14 ml-3 '>
              <img src={pic} className='h-12 w-12 rounded-full mt-2 ml-1 border-2 border-gray-500'/>
            </div>
            <div className='bg-purple-00 w-4/5 ml-1  '>
              <div className='bg-slate-00 mt-1 text-lg'>{name}</div>
              <div className='mt-1 text-sm text-gray-500'>{mssg}.....</div>
            </div>
            <div className='bg-cyan-00 w-16 '>
             <div className='bg-amber-00 mt-2 text-sm text-gray-500'>{time}</div>
            </div>
      </div>
      
    </>
  )
}

export default Mssg
