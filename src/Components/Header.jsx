import React from 'react';
import Sidebar from './Sidebar';
import MainChatArea from './Chatbox';
import Info from './Info';
const Header = () => {
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        
        <Sidebar />
        <MainChatArea className="flex-grow md:flex-grow-0" />
        <Info />
   
      </div>
    </div>
  );
};

export default Header;
