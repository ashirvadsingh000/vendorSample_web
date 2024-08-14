import React from 'react'

const Submit = () => {
  return (
    <div className=' flex flex-col justify-center align-middle h-screen '>
       <div className="rounded-lg  shadow-xl shadow-black text-2xl font-poppins text-white font-semibold w-fit bg-[#46c3d6] self-center p-16">Your information has been successfully updated</div>
       <button className=' rounded-lg mt-7 p-5 shadow-xl shadow-black text-xl text-white font-semibold w-fit bg-[#40aebe] self-center'> View Dashboard</button>
    </div>
  )
}

export default Submit;
