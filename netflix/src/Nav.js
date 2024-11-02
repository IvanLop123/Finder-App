import React, { useState, useEffect } from 'react';
import './Nav.css';
import SideNav from './SideNav';
import { useNavigate } from 'react-router-dom';

function Nav() {
    const [show, handleShow] = useState(false);
    const [sideNavOpen, setSideNavOpen] = useState(false); // Add state for sidebar

    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    const toggleSideNav = () => {
        setSideNavOpen(!sideNavOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className='nav_contents'>
                <button className="hamburger-menu" onClick={toggleSideNav}>
                    ☰ {/* This is the three-line icon */}
                </button>
                <img
                    onClick={() => navigate('/')}
                    className='nav_logo'
                    src="https://www.shutterstock.com/image-vector/golden-christian-cross-icon-symbol-600nw-2457605007.jpg"
                    alt="logo"
                />
                <img
                    onClick={() => navigate('/study')}
                    className='study'
                    src="https://us.123rf.com/450wm/asmaparin/asmaparin2408/asmaparin240810787/234904922-brain-with-open-book-and-feather-pen-vector-illustration-on-black-background.jpg?ver=6"
                    alt="study"
                />
                <img
                    onClick={() => navigate('/profile')}
                    className='nav_avatar'
                    src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg"
                    alt="avatar"
                />
            </div>
            {/* Render SideNav here */}
            <SideNav isOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
        </div>
    );
}

export default Nav;
