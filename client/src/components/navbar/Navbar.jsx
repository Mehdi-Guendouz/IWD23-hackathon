import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import "./navbar.scss"

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState("home");

    return (
        <div className='nav-container'>
            <img src="./icons/logo.png" alt="logo" />
            <nav className="right">
                <ul>
                    <li><Link className={`${currentPage === "home" ? "green" : ""}`} to='/' onClick={() =>setCurrentPage("home")}>Home</Link></li>
                    <li><Link className={`${currentPage === "doctors" ? "green" : ""}`} to='/' onClick={() =>setCurrentPage("doctors")}>Doctors</Link></li>
                    <li><Link className={`${currentPage === "medical" ? "green" : ""}`} to='/' onClick={() =>setCurrentPage("medical")}>Medical History</Link></li>
                    <li><Link className={`${currentPage === "virtual" ? "green" : ""}`} to='/' onClick={() =>setCurrentPage("virtual")}>Virtual Diagnosis</Link></li>
                </ul>
            </nav>
            <button>Login</button>
        </div>
    );
}

export default Navbar;
