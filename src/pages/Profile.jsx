import React, { useRef, useState } from 'react'
import MainBar from '../components/MainBar.jsx'
import UserProfile from '../components/UserProfile.jsx'
import './HP.css'
import PP from '../assets/Screenshot (108).png'
import CV from "../assets/coverimage.jpg"
import InputBox from '../components/InputBox.jsx'
import Trending from '../components/Trending.jsx'
import SO from "../assets/soon.jpg"
import { useSelector } from 'react-redux'
import Button from '../components/Button.jsx'



const Profile = () => {

  const [inputValue, setInputValue] = useState('')
  const username = useSelector((state)=>state.auth.username)

  const inputRef = useRef(null)

  const handleSearch = ()=>{
    inputRef.current.focus();
  }

  const handleInput = ()=>{
    setInputValue(event.target.value)
  }

  return (
   <>
   <div className='flex'>
    <div className='bg-stone-200 border-r border-gray-400 h-screen w-3/12 fixed'>
    <div className='bg-amber-0 h-2/6 '><div className='fixed h-2/6 top-8 left-9'><UserProfile/></div></div>
    <div className='bg-amber-0 h-4/6'><div className='fixed h-4/6 '><MainBar/></div></div>
    </div>

    <div className='bg-slate-00 h-screen w-3/12'></div> {/* fake sidebar div */}

    <div className='bg-stone-00  w-5/12 '>
    <div className='bg-slate-50 fixed w-5/12 border-b border-gray-400 h-32'>
      <img src={CV} className='h-32 w-full border-b border-gray-400' />
      <div className='bg-red-00 absolute h-14 w-14 top-24 left-5 ' >
        <img src={PP} className='h-14 w-14 border border-gray-400' />
      </div>
      <div className='bg-white h-6'>
      </div>
      <div className='bg-white h-20 '>
        <div className='bg-gray-00 text-xl w-32 absolute top-40 left-5'>
        {username? username: "User"}
        </div>
        <div className='bg-white text-gray-500 w-32 absolute top-48 left-5'>
        {username? username: "user123"}@446
        </div>
        <div className='bg-gray-00  w-32 absolute top-44 right-0'>
          <Button classname='bg-slate-900 border border-gray-400 rounded-full hover:bg-slate-600'>
            Edit profile
          </Button>
        </div>

      </div>
      <div className='bg-white border-b border-gray-400 h-10 flex'>
        <div className='bg-red-00 w-2/6 text-center text-xl hover:border-b-4 hover:border-slate-500'>posts</div>
        <div  className='bg-red-00 w-2/6 text-center text-xl hover:border-b-4 hover:border-slate-500'>comments</div>
        <div  className='bg-red-00 w-2/6 text-center text-xl hover:border-b-4 hover:border-slate-500'>saved</div>
      </div>
      <div className='bg-red-00 h-screen'>
        <img src={SO} className='h-96 absolute top-72 left-8 ' />
      </div>
    </div>

    {/* fake head*/}
    <div className=' h-32 bg-red-00' >

    </div>
    
    
   

    
    </div>

  <div className='bg-stone-200 h-screen w-4/12 border-l border-gray-400 fixed right-0'>
  <div className='bg-gray-00 h-14 border-b border-gray-400'>
  <div className='bg-orange-00 absolute w-full top-2'>
    <div onClick={handleSearch} className='bg-blue-00 w-7 absolute right-14 top-1'>
    < i  onClick={handleSearch} class="ri-search-2-line text-2xl text-gray-400"></i></div>
    <InputBox   value={inputValue}   onChange={handleInput} ref={inputRef} placeholder="   Search..." classname='w-4/5 h-10 ml-14 text-xl border border-gray-400 rounded-full text-gray-500 focus:outline-none' /></div>
  </div>
  <div className="bg-white rounded-lg border border-gray-400 absolute top-28 left-20 h-3/5 w-4/6">
   <div className='bg-gray-00 border-b border-gray-400 h-14 text-2xl'>
    <div className='bg-sky-00 w-60 absolute top-3 left-3'>Whats Trending!</div>
   </div>
   <div className='bg-blue-00 h-20'>
   <Trending place={"India"} trend={"Election"} postNUm={1045}/>
   </div>
   <div className='bg-green-00 h-20'>
    <Trending place={"America"} trend={"tarrifs"} postNUm={1005}/>
   </div>
   <div className='bg-violet-00 h-20'>
   <Trending place={"India"} trend={"primeminster"} postNUm={7195}/>
   </div>
   <div className='bg-cyan-00 h-20'>
   <Trending place={"India"} trend={"cricket"} postNUm={11245}/>
   </div>
  </div>

  
  
  </div>


  




   </div>
   
   
   
   </>

  )
}

export default Profile