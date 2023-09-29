import { useState, useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import ChatMessage from "./ChatMessage";
import Input from "./Input";

const Chatbox = () => {
  const [messages, setMessages] = useState([]);

  const fetchData = async () => {
    try {
      const q = query(
        collection(db, "messages")
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const fetchedMessages = [];
        querySnapshot.forEach((doc) => {
          fetchedMessages.push({ ...doc.data(), id: doc.id });
        });

        // Call the function to set data here
        updateMessages(fetchedMessages);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // Function to set data
  const updateMessages = (newMessages) => {
    setMessages(newMessages);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSendMessage = async (messageData) => {
    try {
      const docRef = await addDoc(collection(db, "messages"), messageData);
    } catch (error) {
      console.error("Error adding message: ", error);
    }
  };

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
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  sender={message.sender ?? "User"}
                  message={message.text ?? message.text}
                  photo={message.photo ?? ""}
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
