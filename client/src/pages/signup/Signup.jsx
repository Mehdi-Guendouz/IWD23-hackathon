import React , {useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./signup.scss"

const Signup = () => {
    const [role, setRole] = useState('');
    const [gender, setGender] = useState('');


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
            <Navbar />
            <div className='signup-container'>
            <div className='left'>
                <img src="./img/signup.png" alt="" />
            </div>
            <div className='right'>
                <div className='form-container'>
                    <span>Welcome!</span>
                    <h1>Enter your information</h1>
                    <form className="">
                        <div className="item-dub">
                            <div>
                                <label >First Name</label>
                                <input type="text"  placeholder='Mehdi'/>
                            </div>
                            <div>
                                <label >Last Name</label>
                                <input type="text"  placeholder='Guendouz'/>
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
                        <div className="item-dub">
                            <div>
                                <label >Blood Type</label>
                                <input type="text"  placeholder='A+'/>
                            </div>
                            <div>
                                <label >Birthday</label>
                                <input type="date"  placeholder='1/1/2023'/>
                            </div>
                        </div>
                        <div className="item-dub">
                            <div>
                                <label >Weight</label>
                                <input type="number"  placeholder='20'/>
                            </div>
                            <div>
                                <label >Height</label>
                                <input type="number"  placeholder='1.90m'/>
                            </div>
                        </div>
                        <div className="item">
                            <label >Allergies</label>
                            <input type="text"  />
                        </div>
                        <div className="item">
                            <label >Chronical illnesses</label>
                            <input type="text" />
                        </div>
                        <button className='loginBtn'>Register</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Signup;