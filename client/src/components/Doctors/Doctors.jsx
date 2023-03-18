import React, { useEffect,useState } from 'react';
import CardDoctor from './CardDoctor';
import "./doctors.scss"
import axios from "axios"
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/doctor/all', {})
        .then(response  => {
             setDoctors(response.data.doctors)
            console.log(doctors)
            }).catch(err=>{
                console.log(err)
            })
      }, [doctors.length]);
    return (
        <div className='doctor-container'>
            {doctors&&doctors.map((item)=>(
                  <CardDoctor doctor={item} />
            ))}
            
         
        </div>
    );
}

export default Doctors;
