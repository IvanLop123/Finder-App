import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import LoginScreen from './Pages/LoginScreen';
import {auth} from "./firebase";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        console.log(userAuth);
      } else {
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
