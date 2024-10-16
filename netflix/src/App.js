import React, { useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import LoginScreen from './Pages/LoginScreen';
import {auth} from "./firebase";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        setUser(userAuth);
      } else {
        setUser(null);
      }
    });
    return unsubscribe; 
  }, []);
  

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
