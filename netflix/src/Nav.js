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
                <img className= 'nav_logo' src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" alt=""/>
                <img className= 'nav_avatar' src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" alt=""/>
            </div>


        </div>
    );
    
}

export default Nav;