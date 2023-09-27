// index.js (or App.js)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component
import { AuthProvider } from '../src/AuthContext/AuthContext'; // Import the AuthProvider

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
