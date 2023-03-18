import React from 'react';
import CardDoctor from './CardDoctor';
import "./doctors.scss"

const Doctors = () => {
    return (
        <div className='doctor-container'>
            <CardDoctor />
            <CardDoctor />
            <CardDoctor />
            <CardDoctor />
            
        </div>
    );
}

export default Doctors;
