import React from 'react';
import './Body.css'
import Logo from '../../images/giphy.gif'


const Body = () => {
    return (

        <div className='outsidebody'>
            <div className='body'>
                <div>
                    <h6>Sale up to 70% off</h6>
                    <h1>New Collection For Fall</h1>
                    <p>Discover all the new arrivals of ready-to-wear collection.</p>
                    <button className='btn'>SHOP NOW</button>
                </div>
                <div>
                    <img src={Logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Body;