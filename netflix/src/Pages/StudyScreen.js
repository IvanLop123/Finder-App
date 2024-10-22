import React, { useState } from "react";
import './StudyScreen.css';
import Nav from '../Nav';
import NoteBook from '../NoteBook';
import SideNav from '../SideNav';

function StudyScreen() {
    const [sideNavOpen, setSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setSideNavOpen(!sideNavOpen);
    };

    return (
        <div className="studyScreen">
            <Nav />
            <button onClick={toggleSideNav} className="sideNav_toggle">☰</button>
            <SideNav isOpen={sideNavOpen} toggleSideNav={toggleSideNav} />
            <NoteBook />
        </div>
    );
}

export default StudyScreen;
