import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import ChatMessage from './ChatMessage';
import Input from './Input';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'messages'), 
      orderBy('createdAt', 'desc'),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages = [];
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  console.log(messages);

  return (
    <div className="flex flex-col flex-auto h-full p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="flex flex-col h-full">
            <nav>
              <div className="container flex justify-center bg-gray-800 py-4 text-white rounded-md">
                <ul>
                  <li>
                    <h1>General chat</h1>
                    <p>Online</p>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="messages-wrapper">
              {messages?.map((message, index) => (
                <ChatMessage
                  key={message.id}
                  sender={message.sender}
                  receiver={message.receiver}
                  message={message.text}
                  timestamp={message.createdAt} 
                  photo={message.photo}
                />
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
