import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./login.scss";

const Login = () => {
    return (
        <>
            <Navbar />
            <div className='login-container'>
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
                            <input type="email"  placeholder='ex:m_guedouz@estin.dz'/>
                        </div>
                        <div className="item">
                            <label >Password</label>
                            <input type="password" placeholder='********'/>
                        </div>
                        <div className="remember">
                            <div className="">
                                <input type="radio" />
                                <label>Remember me</label>
                            </div>
                            <span>Forget password?</span>
                        </div>
                        <button className='loginBtn'>Login Now</button>
                        <div className='google'>
                            <img src="./icons/google.png" alt="" />
                            Or sign-in with google
                        </div>
                    </form>
                </div>
                <p className='join'>Don't have an account? <span>Join free today</span></p>
            </div>
        </div>
        </>
        
    );
}

export default Login;
