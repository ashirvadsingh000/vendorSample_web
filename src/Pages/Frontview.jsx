import React from 'react'
import lint from '../assets/lint.png'
import logo from '../assets/logo.svg'
import { FcAdvance } from "react-icons/fc";
import menu from '../assets/menu.png'
const Frontview = () => {
  return (
    <div className=' bg-white  px-6 overflow-hidden h-screen  '>
    <div className=" flex justify-between ">
      <img src={lint} className='h-32 ml-4' alt="" />
      <img src={menu} className='h-24
       mr-4 mt-4
       ' alt="" />
    </div>
       <div className=" font-poppins font-semibold text-6xl  text-gray-700  mt-4 ml-20 underline-offset-4 underline  
       "> The Vendors <span className=' text-[#050505]'>monitoring</span> </div>
      <div className=" flex justify-between">
        <div className=" mt-20 flex flex-col space-y-3 ">
          <h1 className=' text-wrap text-5xl font-poppins font-bold text-[#57ccde]  '>Adraksh Technologies</h1>
          <p className='text-xl font-poppins font-medium ml-5 '>
<address>
  Address: AftF co-working Noida Expressway, Sector 142, Noida, UP
<br />
Phone number:+918368425185
gmail : info@adrakshtechnologies.com
</address>



          </p>
          <a className='text-xl ml-5 font-semibold text-red-500' href="https://adrakshtechnologies.com/"> <FcAdvance className='text-red-500 text-4xl'/> adrakshtechnologies.com</a>
          <p className='text-2xl  ml-5 text-gray-500'>version 1.00</p>
          <p className='text-2xl  ml-5 text-gray-500 mt-3'>28/07/2024</p>
        </div>
        <div className=" mt-[-20px]">
          <img src={logo}  className=" w-[45rem]" alt="" />
        </div>
      </div>
      
      
      
      
      
      
      
      
      
    </div>
  )
}

export default Frontview;
