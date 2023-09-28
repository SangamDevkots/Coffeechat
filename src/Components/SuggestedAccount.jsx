import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firebase/Firebase';
import { NavLink } from 'react-router-dom';

const SuggestedAccount = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
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
    <div>
      {userList.map((user, index) => (
        <button
          key={index}
          className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 "
        >
              
          <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
          <NavLink to={`/Singlechat/${user.displayName}`}>
            {user.displayName.charAt(0)}
            </NavLink>
          </div>
          <NavLink to={`/Singlechat/${user.displayName
}`}>
          <div className="ml-2 text-sm font-semibold">{user.displayName}</div>
          </NavLink>
        </button>
   
      ))}
    </div>
  );
};

export default SuggestedAccount;
