

import React, { useState } from 'react';
import login from '../assets/login.svg'
const LoginPage = () => {

  return (
    <div className="flex items-center justify-center bg-white h-screen  overflow-hidden">
      <div className="w-full max-w-3xl p-8 bg-white shadow-lg shadow-gray-500 rounded-lg flex overflow-hidden" >
        <form >
          <div className="mb-4">
            <label  className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Vendor ID</label>
            <input
              type="text"
              id="email"
             
            
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              id="email"
             
            
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              
            />
          </div>
          <div className="mb-4">
            <label  className="block text-sm font-medium text-gray-700">Contact number</label>
            <input
              type="text"
              id="email"
             
            
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adress</label>
            <input
              type="text"
              id="email"
             
             
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              
            />
          </div>
          <div className="mb-6 flex text-sm font-medium text-gray-700">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mr-4">Gender</label>
          <input type="radio" name="hi" id=""   className='mr-[2px] rounded-full' /> <span className='mr-2' >male</span>
          <input type="radio" name="hi" id=""   className='mr-[2px] rounded-full'/> <span className='mr-2'>female</span>
          <input type="radio" name="hi" id=""   className='mr-[2px] rounded-full'/> <span className='mr-2'>transgender</span>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#57ccde] text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
        <img src={login} alt="" className=' h-[500px]'/>
      
      </div>
  
    </div>
  );
};

export default LoginPage;
