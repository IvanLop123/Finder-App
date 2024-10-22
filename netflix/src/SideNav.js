import React from 'react';
import './SideNav.css';
import { AiFillHome } from 'react-icons/ai'; 
import { IoIosPaper, IoMdPeople, IoMdHelpCircle } from 'react-icons/io'; 
import { FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa';

function SideNav({ isOpen, toggleSideNav }) {
    return (
        <nav className={`sideNav ${isOpen ? "open" : ""}`}>
            <ul className="sideNav_menu">
                <li className="sideNav_item" onClick={toggleSideNav}>
                    <AiFillHome />
                    <span>Home</span>
                </li>
                <li className="sideNav_item" onClick={toggleSideNav}>
                    <IoIosPaper />
                    <span>Reports</span>
                </li>
                <li className="sideNav_item" onClick={toggleSideNav}>
                    <FaCartPlus />
                    <span>Products</span>
                </li>
                <li className="sideNav_item" onClick={toggleSideNav}>
                    <IoMdPeople />
                    <span>Team</span>
                </li>
                <li className="sideNav_item" onClick={toggleSideNav}>
                    <FaEnvelopeOpenText />
                    <span>Messages</span>
                </li>
                <li className="sideNav_item" onClick={toggleSideNav}>
                    <IoMdHelpCircle />
                    <span>Support</span>
                </li>
            </ul>
        </nav>
    );
}

export default SideNav;
