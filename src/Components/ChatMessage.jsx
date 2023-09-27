import React from 'react';

const ChatMessage = ({ sender, message  , photo }) => {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      {sender}
      <div className="flex flex-row items-center">
        <div className="relative ml-3 text-sm   bg-blue-400 text-gray-100 py-2 px-4 shadow rounded-xl">
        {message}
{photo}
        </div>
        <div>
     
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
