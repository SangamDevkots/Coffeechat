import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import app from '../Firebase/Firebase';
import backgroundImage from '../assets/bchat.png';
import AuthContext from '../AuthContext/AuthContext';



const SignIn = () => {
  const user = useContext(AuthContext);
  const navigate = useNavigate(); 



  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      navigate('/chats'); 
    }
  }, [navigate]);
  

  const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const fireauth = getFirestore(app);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Successfully signed in with Google', result.user);

      localStorage.setItem('user', JSON.stringify(result.user));

      setUser(result.user);

      const userRef = doc(fireauth, 'users', result.user.uid);
      const userData = {
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      };
      await setDoc(userRef, userData);
      navigate('/chats'); 

     
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };



  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundStyles}>
      <div className="flex">
        <div className="w-1/2 bg-blue-500">
          <img src="https://media4.giphy.com/media/13GIgrGdslD9oQ/giphy.gif" alt="" className="h-full object-cover" />
        </div>

        <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">Enjoy !</h2>
          <div className="mb-4">
            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
              Sign in with Facebook
            </button>
          </div>
          <div className="mb-4">
            <button onClick={signInWithGoogle} className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-red-200">
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;