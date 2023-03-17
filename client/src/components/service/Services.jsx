import React from 'react';
import {Link} from 'react-router-dom';
import "./services.scss";

const Services = () => {
    return (
        <div className='container-services '>
            <div className="right">
                <h2>Different Types Of Department <br /> To Service For Your Health</h2>
                <p>ln terms of patient demand we have different sort of departement <br /> to serve best treatment in the city</p>
                <div className="items">
                    <div className="check-item">
                        <img src="./icons/check2.png" alt="check" />
                        <span>provide your symptoms</span>
                    </div>
                    <div className="check-item">
                        <img src="./icons/check2.png" alt="check" />
                        <span>ai will treat your case </span>
                    </div>
                    <div className="check-item">
                        <img src="./icons/check2.png" alt="check" />
                        <span>ai will suggest doctors to visit</span>
                    </div>
                </div>
                <Link to='/'  >make a virtual diagnosis</Link>
            </div>
            <div className="left">
                <img src="./img/services.png" alt="treatment" className='treat' />
            </div>
        </div>
    );
}

export default Services;
