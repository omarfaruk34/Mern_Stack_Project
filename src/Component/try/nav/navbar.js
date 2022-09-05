
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
// import { HashLink } from "react-router-hash-link";
import useAuth from '../../Hooks/useAuth';

import "./Navbar.css"
const NavBar = () => {
    const { user, logOut } = useAuth();
    const [navbar, setNavbar] = useState(false)

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
    return (
        <div className={navbar ? `nav-scroll sticky-top`: `nav sticky-top`}>
            <div className="logobar">
                {/* <h1 className='nav-logo'><Link to={"/"}> <span className='text-danger'>Car</span>Max</Link></h1> */}
                <h1 className='nav-logo'><span className='text-danger'>Car</span>Max</h1>
                {/* <img src="\..\..\..\carmax-logo.png" alt="" /> */}
            </div>
            <div className="navbar">
                <ul className='list-unstyled d-flex demo'>
                    <li className='mx-3'><Link to={"/"}>Home</Link></li>
                    <li className='mx-3'><Link to={"/cars"}>Cars</Link></li>
                    <li className='mx-3'> <Link to={"/about"} > About Us</Link></li>
                    <li className='mx-3'> <Link to={"/blog"} >Blog</Link></li>
                    <li > <Link to={"/contact"} >Contact Us</Link></li>
                    {/* <li><HashLink to={"/home#contact"}>contact</HashLink></li> */}
                </ul>
            </div>
            <div>
            
            </div>
            <div className="navbtn btn d-flex align-items-center">
            {user && <h5 className='text-danger fw-semi-bold me-3 p-0 name'>{user?.displayName}</h5>}
            {user?.email && <Link to={"/admin"}><button className='btn-danger px-4 py-2 mx-2 outline-0'>Dashboard</button></Link>}
                {user?.email ? <button onClick={logOut} className='btn-danger px-4 py-2 rounded logout'><Link to={"/"} className="text-light">Logout</Link></button>
                    : <button className='btn-danger px-4 py-2 rounded'> <Link to={"/login"} className="text-decoration-none  text-light ">Login</Link></button>}
            </div>
        </div>


    );
};

export default NavBar;