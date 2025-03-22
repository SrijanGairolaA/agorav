import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate} from "react-router-dom"
import Button from './Button'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'


const SignUp = () => {

    
    const [showPassword, setShowPassword] = useState(false)

    const navigate  = useNavigate()
    const dispatch = useDispatch()
    
    const handleShowPassword = () =>{
        setShowPassword(!showPassword)
    }

    const {
        register,
        handleSubmit,
        watch,
      } = useForm()
    
      const signin = async(data) =>{
              console.log(data)
              dispatch(login(data))
              navigate('/home')
      
            }
    
      console.log(watch("example"))
  return (
    <div className='bg-slate-400 absolute   '>
     
     <div className='bg-gradient-to-r from-white to-slate-800 h-screen w-screen'></div>
     <div className='absolute  h-4/5 w-2/5 bg-white top-16 left-96 ml-16 rounded-xl shadow-xl flex'>
     <div className='bg-gray-00 h-full w-3/5'>
     <form onSubmit={handleSubmit(signin)}>
        <div className='bg-lime-00 text-3xl w-40 ml-24 text-center mt-10'>Sign Up</div>
        <div className='bg-slate-00 mt-10 w-72 ml-10'>
   <label className='text-xl'>Username</label>
       <br />
       <input
         {...register('username', { required: "Username is required" })}
        type="text" placeholder='username' className='border-b-2 border-gray-400 w-72 h-10 focus:outline-none' />
   </div>    
    <div className='bg-slate-00 mt-10 w-72 ml-10'>
    <label className='text-xl'>Email</label>
        <br />
        <input
         {...register('email', {
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
            },
        })}
         type="text" placeholder='email' className='border-b-2 border-gray-400 w-72 h-10 focus:outline-none' />
    </div>
    <div className='bg-slate-00 mt-10 w-72 ml-10 relative'>
    <label className='text-xl'>Password</label>
        <br />
        <input
        {...register('password', { required: "Password is required" })}
         type={showPassword? 'text' : 'password'} placeholder='password' className='border-b-2 w-72 h-10 border-gray-400 focus:outline-none' />
        {showPassword? (
        <i class="ri-eye-line w-510 text-2xl mt-1 absolute right-0 hover:bg-gray-300 hover:rounded-full "  onClick={handleShowPassword}></i>
    ):(
        <i class="ri-eye-off-line  w-510 text-2xl mt-1 absolute right-0 hover:bg-gray-300 hover:rounded-full " onClick={handleShowPassword}></i>
    )}
    </div>
     <div className='text-slate-400 w-40 mt-2 mr-3 absolute right-60 hover:underline hover:text-blue-600'>
        Forget password?
     </div>
     <div className='absolute right-72 mt-14  '>
        <Button  classname='bg-slate-900 w-72 rounded-full hover:bg-indigo-200'>
            Sign up
        </Button>
     </div>
     </form>
    
    <div className='bg-slate-00 flex absolute bottom-1 left-24 mb-4 ml-1'>
        <div>Existed user?</div>
        <div className='text-gray-400 hover:text-blue-500 hover:underline'> SIGN IN</div>
    </div>
   
     </div>
     <div className='bg-slate-800 text-white h-full w-2/5 flex justify-center rounded-r-xl '>
     <div className='text-center text-xl'>
        {/* <div><img src={Logo} className='h-20 ml-14 mt-8' /></div> */}
        <div className='bg-red-00 mt-44 text-5xl'>Welcome</div>
        <div className='bg-blue-00 mt-2 text-3xl'>to</div>
        <div className='bg-green-00 text-4xl'>Agora Vote</div>
     </div>
     </div>


     </div>
    </div>
  )
   
    
}

export default SignUp
