import React from 'react';

const ChatMessage = ({ sender, message }) => {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
        {message}
        </div>
        <div>
     \
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
