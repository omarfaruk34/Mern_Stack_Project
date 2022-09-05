import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import "./Navbar.css";
//  const NavBar = () => {
//     return (
//         <div className='nav sticky-top'>
// 				<div className="logobar">
//                     <h1 className='nav-logo'><Link to={"/"}> <span className='text-danger'>Car</span><span className='text-light'>Max</span></Link></h1>
/* <img src="\..\..\..\carmax-logo.png" alt="" /> */
// </div>
// <div className="navbar">
//     <ul className='list-unstyled d-flex demo'>
//         <li className='mx-3'><Link to={"/"}>Home</Link></li>
//         <li className='mx-3'><Link to={"/cars"}>Cars</Link></li>
//         <li className='mx-3'> <Link to ={"/about"} > About Us</Link></li>
//         <li className='mx-3'> <Link to ={"/blog"} >Blog</Link></li>
//        <li > <Link to ={"/contact"} >Contact Us</Link></li>
/* <li><HashLink to={"/home#contact"}>contact</HashLink></li> */
//         </ul>
//     </div>
//     <div className="navbtn btn">
//     <button className='btn-danger px-4 py-2 mx-1 rounded'><Link to ={"/registration"} className="text-decoration-none  text-light ">Registration</Link></button>
//     <button className='btn-danger px-4 py-2 rounded'> <Link to ={"/login"} className="text-decoration-none  text-light ">Login</Link></button>
//     </div>
// </div>
const NavBar = () => {
  return (

    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container fluid>

        <Navbar.Brand className='text-danger fs-2 fw-bolder mx-5'>Car<span className='text-light'>Max</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='text-light' />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/" className=' fw-bold fs-5 mx-1 hover'>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/cars" className=' fw-bold fs-5 mx-1'>Cars</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className=' fw-bold fs-5 mx-1'>About-Us</Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className=' fw-bold fs-5 mx-1'>Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className=' fw-bold fs-5 mx-1'>Contact-Us</Nav.Link>

          </Nav>

          
          <Link to="/admin"> <Button variant="outline-info fw-bold mx-2">DASHBOARD</Button></Link>
          <Link to="/login"> <Button variant="outline-danger fw-bold mx-2">Login</Button></Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  
  );
};


export default NavBar;