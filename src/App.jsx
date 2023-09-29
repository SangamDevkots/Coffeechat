import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Components/Signin';
import Header from './Components/Header';
import Singlechat from './Components/Singlechat';
import Profile from './Components/Profile';
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="chats" element={<Header />} />
        <Route path="Singlechat/:id" element={<Singlechat  />} />
        <Route path="profile/:id" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
