import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Pages/HomeScreen';
import LoginScreen from './Pages/LoginScreen';
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice'; 
import ProfileScreen from './Pages/ProfileScreen';
import StudyScreen from './Pages/StudyScreen';

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
          <Routes>
            <Route exact path="study" element={<StudyScreen />} /> 
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} /> 
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
