import React from 'react'
import AuthContext from '../AuthContext/AuthContext';
import ActiveConversation from './ActiveConversation';
import { BsToggleOn } from 'react-icons/bs';
import { useAuth } from '../AuthContext/AuthContext';
import SuggestedAccount from './SuggestedAccount'
const Info = () => {
  return (
    <div className="bg-white w-64 sm:w-80 md:w-96 py-4 px-2 sm:px-4 flex-shrink-0">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="bg-indigo-100 text-indigo-700 rounded-full h-10 w-10 flex items-center justify-center">
         
        </div>
        <div className="font-bold text-lg sm:text-2xl">Chat info</div>
      </div>
      <div className="sm:hidden">
        <button className="text-indigo-700 focus:outline-none p-2">
          <BsToggleOn size={24} />
        </button>
      </div>
    </div>

    <div className="hidden sm:block mt-4">
      <div className="bg-indigo-100 border border-gray-200 rounded-lg py-4 px-2 sm:py-6 sm:px-4 text-center">
        <div className="bg-gray-200 rounded-full h-20 w-20 mx-auto">
          {/* <img src={user.photoURL} alt="Avatar" className="h-full w-full rounded-full" /> */}
        </div>
      <div className="text-sm font-semibold mt-2">General chat</div>
        <div className="text-xs text-gray-500">Coffee chat community</div>
        <div className="flex items-center justify-center mt-2">
     
       
         
        </div>
      </div>
    </div>

    <div className="mt-4 sm:mt-8">
     
     
  
      <div className="">
      <input
            type="search"
            placeholder="Search old conversation..."
            className="border border-gray-300 px-3 py-3 rounded-full focus:outline-none focus:border-indigo-500 w-full"
          />


      </div>
      <div className="mt-4">
        <div className="text-xs font-bold text-gray-600 mb-2">Suggested accounts to message</div>
        <div className="space-y-1">
 
        </div>
      </div>
    </div>
  </div>
  )
}

export default Info
