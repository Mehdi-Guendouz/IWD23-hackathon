import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.scss"

const Footer = () => {
    return (
        <footer className='footer-container'>
            {/* <img src="./img/background.png" alt="background" className='back-footer' /> */}
            <div className="first">
                <img src="./icons/logo-footer.png" alt="logo" />
            </div>
            <div className="navigation">
                <Link>Home</Link>
                <Link>Doctors</Link>
                <Link>Medical History</Link>
                <Link>Virtual Diagnosis</Link>
            </div>
            <div className="social">
                <img src="./icons/linkedin.png" alt="" />
                <img src="./icons/facebook.png" alt="" />
                <img src="./icons/twitter.png" alt="" />
                <img src="./icons/ig.png" alt="" />
            </div>
            <div className='copyright'>
                copyright: 	<span>&#169;</span>  <span className='black'>2023</span>.All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
