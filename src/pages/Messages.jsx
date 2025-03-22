import React, { useRef, useState } from 'react'
import MainBar from '../components/MainBar.jsx'
import UserProfile from '../components/UserProfile.jsx'
import './HP.css'
import PP1 from '../assets/pp1.webp'
import PP2 from '../assets/pp2.jpg'
import PP3 from '../assets/pp3.jpg'
import PP4 from '../assets/pp4.jpg'
import PP5 from '../assets/pp5.jpg'
import InputBox from '../components/InputBox.jsx'
import Trending from '../components/Trending.jsx'
import Mssg from '../components/Mssg.jsx'

const Messages = () => {
    const [inputValue, setInputValue] = useState('')

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
  
      <div className='bg-stone-200  w-5/12 '>
      <div className='bg-slate-50 fixed w-5/12 border-b border-gray-400 h-10 flex justify-center items-center  '>
      <div className='text-xl'>Messages</div>
      </div>
  
      {/* fake head*/}
      <div className=' h-10 bg-red-00' >
      
      </div>

      
      <Mssg pic={PP1} name={"Linda"} mssg={"Hey! I just tried that new coffee shop downtown, and it w"} time={"4hrs"}/>
      <Mssg pic={PP2} name={"Ryan"} mssg={"Are you still up? I need your opinion on something, haha"} time={"11:02pm"}/>
      <Mssg pic={PP3} name={"Jhon"} mssg={"You wouldn't believe the crazy thing that happened "} time={"4:50pm"}/>
      <Mssg pic={PP4} name={"Julie"} mssg={"I found that book you were talking abou"} time={"Yesterday"}/>
      <Mssg pic={PP5} name={"Mariana"} mssg={"Do you have any plans this weekend? Thinking of"} time={"Monday"}/>
      
      
      </div>
  
    <div className='bg-stone-200 h-screen w-4/12 border-l border-gray-400 fixed right-0'>
    <div className='bg-gray-00 h-14 border-b border-gray-400'>
    <div className='bg-orange-00 absolute w-full top-2'>
      <div onClick={handleSearch} className='bg-blue-00 w-7 absolute right-14 top-1'>
      < i  onClick={handleSearch} class="ri-search-2-line text-2xl text-gray-400"></i></div>
      <InputBox onChange={handleInput} ref={inputRef} placeholder="   Search..." classname='w-4/5 h-10 ml-14 text-xl border border-gray-400 rounded-full text-gray-500 focus:outline-none' /></div>
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

export default Messages
