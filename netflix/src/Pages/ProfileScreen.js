import React from "react";
import './ProfileScreen.css';
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase"; 
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function ProfileScreen() {
    const user = useSelector(selectUser);

    // Function to handle Google sign-in
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("Google sign-in successful: ", result.user);
            })
            .catch((error) => {
                console.error("Error during Google sign-in: ", error);
            });
    };

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img 
                        src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg" 
                        alt="user avatar" 
                    />
                    <div className="profileScreen_details">
                        <h2>{user?.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                            <button 
                                className="profileScreen_subscribe"
                            >
                                Subscribe
                            </button>
                            <div id="gSignInWrapper">
                                <button 
                                    id="customBtn" 
                                    className="login-with-google-btn"
                                    onClick={handleGoogleSignIn}
                                >
                                    Sign in with Google
                                </button>
                            </div>
                            <button 
                                onClick={() => auth.signOut()} 
                                className="profileScreen_signOut"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileScreen;
