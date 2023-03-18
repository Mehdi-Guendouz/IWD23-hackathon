import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./login.scss";
import { motion } from "framer-motion";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDataLayerValue } from '../../contexte/dataLayar';

const Login = () => {
    const nav=useNavigate()
    const data = useDataLayerValue()
    const { state, dispatch } = data;
    
    const [pass,setPass] = useState("")
    const [email,setEmail] = useState("")
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePass = (e) => {
        setPass(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/doctor/login/', {
            email, password:pass
            }
            ).then(response => {
                nav('/doctor')
            })
            .catch(error => {
                axios.post('http://localhost:5000/api/patient/login/', {
                    email, password:pass
                    }
                    ).then(response => {
                    nav('/')
                    })
                    .catch(error => {
                    console.error('Error:', error);
                    });

            });
    }
    return (
        <>
            <Navbar inLogin={true}/>
            <motion.div className='login-container font-poppins'
            initial={{scale:0.5,opacity:0}}
            animate={{scale:1,opacity:1}}
            transition={{duration:0.5,from:180}}>
            
            <div className='left'>
                <img src="./img/login.png" alt="pic" />
            </div>
            <div className='right'>
                <div className='form-container'>
                    <span>Welcome back</span>
                    <h1>Login to your account</h1>
                    <form className="">
                        <div className="item">
                            <label >Email</label>
                            <input type="email"  placeholder='m_guedouz@estin.dz' onChange={(e) => handleChangeEmail(e)}/>
                        </div>
                        <div className="item">
                            <label >Password</label>
                            <input type="password" placeholder='********' onChange={(e)=> handleChangePass(e)}/>
                        </div>
                        <div className="remember">
                            <div className="">
                                <input type="radio" />
                                <label>Remember me</label>
                            </div>
                            <span className='font-semibold hover:underline transition-all'>Forget password?</span>
                        </div>
                        <button onClick={handleSubmit} className='loginBtn transition-all hover:bg-emerald-600'>Login Now</button>
                        <div className='google hover:bg-gray-200 transition-all'>
                            <img src="./icons/google.png" alt="" />
                            Or sign-in with google
                        </div>
                    </form>
                </div>
                <p className='join'>Don't have an account? <span className='font-semibold  hover:underline transition-all'>Join free today</span></p>
            </div>
        </motion.div>
        </>
        
    );
}

export default Login;
