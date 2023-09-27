import React, { useState } from 'react';

const Input = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text.trim() !== '') {
      onSendMessage({ sender: 'User', text });
      setText('');
    }
  };

  return (
    <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
      <div>
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center text-gray-400 hover:text-gray-600"
        >
        </button>
      </div>
      <div className="flex-grow ml-4">
        <div className="relative w-full">
        <input
  type="text"
  value={text}
  onChange={handleInputChange}
  className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
  autoFocus

/>
        </div>
      </div>
      <div className="ml-4">
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
        >
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default Input;
