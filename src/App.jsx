import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Components/Signin';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="chats" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
