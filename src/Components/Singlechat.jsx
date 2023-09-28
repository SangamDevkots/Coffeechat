import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import { useParams } from 'react-router-dom';
import ChatMessage from './ChatMessage';
import NavBar from './NavBar';
import Input from './Input';
import Sidebar from './Sidebar';

const Singlechat = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [userList, setUserList] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const usersData = [];

        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          usersData.push(userData);
        });

        setUserList(usersData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
  
    <div className="flex flex-col flex-auto h-screen p-6">
        
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="flex flex-col h-full ">
            <NavBar name={id}   />
            <div className="">
              {messages.map((message, index) => (
                <ChatMessage key={index} sender={message.sender} message={message.text} photo={message.photo} />
              ))}
            </div>
          </div>
        </div>
        <Input onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Singlechat;
