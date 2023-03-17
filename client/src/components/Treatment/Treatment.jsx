import React from 'react';
import {Link} from 'react-router-dom';
import "./treatment.scss";

const Treatment = () => {
    return (
        <div className='container-treatment'>
            <div className="wrapper">
                <div className="left">
                    <img src="./img/regular-check.png" alt="regular" className='regular' />
                    <img src="./img/treatment.png" alt="treatment" className='treat' />
                </div>
                <div className="right">
                    <h2>we are always ensure best <br /> medical treatment for your <br /> health </h2>
                    <div className="items">
                        <div className="check-item">
                            <img src="./icons/check.png" alt="check" />
                            <span>top specialist doctors</span>
                        </div>
                        <div className="check-item">
                            <img src="./icons/check.png" alt="check" />
                            <span>State Of The Art Doctor Services</span>
                        </div>
                        <div className="check-item">
                            <img src="./icons/check.png" alt="check" />
                            <span>Discount For All Medical Treatment</span>
                        </div>
                        <div className="check-item">
                            <img src="./icons/check.png" alt="check" />
                            <span>Enrollment Is Quick And Easy</span>
                        </div>
                    </div>
                    <Link to='/'  >make a virtual diagnosis </Link>
                </div>
            </div>
        </div>
    );
}

export default Treatment;
