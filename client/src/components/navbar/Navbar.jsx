import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import "./navbar.scss"
const Navbar = ({isLogged,inLogin}) => {
    const [currentPage, setCurrentPage] = useState("home");

    return (
        <div
         className='nav-container font-poppins'>
            <img src="./icons/logo.png" alt="logo" />
            <nav className="right">
                <ul>
                    <li><Link className={`${currentPage === "home" && !inLogin? "green" : "hover:text-emerald-600 transition-all"}`} to='/' onClick={() =>setCurrentPage("home")}>Home</Link></li>
                    <li><Link className={`${currentPage === "doctors" && !inLogin? "green" : "hover:text-emerald-600 transition-all"}`} to='/' onClick={() =>setCurrentPage("doctors")}>Doctors</Link></li>
                    {inLogin?<li className='hidden'></li>:<li><Link className={`${currentPage === "medical" ? "green" : "hover:text-emerald-600 transition-all"}`} to='/' onClick={() =>setCurrentPage("medical")}>Medical History</Link></li>}
                    {inLogin?<li className='hidden'></li>:<li><Link className={`${currentPage === "virtual" ? "green" : "hover:text-emerald-600 transition-all"}`} to='/' onClick={() =>setCurrentPage("virtual")}>Virtual Diagnosis</Link></li>}
                </ul>
            </nav>
            <Link to={inLogin?"/signup":"/login"}><button className='hover:bg-emerald-600 transition-all'>{inLogin?"Sign Up":"Log In"}</button></Link>
        </div>
    );
}

export default Navbar;
