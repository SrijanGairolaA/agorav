import React from 'react'

const Notify = ({
    pic,
    mssg,
    time
}) => {
  return (
    <>
       <div className='bg-white border border-gray-400 h-14 flex'>
            <div>
              <div className='mt-2'>
              <img src={pic} className='h-10 ml-1 border border-gray-400 rounded-lg '  />
              </div>
            </div>
            <div className='bg-blue-00 w-4/5 ml-2'>
              <div className=' mt-2 '>
              {mssg}
              </div>
            </div>
            <div className='bg-slate-00 w-20'>
             <div className='bg-sky-00 text-sm text-gray-500 mt-1'>
            {time}
             </div>
            </div>
          </div>
    
    </>
  )
}

export default Notify
