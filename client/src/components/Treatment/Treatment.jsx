import React from 'react';
import "./treatment.scss";

const Treatment = () => {
    return (
        <div className='container'>
            <div className="left">
                <img src="./img/treatment.png" alt="treatment" />
            </div>
            <div className="right">
                <h2>we are always ensure best medical treatment for your health </h2>
                <div className="check-item">
                    <img src="./icons/check.png" alt="check" />
                </div>
            </div>
        </div>
    );
}

export default Treatment;
