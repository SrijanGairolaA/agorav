import React, { useState } from 'react'
import PP from "../assets/Screenshot (108).png"
import Button from './Button'

const PostsContainer = ({
  children = 'Hello this is agora vote application, We’ve worked hard to create a voting platform that’s easy to use and gives you the opportunity to make your voice heard. Now, we’d love to know how you feel about the app! 💬 How would you rate your experience with this app '
}) => {

  const [image, setImage] = useState(false)
  const [video, setVideo] = useState(false)

  return (
   <>
    <div className='bg-white h-auto border-2 border-gray-400 w-11/12 rounded-sm mt-3 ml-6'>
      <div className='bg-purple-400 flex pt-2'>
        <div className=' bg-cyan-500 h-14 w-14 ml-4 rounded-full'>
          <img src={PP} className='h-full rounded-full' />
          
          </div>
        <div className=' bg-orange-300 w-4/5 ml-1'>
        <div className='bg-cyan-400 mt-1'>
         <b> Username</b>
         <br />
         @userid
        </div>
       

          </div>
      </div>
      <div className='bg-pink-600 h-4/5'>
        <div className='bg-lime-400 h-auto mt-1 w-4/5 ml-5 mb-2'>
         {/* <Posts>
         {children}
        </Posts> */}
        
        </div>
      </div>
      <div className='bg-gray-00 border-t-2 border-gray-400 h-12 relative flex '>
       
      <i class="ri-heart-3-line bg-slate-00 mt-1 h-9 w-10 pl-2 text-2xl ml-6 pt-1 rounded-full text-rose-600 hover:bg-slate-200 active:"></i>
      <i class="ri-chat-1-line bg-slate-00 mt-1 h-9 w-12 pl-2 text-2xl ml-14 pt-1 rounded-full text-sky-600 hover:bg-slate-200 active:"></i>
      <i class="ri-bookmark-line bg-slate-00 mt-1 h-9 w-12 pl-2 text-2xl ml-14 pt-1 rounded-full text-sky-600 hover:bg-slate-200 active:"></i>
      <i class="ri-share-forward-line bg-slate-00 mt-1 h-9 w-12 pl-2 text-2xl ml-14 pt-1 rounded-full text-green-600 hover:bg-slate-200 active:"></i>
      <Button classname='absolute  rounded-l-full right-24 mt-1  active:bg-rose-300   '>
          Stats
        </Button>
        <Button classname='absolute rounded-r-full  right-5 mt-1 active:bg-rose-300  '>
          Vote
        </Button>
      </div>
   
    </div>
   
   
   </>
  )
}

export default PostsContainer
