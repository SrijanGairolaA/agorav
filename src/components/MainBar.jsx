import React, { useState } from 'react'
import './MainBar.css'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { logout } from '../store/authSlice'
import { faBell, faBookmark, faComment, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux'
const MainBar = () => {

   const [moreOp, setMoreOp] = useState(false)

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const handleMoreValues = ()=>{
    setMoreOp(!moreOp)
   }

   const logoutHandler = ()=>{
    dispatch(logout())
    navigate('/login')
   }


  return (
   <div className='bg-white py-12 px-14   h-4/5 w-72 mt- ml-9 rounded-sm border border-gray-400 shadow-xl relative '>
  
<Link to="/home">
<Button className=' px-6 py-1 rounded-3xl  flex hover:bg-slate-200 '>
<FontAwesomeIcon icon={faHouse} className=' text-2xl mt-1 '/>
<div className='text-2xl ml-2'>
  Home
</div>
</Button>
</Link>


<Button className=' mt-2 px-6 py-1 rounded-3xl  flex hover:bg-slate-200'>
<FontAwesomeIcon icon={faSearch} className=' text-2xl mt-1 '/>
<div className='text-2xl ml-3'>
  Search
</div>
</Button>


<Link to="/notifications">
<Button className=' mt-2 px-6 py-1  rounded-3xl  flex hover:bg-slate-200'>
<FontAwesomeIcon icon={faBell} className=' text-2xl mt-1 -ml-0 '/>
<div className='text-2xl ml-3'>
  Notifications
</div>
</Button>
</Link>

<Link to="/messages">
<Button className=' mt-2 px-6 py-1  rounded-3xl  flex hover:bg-slate-200'>
<FontAwesomeIcon icon={faEnvelope} className=' text-2xl mt-1 -ml-1 '/>
<div className='text-2xl ml-3'>
  Messages
</div>
</Button>
</Link>


<Button className=' mt-2 px-6 py-1  rounded-3xl  flex hover:bg-slate-200'>
<FontAwesomeIcon icon={faBookmark} className=' text-2xl mt-1 ml-'/>
<div className='text-2xl ml-3'>
  Bookmarks
</div>
</Button>



<Button onClick={handleMoreValues}  className=' mt-2 px-6 py-1  rounded-3xl  flex hover:bg-slate-200'>
<FontAwesomeIcon icon={faBars} className=' text-2xl mt-1 '/>
<div className='text-2xl ml-2'>
  More
</div>
</Button>

{moreOp? (<div className='bg-white border border-gray-400 rounded-lg h-40  w-32 absolute bottom-10 shadow-xl -right-3'>
  <Link to="/subscription">
<div className='mt-1 ml-1  hover:bg-gray-100 text-lg'>Subscriptions</div>
</Link>
<Link to="/profile">
<div className=' ml-1 hover:bg-gray-100 text-lg'>Profile</div>
</Link>
<Link to="/aboutus">
<div className='ml-1 hover:bg-gray-100 text-lg'>About us</div>
</Link>
<Link to="/settings">
<div className='ml-1 hover:bg-gray-100 text-lg'>Settings</div>
</Link>
<Button onClick={logoutHandler} classname=' bg-slate-800 text-sm  rounded-full mt-1 ml-5 hover:bg-slate-400'>Logout</Button>
</div>) : (null)}


      



   </div>



  )
}

export default MainBar
