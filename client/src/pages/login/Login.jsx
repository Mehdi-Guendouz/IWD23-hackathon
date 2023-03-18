import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./login.scss";
import { motion } from "framer-motion";

const Login = () => {
    const [pass,setPass] = useState("")
    const [email,setEmail] = useState("")
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePass = (e) => {
        setPass(e.target.value)
    }
    const handleSubmit = (e) => {
        console.log(email+" "+pass)
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
