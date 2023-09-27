import React, { useState , useContext } from 'react';
import ChatMessage from './ChatMessage';
import NavBar from './NavBar';
import Input from './Input';
import AuthContext from '../AuthContext/AuthContext';


const Chatbox = () => {

  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col flex-auto h-full p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="flex flex-col h-full">
            <NavBar />
            <div className="grid grid-cols-12 gap-y-2">
              {messages.map((message, index) => (
                <ChatMessage key={index} sender={message.sender} message={message.text} />
              ))}
            </div>
          </div>
        </div>
        <Input onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chatbox;
