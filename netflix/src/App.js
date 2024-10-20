import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import LoginScreen from './Pages/LoginScreen';
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice'; 
import ProfileScreen from './Pages/ProfileScreen';

function App() {
  const user = useSelector(selectUser); 
  const dispatch = useDispatch(); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout()); 
      }
    });
    return unsubscribe;
  }, [dispatch]); 

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes> {/* Wrap your Route components inside Routes */}
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} /> {/* Updated to use Routes properly */}
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
