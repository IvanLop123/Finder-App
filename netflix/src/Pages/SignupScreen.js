import './SignupScreen.css'; 
import React, { useRef } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = async (e) => {
        e.preventDefault();
        try {
            const authUser = await createUserWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            );
            console.log('User created: ', authUser);
        } catch (error) {
            alert('Error creating account: ', error.message);
        }
    };

    const signIn = async (e) => {
        e.preventDefault();
        try {
            const authUser = await signInWithEmailAndPassword(
                auth,
                emailRef.current.value,
                passwordRef.current.value
            );
            console.log('User signed in: ', authUser);
        } catch (error) {
            alert('Error signing in: ', error.message);
        }
    };

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signupScreen_gray">New to Netflix? </span>
                    <span className="signupScreen_link" onClick={register}>Sign up now!</span>
                </h4>
            </form>
        </div>
    );
}

export default SignupScreen;
