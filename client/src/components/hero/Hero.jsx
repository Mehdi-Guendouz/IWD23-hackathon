import React from 'react';
import "./hero.scss"


const Hero = () => {
   

    return (
        <div className='hero'>
            <div className="left">
                <h1>Find <span className='green'>Your Doctor</span> and make an appointment</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, totam magnam. Nam alias nisi corporis fuga id iste quam voluptates?</p>
            </div>
            <div className="right">
                <img src="" alt="" />
                <img src="./img/hero.png" alt="hello" />
            </div>
            <div className="cards">
                <h2>Book Appointment Now</h2>
                <form className='items-list'>
                    <div className='item'>
                        <div className='left-item'>
                            <label >Location</label>
                            <select name="option1" id="">
                                <option value="">opt1</option>
                            </select>
                        </div>
                        <div className="right-item">
                            <img src="./icons/location.png" alt="" />
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left-item'>
                            <label >Doctor's Specialty</label>
                            <select name="option1" id="">
                                <option value="">opt1</option>
                            </select>
                        </div>
                        <div className="right-item">
                            <img src="./icons/health.png" alt="" />
                        </div>
                    </div>
                    <div className='item'>
                        <div className='left-item'>
                            <label>appointment date</label>
                            {/* <input type="text" /> */}
                        </div>
                        <div className="right-item">
                            <img src="./icons/timer.png" alt="" />
                        </div>
                    </div>
                    <button><img src="./icons/searchnormal1.png" alt="" /> Search</button>
                </form>
            </div>
        </div>
    );
}

export default Hero;
