import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs.jsx'
import Layout from './Layout.jsx'
import Login from './components/Login.jsx'
import Layout2 from './Layout2.jsx'
import SignUp from './components/SignUp.jsx'
import HomePage from './pages/HomePage.jsx'
import Notifications from './pages/Notifications.jsx'
import Messages from './pages/Messages.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import Profile from './pages/Profile.jsx'
import Settings from './pages/Settings.jsx'
import Subscription from './pages/Subscription.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path='/' element={<Layout/>}>
     <Route index element={<SignUp/>}/>
     <Route path='notifications' element={<Notifications/>}/>
     <Route path='messages' element={<Messages/>}/>
     <Route path='profile' element={<Profile/>}/>
     <Route path='settings' element={<Settings/>}/>
     <Route path='home' element={<HomePage/>}/>
     <Route path='login' element={<Login/>}/>
     <Route path='aboutus' element={<AboutUs/>}/>
     <Route path='subscription' element={<Subscription/>}/>
    </Route>
   </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)


{/*
  
   <Route path='/' element={<Layout/>}>
     <Route index element={<HomePage/>}/>
     <Route path='notifications' element={<Notifications/>}/>
     <Route path='messages' element={<Messages/>}/>
     <Route path='profile' element={<Profile/>}/>
     <Route path='settings' element={<Settings/>}/>
     <Route path='signup' element={<SignUp/>}/>
     <Route path='login' element={<Login/>}/>
     <Route path='aboutus' element={<AboutUs/>}/>
     <Route path='subscription' element={<Subscription/>}/>
    </Route>
  
  
  */}