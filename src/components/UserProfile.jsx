import React from 'react'
import PP from '../assets/Screenshot (108).png'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faEarthAsia, faPen } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'


const UserProfile = () => {

  const username = useSelector((state)=>state.auth.username)
  return (
   
      <div className='bg-white w-80 h-4/6    rounded-sm border border-gray-400 shadow-xl   '>
        <div className='bg-slate-800 h-2/6 rounded-t-sm  relative z-10'>
      
      <div className=' bg-slate-200 w-16 ml-4 relative'>
        <img src={PP} className='h-16 w-16 border border-gray-400 absolute top-4'/>
        <div className='absolute bg-slate-00 top-16 left-12'>< i class="ri-add-circle-line text-xl bg-blue-600 rounded-full text-white"></i></div>
      </div>
          
        </div>
       
        <div className='bg-cyan-00 mt-0 rounded-b-sm border-t border-gray-400 h-4/6 flex relative '>
        <div className='bg-orange-00 text-gray-600 w-34 h-16 mt-9 ml-4 py-1'>
          <b>{username? username: "User"}</b>
          <br />
          India 
          <FontAwesomeIcon icon={faEarthAsia} className='ml-1'/>
        </div>
       <div className='bg-orange-00  py-2  mt-9 ml-32 h-14'>
        <Button classname='h-9 w-10 rounded-lg bg-slate-800 active:text-slate-800 active:bg-white'>
          <FontAwesomeIcon icon={faPen} className='-ml-2'/>

        </Button>
       </div>
        </div>
       
    
    
    </div>
   
  )
}

export default UserProfile
