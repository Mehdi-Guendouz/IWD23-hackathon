import React from 'react';
import DashLeft from '../../components/Dashleft/DashLeft';
import DashRight from '../../components/DashRight/DashRight';
import Navbar from '../../components/navbar/Navbar';
import "./dahs.scss";


const Dashboard = () => {
    return (
        <>
            <Navbar/>
            <div className="dash-container">
                <div className='first'>
                    <input type="text" placeholder='Search'/>
                    <img src="./icons/search.png" alt="search" />
                </div>
                <div className='second'>
                    <DashLeft />
                    <DashRight />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
