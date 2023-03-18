import React from 'react';
import "./dashleft.scss"

const DashLeft = () => {
    return (
        <div className='left-container'>
            <h1>Good Morning  <span>Dr. Kim!</span></h1>
            <div className="image-container">
                <img src="./img/dashPeron.png" alt="" className='back-img'/>
                <h2>Visits for Today</h2>
                <p>104</p>
                <div className="cards">
                    <div className="item">
                        <h3 className='item-title'>New Patients</h3>
                        <span>30</span>
                        <div>
                            51% <img src="./icons/stockUp.png" alt='' />
                        </div>
                    </div>
                    <div className="item">
                        <h3 className='item-title'>old Patients</h3>
                        <span>64</span>
                        <div className='second'>
                            20% <img src="./icons/stockDown.png" alt=''/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="patient-list">
                <div className="patient">
                    <div className="item">
                        <h2>Patient List</h2>
                        <span>today</span>
                    </div>
                    <div className="card-item">
                        <div className="card">
                            <div className="profile">
                                SM
                            </div>
                            <div className='meet'>
                                <h2>Stacy Mitchell</h2>
                                <span>Weekly Visit</span>
                            </div>
                            <div className='time'>
                                9:15 AM
                            </div>
                        </div>
                        <div className="card">
                            <div className="profile">
                                M
                            </div>
                            <div className='meet'>
                                <h2>Montly doctor’s meet</h2>
                                <span>8 April, 2021   |   04:00 PM</span>
                            </div>
                            <div className='time'>
                                9:15 AM
                            </div>
                        </div>
                        <div className="card">
                            <div className="profile">
                                M
                            </div>
                            <div className='meet'>
                                <h2>Montly doctor’s meet</h2>
                                <span>8 April, 2021   |   04:00 PM</span>
                            </div>
                            <div className='time'>
                                9:15 AM
                            </div>
                        </div>
                        <div className="card">
                            <div className="profile">
                                M
                            </div>
                            <div className='meet'>
                                <h2>Montly doctor’s meet</h2>
                                <span>8 April, 2021   |   04:00 PM</span>
                            </div>
                            <div className='time'>
                                9:15 AM
                            </div>
                        </div>
                    </div>
                </div>
                <div className="consultation">
                    <h1>Consultation</h1>
                </div>
            </div>
        </div>
    );
}

export default DashLeft;
