import React from 'react';
import ActiveConversation from './ActiveConversation';

const Sidebar = () => {
  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
          <img src="https://png.pngtree.com/png-clipart/20190925/ourmid/pngtree-flying-cup-of-coffee-with-splash-and-coffee-beans-png-background-png-image_1742479.jpg" alt="" />
        </div>
        <div className="ml-2 font-bold text-2xl">coffee chat</div>
      </div>
      <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
        <div className="h-20 w-20 rounded-full border overflow-hidden">
          <img
            src="https://images.hellomagazine.com/horizon/square/2a1b6ecec4ae-cristiano-ronaldo-toned-torso-sauna-selfie-t.jpg"
            alt="Avatar"
            className="h-full w-full"
          />
        </div>
        <div className="text-sm font-semibold mt-2">Cristiano Ronaldo</div>
        <div className="text-xs text-gray-500">Football player</div>
        <div className="flex flex-row items-center mt-3">
          <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
            <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
          </div>
          <div className="leading-none ml-1 text-xs">Active</div>
        </div>      </div>
      
      <div className="flex flex-col mt-8">
     
        <div className="flex flex-row items-center justify-between text-xs">
          <span className="font-bold">Text to strangers (100 online)</span>
     
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">4</span>
        </div>
        <div className="flex flex-row items-center justify-between text-xs mt-6">
          <span className="font-bold">Active Conversations</span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">7</span>
        </div>
        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
          {/* Active Conversations list */}
          <ActiveConversation name="Yogesh Kshetri" />
          {/* Add more active conversations here */}
        </div>
        <div className="flex flex-row items-center justify-between text-xs mt-6">
          <span className="font-bold">Suggested accounts</span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">7</span>
        </div>
        <div className="flex flex-col space-y-1 mt-4 -mx-2">
          {/* Archived Conversations list */}
          <ActiveConversation name="Sangam Devkota "    />
          {/* Add more archived conversations here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
