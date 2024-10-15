import React from 'react';
import "./Banner.css";

function Banner(){
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '.....' : string;
    }
    
    return(
        <header className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://media.sharefaith.com/wp-content/uploads/2022/10/1488928927942_92.jpg')`,
            backgroundPosition: 'center center',
        }

        }>
            <div className='banner_contents'>
                <h1 className='banner_title'>Movie name</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>Add to list</button>
                </div>
                <h1 className='banner_description' >
                    {truncate(`Banner descrition`, 150)}
                </h1>
            </div>
            <div className='banner--fadeBottom'/>
            
        </header>
        );
    
}

export default Banner;