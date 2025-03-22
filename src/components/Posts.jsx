import React, { useState } from 'react'
import PP from "../assets/Screenshot (108).png"
import Button from './Button'

const Posts = ({
     children="Hello this is agora vote application, We’ve worked hard to create a voting platform that’s easy to use and gives you the opportunity to make your voice heard. Now, we’d love to know how you feel about the app! 💬 How would you rate your experience with this app ",
     img = '',
     video = '',
     options =[]

  
}) => {
   
  const [like , setLike] = useState(false)
  const [replySection, setReplySection] = useState(false)
  const [bookmark, setBookmark] = useState(false)
  const [voteOptions, setVoteOptions] = useState(false)
  
  
  

  const handleVoteValue = ()=>{
    setVoteOptions(!voteOptions)
  }
  const comments = ()=>{
    setReplySection(!replySection)
  }

 
 
  return (
 <div>
  <div className='bg-white h-auto border border-gray-400 w-11/12 rounded-sm mt-3 ml-6'>

      <div className='bg-purple-00 flex pt-2'>
        <div className=' bg-cyan-00 h-14 w-14 ml-4 rounded-full'>
          <img src={PP} className='h-full rounded-full' />
          
          </div>
        <div className=' bg-orange-00 w-4/5 ml-1'>
        <div className='bg-cyan-00 mt-1'>
         <b> Username</b>
         <br />
         @userid
        </div>
       

          </div>
      </div>

      <div className='bg-pink-00 h-4/5'>
        <div className='bg-lime-00 h-auto mt-1 w-4/5 ml-5 mb-2'>
        <div>
           {children}
        </div>
           {img && (
              <div className='bg-blue-00 h-auto mb mt-2'>
              <img src={img} className='h-60 border-2 w-full border-gray-400 rounded-lg '/>
               </div>
                )}
        </div>
      </div>

      {voteOptions?  (<div className='bg-blue-00 h-auto'>

       <div className='bg-slate-00 border-l border-r border-t border-gray-400 overflow-y-auto h-40 w-4/5 ml-14'>
       <div className='bg-red-00 w-40 ml-2 text-xl'>Options:</div>
        
        {options.length === 0 ?(
          <p className='bg-blue-00 w-96 text-3xl mt-8 ml-10'>No options available!</p>

        ) : (
          options.map((task, index)=>(
            <div key={index} className='flex  bg-violet-00 mt-4 w-80 ml-4 hover:bg-gray-300 hover:rounded-full'>
          <input type="checkbox" className=' w-5 h-5 ' name="" id="" />
          <div className='ml-2' >{task}</div>
        </div>
          ))

        )}

       </div>





      </div>) : (null) }

      <div className='bg-gray-00 border-t border-gray-400 h-12 relative flex '>
       
      {like? (
        <i onClick={() => setLike(false)} class="ri-heart-3-fill bg-slate-00 mt-1 h-9 w-10 pl-2 text-2xl ml-6 pt-1 rounded-full text-rose-600 hover:bg-slate-200 active:"></i>
      ) : (
        <i onClick={() => setLike(true)} class="ri-heart-3-line bg-slate-00 mt-1 h-9 w-10 pl-2 text-2xl ml-6 pt-1 rounded-full text-rose-600 hover:bg-slate-200 active:"></i>
      )}
      <i onClick={comments} class="ri-chat-1-line bg-slate-00 mt-1 h-9 w-12 pl-2 text-2xl ml-14 pt-1 rounded-full text-sky-600 hover:bg-slate-200 active:"></i>
      {bookmark? 
      (<i onClick={()=> setBookmark(false)} class="ri-bookmark-fill bg-slate-00 mt-1 h-9 w-12 pl-2 text-2xl ml-14 pt-1 rounded-full text-sky-500 hover:bg-slate-200 active:"></i>) : 
      (<i onClick={()=>setBookmark(true)} class="ri-bookmark-line bg-slate-00 mt-1 h-9 w-12 pl-2 text-2xl ml-14 pt-1 rounded-full text-sky-600 hover:bg-slate-200 active:"></i>)}
      <i class="ri-share-forward-line bg-slate-00 mt-1 h-9 w-12 pl-2 text-2xl ml-14 pt-1 rounded-full text-green-600 hover:bg-slate-200 active:"></i>
      <Button  classname='absolute bg-slate-800  rounded-l-full right-24 mt-1  hover:bg-slate-300 hover:text-black  '>
          Stats
        </Button>
        <Button onClick={handleVoteValue} classname='absolute bg-slate-800  rounded-r-full  right-5 mt-1 hover:bg-slate-300 hover:text-black  '>
          Vote
        </Button>
      </div>
  </div>

 </div>
  )
}

export default Posts




