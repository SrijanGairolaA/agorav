import React from 'react'
import Logo from '../assets/Screenshot (164).png'
const AboutUs = () => {
  return (
    <>
    <div className='bg-slate-800   flex items-center fixed h-20 w-full shadow-xl'>
      <div className=''>
        <img src={Logo} className=' h-14 rounded-xl ml-2' />
      </div>
      <div className='text-white  text-4xl ml-2'>
        AGORA VOTE
      </div>
    </div>

    {/*  fake header */}
    <div className='h-20 w-full bg-slate-800'> 
      f
    </div>

    <div className='bg-slate-00'>
      <div className='text-center h-10 text-2xl mt-1 '>ABOUT US</div>
      <div className='bg-red-00 w-3/5 text-lg ml-72'>
      Welcome to Agora Vote, the innovative voting platform designed to give every voice the opportunity to be heard. Our mission is to create a transparent, engaging, and insightful environment where users can participate in voting on various topics, share their opinions, and see how their demographics shape the results.
      <br />

At Agora Vote, we believe that democracy goes beyond just casting votes. We aim to provide users with the ability to explore the statistics behind each vote, understand how different groups contribute to the outcome, and see the diversity of opinions in action
      </div>
      <div className='bg-red-00 w-3/5 text-lg ml-72'>
      <br />
      <h1 className='text-2xl'>What Makes Us Unique?</h1>
      <br />
      <li>Diverse Polls: Whether you’re passionate about politics, pop culture, or social issues, we offer a wide range of polls that allow you to participate and see how people from various backgrounds feel about a topic.</li>
      <li>Demographic Insights: Our platform empowers you to compare your vote with others based on shared demographic information. Want to see how your generation, gender, or nationality views a certain issue? We’ve got you covered.</li>
      <li>Engagement with Data: We believe in the value of knowing not just what people think, but who they are and how that influences their perspectives. By sharing demo data, we provide a deeper layer of understanding to every poll you take.</li>
      <li>User-Friendly Experience: Participating in polls and viewing demo data is easy and intuitive. We aim to provide a smooth, transparent, and enjoyable experience every time you log in.</li>
      <br />
      <h1 className='text-2xl'>Why Choose Us?</h1>
      <br />
      <p>At Agora vote, we’re building a community that thrives on curiosity, learning, and understanding. Whether you're here to engage with the polls, explore trends based on demographic data, or just connect with like-minded people, we ensure that your experience is both fun and insightful. Our platform respects your privacy and the data you choose to share while providing valuable insights that go beyond numbers.</p>
      <br />
      <h1 className='text-2xl'>How It Works</h1>
      <br />
      <li>Create an Account: Sign up and provide your demographic details (age, gender, nationality, etc.).</li>
      <li>Vote and Participate: Engage with various polls and express your opinions on the topics that matter to you.</li>
      <li>Compare and Explore: See how your views compare with others from different walks of life. Dive deeper into demographic trends and discover the diversity of thought in our global community.</li>
      <br />
      <h1 className='text-2xl'>Join Us Today</h1>
      <br />
      <p>Whether you're here to contribute your thoughts, discover trends, or simply learn from others,  Agora Vote is the place where data meets democracy. We’re constantly evolving, adding new features, and improving your experience, all in the spirit of openness and community.
         <br />
Thank you for being a part of  Agora Vote—we're thrilled to have you on this journey with us!</p>
     </div>
    </div>
    <br />
    <div className='h-72 bg-zinc-800 text-white flex justify-evenly'>
      <div className='mt-2 '> 
      <div className='text-xl'>Quick Links</div>
      
      <div className='mt-4 text-gray-400 hover:underline'>Home</div>
      <div className='text-gray-400 mt-1 hover:underline'>About Us</div>
      <div className='text-gray-400 mt-1 hover:underline'>How It Works</div>
      <div className='text-gray-400 mt-1 hover:underline'>Privacy Policy</div>
      <div className='text-gray-400 mt-1 hover:underline'>Terms & Conditions</div>
      <div className='text-gray-400 mt-1 hover:underline'>Contact Us</div>
      <div className='text-gray-400 mt-1 hover:underline'>FAQs</div>
      </div>
      <div className='mt-2'>
        <div className='text-xl'>Contact Information</div>
        <div className='mt-4 text-gray-400'>Email: <span className='text-blue-600 hover:underline'>agoraV@gmail.com</span></div>
        <div className='text-gray-400 mt-1'> Phone: <span className='text-blue-600 hover:underline'>+1 (123) 456-7890</span></div>
       
      </div>
      <div className='mt-2'>
        <div className='text-xl '>Legal</div>
        <div className='mt-4 text-gray-400 hover:underline'>Privacy Policy</div>
        <div className='text-gray-400 mt-1 hover:underline'>Cookie Policy</div>
        <div className='text-gray-400 mt-1 hover:underline'>Terms & Conditions</div>

      </div>
      <div className='mt-2'>
      <div className='text-xl'>Follow Us </div>
        <div className='flex'>
      <div className='mt-4'><i class="ri-instagram-line text-pink-500 bg-white text-xl rounded-sm hover:text-white hover:bg-pink-500"></i></div>
      <div className='mt-4 ml-4'><i class="ri-twitter-x-line bg-black rounded-sm text-xl  hover:text-black hover:bg-white"></i></div>
      <div className='mt-4 ml-4'><i class="ri-facebook-box-line text-xl text-blue-600 bg-white rounded-sm hover:text-white hover:bg-blue-600"></i></div>
      <div className='mt-4 ml-4'><i class="ri-youtube-fill text-red-600 bg-white text-xl rounded-sm hover:text-white hover:bg-red-600"></i></div>
      </div>
      </div>
      <div className='mt-2'>
        <div className='text-xl'>Copyright Information</div>
        <div className='text-gray-400 mt-4'>© 2025 Agora Vote. All rights reserved.</div>
      </div>
    </div>
    </>
  )
}

export default AboutUs
//Copyright Information:
//© [Year] [Your App Name]. All rights reserved.