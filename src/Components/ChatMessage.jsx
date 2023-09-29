import React from 'react';

const ChatMessage = ({ sender, message,  photo , timestamp }) => {
  return (
    <div className="chat-message flex items-start mb-4">
      <img
        src={photo} 
        alt={`${sender}'s photo`}
        className="w-8 h-8 rounded-full mr-2"
      />
      <div>
        <p className="font-semibold">{sender}</p>
        <div className="bg-blue-200 p-2 rounded-lg shadow">
          <p>{message}</p>
        </div>
        <p className="text-xs text-gray-500">{timestamp}</p> 
      </div>
    </div>
  );
};

export default ChatMessage;

