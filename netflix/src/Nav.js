import React, { useState, useEffect } from 'react';
import "./Nav.css";
import { useNavigate } from 'react-router-dom'; 

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate(); // Use navigate from React Router v6

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className='nav_contents'>
                <img
                onClick={() => navigate("/")} 
                    className='nav_logo'
                    src="https://www.shutterstock.com/image-vector/golden-christian-cross-icon-symbol-600nw-2457605007.jpg"
                    alt=""
                />
                <img
                    onClick={() => navigate("/profile")} 
                    className='nav_avatar'
                    src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Nav;
