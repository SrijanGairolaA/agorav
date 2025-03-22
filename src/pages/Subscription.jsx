import React from 'react'
import Button from '../components/Button.jsx'

const Subscription = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-blue-400 to-red-500 h-screen w-full flex  items-center justify-evenly'>
       <div className='bg-white ml-40 h-4/6 w-1/6 border border-gray-400 rounded-sm shadow-lg'>
       <div className='bg-blue-00 text-4xl text-center mt-6 text-blue-500'>Basic</div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-check-line text-green-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-close-line text-red-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-close-line text-red-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-close-line text-red-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-close-line text-red-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='bg-purple-00 text-center text-3xl mt-6'>$2.99/month</div>
       <div className='bg-blue-00 text-center mt-6'>
       <Button classname='w-32 rounded-sm bg-blue-500 hover:bg-blue-400'>
          Select
        </Button>
       </div>
       </div>
       <div className='bg-white h-4/6 w-1/6  border border-gray-400 rounded-sm shadow-lg'>
       <div className='bg-blue-00 text-4xl text-center mt-6 text-slate-800'>Standard</div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-check-line text-green-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-check-line text-green-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-check-line text-green-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-close-line text-red-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-close-line text-red-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='bg-purple-00 text-center text-3xl mt-6'>$5.99/month</div>
       <div className='bg-blue-00 text-center mt-6'>
        <Button classname='w-32 rounded-sm bg-slate-800 hover:bg-slate-400'>
          Select
        </Button>
       </div>
       </div>

       <div className='bg-white mr-40 h-4/6 w-1/6  border border-gray-400 rounded-sm shadow-lg'>
       <div className='bg-blue-00 text-4xl text-center mt-6 text-rose-600'>Premium</div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-check-line text-green-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-check-line text-green-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-check-line text-green-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-check-line text-green-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='flex bg-green-00 mt-4'>
       < i class="ri-check-line text-green-600 ml-6 text-xl"></i>
       <div className='ml-2 text-gray-500'>Sample text here</div>
       </div>
       <div className='bg-purple-00 text-center text-3xl mt-6'>$9.99/month</div>
       <div className='bg-blue-00 text-center mt-6'>
        <Button classname='w-32 rounded-sm bg-rose-600 hover:bg-rose-400'>
          Select
        </Button>
       </div>
       </div>
      
       </div>
    </>
  )
}

export default Subscription
