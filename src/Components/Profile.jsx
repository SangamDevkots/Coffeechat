import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'; // Import Firestore functions from Firebase

const Profile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('id', '==', id));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setUser(userData);
        } else {
          console.error('User not found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-center">
          <img src={user.profilePicture || 'default-profile.jpg'} alt="Profile Picture" className="w-24 h-24 rounded-full border-4 border-blue-500" />
        </div>
        <h1 className="text-2xl font-semibold mt-4">{user.name || 'User Name'}</h1>

        <div className="mt-6">
          <div className="flex justify-between">
            <div className="text-center">
              <p className="text-xl font-semibold">{user.followers || 0}</p>
              <p className="text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold">{user.following || 0}</p>
              <p className="text-gray-600">Following</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold">{user.posts || 0}</p>
              <p className="text-gray-600">Posts</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-gray-700">Bio:</p>
          <p className="mt-2">{user.bio || 'No bio available'}</p>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Message</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
