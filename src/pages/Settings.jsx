import React, { useRef, useState } from 'react'
import MainBar from '../components/MainBar.jsx'
import UserProfile from '../components/UserProfile.jsx'
import './HP.css'
import InputBox from '../components/InputBox.jsx'
import Trending from '../components/Trending.jsx'
import { useDispatch } from 'react-redux'



const Settings = () => {
    const [inputValue, setInputValue] = useState('')
    const [inputV2, setInputV2] = useState('')

    
    const dispatch = useDispatch()
  
  
  
  
    const inputRef = useRef(null)
    const inputRef2 = useRef(null)
  
    const handleSearch = ()=>{
      inputRef.current.focus();
      inputRef2.current.focus()
    }
  
    const handleInput = ()=>{
      setInputValue(event.target.value)
    }
  
    const handleInput2 = ()=>{
  
        setInputV2(event.target.value)
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
      <div className='bg-slate-00 border-b border-gray-400 fixed w-5/12  h-10 flex   items-center  '>
      <div className='text-xl ml-3'>Settings</div>
      </div>
      
  
      {/* fake head*/}
      <div className=' h-10 bg-red-00' >
  
      </div>

      <div className='bg-orange-00 mt-2 relative   '>
      <div onClick={handleSearch} className='bg-blue-00 w-7 absolute top-1 right-20'>
      < i  onClick={handleSearch} class="ri-search-2-line text-2xl text-gray-400"></i>
      </div>
      <InputBox   value={inputV2}   onChange={handleInput2 } ref={inputRef2} placeholder="   Search..." classname=' w-4/5  h-10 ml-16 text-xl border border-gray-400 rounded-full text-gray-500 focus:outline-none' />
      </div>
      <div className='bg-red-00 h-12 flex relative hover:bg-gray-50 hover:border-r-4 hover:border-slate-500 '>
       <div className='bg-blue-00 absolute text-lg top-2 left-2'>Account</div>
       <div className='bg-green-00 text-gray-500 absolute right-2 top-2'> < i class="ri-arrow-right-s-line text-xl"></i> 
       </div>
      </div>

      <div className='bg-red-00 h-12 flex relative hover:bg-gray-50 hover:border-r-4 hover:border-slate-500 '>
       <div className='bg-blue-00 absolute text-lg top-2 left-2'>Monetization</div>
       <div className='bg-green-00 text-gray-500 absolute right-2 top-2'> < i class="ri-arrow-right-s-line text-xl"></i> 
       </div>
      </div>

      <div className='bg-red-00 h-12 flex relative hover:bg-gray-50 hover:border-r-4 hover:border-slate-500 '>
       <div className='bg-blue-00 absolute text-lg top-2 left-2'>Security and account access</div>
       <div className='bg-green-00 text-gray-500 absolute right-2 top-2'> < i class="ri-arrow-right-s-line text-xl"></i> 
       </div>
      </div>
      <div className='bg-red-00 h-12 flex relative hover:bg-gray-50 hover:border-r-4 hover:border-slate-500 '>
       <div className='bg-blue-00 absolute text-lg top-2 left-2'>Privacy and safety</div>
       <div className='bg-green-00 text-gray-500 absolute right-2 top-2'> < i class="ri-arrow-right-s-line text-xl"></i> 
       </div>
      </div>
      <div className='bg-red-00 h-12 flex relative hover:bg-gray-50 hover:border-r-4 hover:border-slate-500 '>
       <div className='bg-blue-00 absolute text-lg top-2 left-2'>Notificaions</div>
       <div className='bg-green-00 text-gray-500 absolute right-2 top-2'> < i class="ri-arrow-right-s-line text-xl"></i> 
       </div>
      </div>
      <div className='bg-red-00 h-12 flex relative hover:bg-gray-50 hover:border-r-4 hover:border-slate-500 '>
       <div className='bg-blue-00 absolute text-lg top-2 left-2'>Accessbility, languages and display</div>
       <div className='bg-green-00 text-gray-500 absolute right-2 top-2'> < i class="ri-arrow-right-s-line text-xl"></i> 
       </div>
      </div>
      <div className='bg-red-00 h-12 flex relative hover:bg-gray-50 hover:border-r-4 hover:border-slate-500 '>
       <div className='bg-blue-00 absolute text-lg top-2 left-2'>Addtional resources</div>
       <div className='bg-green-00 text-gray-500 absolute right-2 top-2'> < i class="ri-arrow-right-s-line text-xl"></i> 
       </div>
      </div>
      <div className='bg-red-00 h-12 flex relative hover:bg-gray-50 hover:border-r-4 hover:border-slate-500 '>
       <div className='bg-blue-00 absolute text-lg top-2 left-2'>Help</div>
       <div className='bg-green-00 text-gray-500 absolute right-2 top-2'> < i class="ri-arrow-right-s-line text-xl"></i> 
       </div>
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

export default Settings
