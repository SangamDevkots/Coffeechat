import React from 'react';

const ActiveConversation = ({ name }) => {
  return (
    <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
      <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
        {name.charAt(0)}
      </div>
      <div className="ml-2 text-sm font-semibold">{name}</div>
    </button>
  );
};

export default ActiveConversation;
