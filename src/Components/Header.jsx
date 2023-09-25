import React from 'react';
import Sidebar from './Sidebar';
import MainChatArea from './Chatbox';

const Header = () => {
  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <Sidebar />
        <MainChatArea />
      </div>
    </div>
  );
};

export default Header;
