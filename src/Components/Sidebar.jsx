import React, { useContext } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import ActiveConversation from './ActiveConversation';
import { BsToggleOn } from 'react-icons/bs';
import { useAuth } from '../AuthContext/AuthContext';
import SuggestedAccount from './SuggestedAccount';

const dynamicName = "Dynamic Name"; 
const Sidebar = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div className="bg-white w-64 sm:w-80 md:w-96 py-4 px-2 sm:px-4 flex-shrink-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-indigo-100 text-indigo-700 rounded-full h-10 w-10 flex items-center justify-center">
            <img
              src="https://png.pngtree.com/png-clipart/20190925/ourmid/pngtree-flying-cup-of-coffee-with-splash-and-coffee-beans-png-background-png-image_1742479.jpg"
              alt=""
              className="h-8 w-8 rounded-full"
            />
          </div>
          <div className="font-bold text-lg sm:text-2xl">coffeechat</div>
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
          {/* <div className="text-sm font-semibold mt-2">{user.displayName}</div> */}
          <div className="text-xs text-gray-500">Football player</div>
          <div className="flex items-center justify-center mt-2">
            <div className="bg-indigo-500 rounded-full h-4 w-8">
              <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-8">
        <div className="text-xs font-bold text-gray-600 mb-2">Text to strangers (100 online)</div>
        <div className="">
          <input
            type="search"
            placeholder="Search Active Conversations"
            className="border border-gray-300 px-3 py-3 rounded-full focus:outline-none focus:border-indigo-500 w-full"
          />
        </div>
        <div className="mt-4">
          <div className="text-xs font-bold text-gray-600 mb-2">Active accounts</div>
          <div className="h-60 overflow-y-auto"> {/* Set the desired height and make it scrollable */}
            <div className="space-y-1">
              <SuggestedAccount />
              {/* Add more SuggestedAccount components if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
