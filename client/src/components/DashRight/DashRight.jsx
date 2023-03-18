import React from 'react';
import Calendar from './Calendar';
import "./dashright.scss"

const DashRight = () => {
    return (
        <div className='right-container'>
            <div className="up">
                <h1>Calender</h1>
                <div className='line'></div>
                <Calendar  />
                <div className="item">
                    <div className='item-up'>
                        <span className='title'>Upcoming</span>
                        <span className='desc'>View All</span>
                    </div>
                    <div className="item-down">
                        <div className="profile">
                            M
                        </div>
                        <div className='meet'>
                            <h2>Montly doctor’s meet</h2>
                            <span>8 April, 2021   |   04:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="daily">
                    <div className='green-ball'></div>
                    Daily read
                </div>
                <h2>Equitable medical education with efforts <br /> toward real change</h2>
                <div className='img-c'>
                    <img src="./img/dashB.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default DashRight;
