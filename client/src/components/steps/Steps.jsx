import React from 'react';
import { Link } from 'react-router-dom';
import './steps.scss';

const Steps = () => {
    return (
        <div className='container-steps'>
            <div className="wrapper">
                <img src="./img/background.png" alt="background" className='back-img' />
                <div className="top">
                    <h2>Easy steps toward the <br /> suitable doctor for your issue</h2>
                    <p>Laudantium officia quam et. Sed molestias fugit <br /> tempora ex voluptas sequi ut. Vitae rerum .</p>
                    <Link>make an appointement</Link>
                </div>
                <div className="bottom">
                    <div className="item">
                        <img src="./icons/card1.png" alt="card" />
                        <h3>Upload medical history</h3>
                        <p>Consequatur velit dolorem id et sed <br /> fugit. Qui corrupti et quibusdam Consequatur dignissimos.</p>
                    </div>
                    <div className="item">
                        <img src="./icons/card2.png" alt="card" />
                        <h3>Enter Information</h3>
                        <p>Consequatur velit dolorem id et sed <br /> fugit. Qui corrupti et quibusdam Consequatur dignissimos.</p>
                    </div>
                    <div className="item">
                        <img src="./icons/card3.png" alt="card" />
                        <h3>Chat with AiDoc</h3>
                        <p>Consequatur velit dolorem id et sed <br /> fugit. Qui corrupti et quibusdam Consequatur dignissimos.</p>
                    </div>
                    <div className="item">
                        <img src="./icons/card4.png" alt="card" />
                        <h3>Find doctor and book</h3>
                        <p>Consequatur velit dolorem id et sed <br /> fugit. Qui corrupti et quibusdam Consequatur dignissimos.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Steps;
