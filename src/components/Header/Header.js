import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className='navbar' variant="dark">
                <Container className='d-flex justify-content-between'>
                    <Link to="/" className='headline'>
                        <img className='logo-img' src={logo} alt="" />
                        <span className='logo-title'>Boost Learner</span>
                    </Link>
                   <div >
                   <Nav className="me-auto d-flex align-items-center ">
                        <Nav.Link className='headline'  href="#home">Home</Nav.Link>
                        <Nav.Link className='headline' href="#services">Services</Nav.Link>
                        <Link className='headline' to={"/login"}>Login</Link>
                       
                    </Nav>
                   </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;