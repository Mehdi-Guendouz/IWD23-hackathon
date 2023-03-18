import React , {useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./signup.scss"
import {motion} from "framer-motion"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const nav = useNavigate();
    const [role, setRole] = useState('');
    const [gender, setGender] = useState('');
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [blood,setBlood] = useState("");
    const [weight,setWeight] = useState("");
    const [height,setHeight] = useState("");
    const [allergies,setAllergies] = useState("");
    const [ills,setIlls] = useState("");
    const [birth,setBirth] = useState("");
    const [spec,setSpec] = useState("");
    const [adress,setAdress] = useState("");
    const handleFname = (e) => {
        setFname(e.target.value)
    }
    const handleLname = (e) => {
        setLname(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }
    const handleBlood = (e) => {
        setBlood(e.target.value)
    }
    const handleWeight = (e) => {
        setWeight(e.target.value)
    }
    const handleHeight = (e) => {
        setHeight(e.target.value)
    }
    const handleAllergies = (e) => {
        setAllergies(e.target.value)
    }
    const handleIlls = (e) => {
        setIlls(e.target.value)
    }
    const handleBirth = (e) => {
        setBirth(e.target.value)
    }
    const handleSpec = (e) => {
        setSpec(e.target.value)
    }
    const handleAdress = (e) => {
        setAdress(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (role=='doctor'){
            

            axios.post('http://localhost:5000/api/doctor/login/', {
            email, birthDate:birth, gender, firstName:fname, 
            familyName:lname, password:pass, bloodType:blood,
             weight, height, allergies, chronicalIlnesses:ills,address:adress,speciality:spec
            }
            ).then(response => {
            console.log('Response:', response.data);
            nav('/doctor')
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }else{

            axios.post('http://localhost:5000/api/patient/signup', {
                email, birthDate:birth, gender, firstName:fname, 
                familyName:lname, password:pass, bloodType:blood,
                 weight, height, allergies, chronicalIlnesses:ills
            }
            ).then(response => {

            console.log('Response:', response.data);
            nav('/')
            })
            .catch(error => {
            console.error('Error:', error);
            });

        }

    }
    const handelRole = (text) =>{
        if (text === 'patient'){
            setRole('patient');
        }
        if(text === 'doctor'){
            setRole('doctor')
        }
        
    }

    const handelGender = (text) =>{
        if (text === 'male'){
            setGender('male');
        }
        if(text === 'female'){
            setGender('female')
        }
       
    }

    return (
        <>
            <Navbar inLogin={true}/>
            <motion.div className='signup-container font-poppins'>
            <div className='left'>
                <img src="./img/signup.png" alt="" />
            </div>
            <div className='right'>
                <div className='form-container'>
                    <span>Welcome!</span>
                    <h1>Enter your information</h1>
                    <form className="" onSubmit={(e)=>handleSubmit(e)}>
                        <div className="item-dub">
                            <div>
                                <label >First Name</label>
                                <input onChange={(e)=>handleFname(e)} type="text"  placeholder='Mehdi'/>
                            </div>
                            <div>
                                <label >Last Name</label>
                                <input onChange={(e)=>handleLname(e)} type="text"  placeholder='Guendouz'/>
                            </div>
                        </div>
                        <div className="item-dub">
                            <div className='icon-container'  onClick={() => handelRole("patient")} >
                                <div className={`icon ${role === 'patient' ? "bg-[#66CA98]" : "bg-white"}`}>
                                {role === "patient" ? <img src="./icons/patientW.png" alt="patient" /> : <img src="./icons/patientB.png" alt="patient" />}
                                </div>
                                <span className={`${role === "patient"  ? "green" : "text-black"}`}>I am a Patient</span>
                            </div>
                            <div className='icon-container' onClick={() => handelRole("doctor")}>
                                <div className={`icon ${role === 'doctor' ? "bg-[#66CA98]" : "bg-white"}`}>
                                {role === "doctor" ? <img src="./icons/doctorW.png" alt="patient" /> : <img src="./icons/doctorB.png" alt="doctor" />}
                                </div>
                                <span className={`${role === 'doctor' ? "green" : "text-black"}`}>I am a Doctor</span>
                            </div>
                        </div>
                        <div className="item-dub">
                            <div className='icon-container' onClick={() => handelGender("female")}>
                                <div className={`icon ${gender === 'female' ? "bg-[#66CA98]" : "bg-white"}`}>
                                {gender === "female" ? <img src="./icons/femaleW.png" alt="patient" /> : <img src="./icons/femaleB.png" alt="female" />}
                                </div>
                                <span className={`${gender === 'female' ? "green" : "text-black"}`}>Female</span>
                            </div>
                            <div className='icon-container' onClick={() => handelGender("male")}>
                                <div className={`icon ${gender === 'male' ? "bg-[#66CA98]" : "bg-white"}`}>
                                {gender === "male" ? <img src="./icons/maleW.png" alt="patient" /> : <img src="./icons/maleB.png" alt="male" />}
                                </div>
                                <span className={`${gender === 'male' ? "green" : "text-black"}`}>Male</span>
                            </div>
                        </div>
                        <div className="item">
                            <label >Email</label>
                            <input onChange={(e)=>handleEmail(e)} type="text"  />
                        </div>
                        <div className="item">
                            <label >Password</label>
                            <input onChange={(e)=>handlePass(e)} type="password" />
                        </div>
                        <div className={role==="doctor"?"item":"hidden"}>
                            <label >Speciality</label>
                            <input onChange={(e)=>handleSpec(e)} type="text" />
                        </div>
                        <div className="item-dub">
                            <div>
                                <label >Blood Type</label>
                                <input onChange={(e)=>handleBlood(e)} type="text"  placeholder='A+'/>
                            </div>
                            <div>
                                <label >Birthday</label>
                                <input onChange={(e)=>handleBirth(e)} type="date"  placeholder='1/1/2023'/>
                            </div>
                        </div>
                        <div className="item-dub">
                            <div>
                                <label >Weight</label>
                                <input onChange={(e)=>handleWeight(e)} type="number"  placeholder='20'/>
                            </div>
                            <div>
                                <label >Height</label>
                                <input onChange={(e)=>handleHeight(e)} type="text"  placeholder='1.90m'/>
                            </div>
                        </div>
                        <div className={role==="doctor"?"item":"hidden"}>
                            <label >Address</label>
                            <input onChange={(e)=>handleAdress(e)} type="text"  />
                        </div>
                        <div className="item">
                            <label >Allergies</label>
                            <input onChange={(e)=>handleAllergies(e)} type="text"  />
                        </div>
                        <div className="item">
                            <label >Chronical illnesses</label>
                            <input onChange={(e)=>handleIlls(e)} type="text" />
                        </div>
                        <button type='submit' className='loginBtn'>Register</button>
                    </form>
                </div>
            </div>
        </motion.div>
        </>
    );
}

export default Signup;
