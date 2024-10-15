import React, { useState, useEffect } from 'react';
import "./Nav.css";


function Nav(){
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }else{
            handleShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);
    return( 
        <div className={`nav ${show && "nav_black"}`}>
            <div className='nav_contents'>
                <img className= 'nav_logo' src="https://www.shutterstock.com/image-vector/golden-christian-cross-icon-symbol-600nw-2457605007.jpg" alt=""/>
                <img className= 'nav_avatar' src="https://www.shutterstock.com/image-vector/golden-christian-cross-icon-symbol-600nw-2457605007.jpg" alt=""/>
            </div>


        </div>
    );
    
}

export default Nav;