import React from 'react';
import { Link } from 'react-router-dom';
import "./card.scss";

const CardDoctor = ({doctor}) => {
    return (
        <div className='card-container'>
            <div className="left">
                <div className="info">
                    <div className="profile">
                        <img src="./img/doctor.png" alt="" />
                    </div>
                    <div className="desc">
                        <h3>Dr. {doctor.firstName +' '+doctor.familyName}</h3>
                        <span>{doctor.speciality}</span>
                        <div className="contact">
                            <img src="./icons/message.png" alt="" />
                            <img src="./icons/call.png" alt="" />
                        </div>
                    </div>
                    <div className="price">
                        <span>2000 DA</span>
                        <img src="./icons/dots.png" alt="" />
                    </div>
                </div>
                <div className="appointment">
                    <Link>
                        Make appointment
                        <div>
                            <img src="./icons/arrow.png" alt="" />
                            <img src="./icons/arrow.png" alt="" />
                        </div>
                    </Link>
                </div>
                <div className="rating">
                    <div className="item">
                        <span>Patient</span>
                        <div className="">
                            {doctor.patientsNumber}
                        </div>
                    </div>
                    <div className="item">
                        <span>Experience</span>
                        <div className="">
                            +8 years
                        </div>
                    </div>
                    <div className="item">
                        <span>Rating</span>
                        <div className="">
                            {doctor.rating.score+'/5'}
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <h3>About a doctor</h3>
                <p>Ut voluptatem doloremque et debitis optio excepturi voluptatum repudiandae.<br /> Adipisci sit molestiae harum nobis eligendi soluta. Nisi dolore non. Totam ipsa <br /> aliquam dignissimos et animi. Et omnis sunt est.</p>
                <h4>Location</h4>
                <div className="location-container">
                    <div className="item">
                        <img src="./icons/card-location.png" alt="" />
                        <span>3891 Ranchview Dr.<br /> Richardson,<br />San Francisco 62639</span>
                    </div>
                    <div className="item">
                        <img src="./icons/hospital.png" alt="" />
                        <span>Iyade Cooper <br />Medical College</span>
                    </div>
                </div>
                <div className='map'>
                    <img src="./img/map.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default CardDoctor;
