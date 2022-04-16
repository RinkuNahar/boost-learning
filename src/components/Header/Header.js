import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='navbar'  sticky='top' variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='logo-img' src={logo} alt="" />
                        <span className='logo-title headline'>Boost Learner</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services " className='headline'>Services</Nav.Link>
                            <Nav.Link href="home#reviews" className='headline'>Reviews</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about" className='headline'>About</Nav.Link>
                            <Nav.Link as={Link} to="blog" className='headline'>Blog</Nav.Link>
                            <Nav.Link as={Link} to="login" className='headline'>
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;







{/* <Navbar className='navbar' variant="dark">
                <Container className='d-flex justify-content-between'>
                    <Link to="/" className='headline'>
                        <img className='logo-img' src={logo} alt="" />
                        <span className='logo-title'>Boost Learner</span>
                    </Link>
                   <div >
                   <Nav className="me-auto d-flex align-items-center ">
                        <Nav.Link className='headline'  href="#home">Home</Nav.Link>
                        <Nav.Link className='headline' href="#">Services</Nav.Link>
                        <Link className='headline' to={"/login"}>Login</Link>
                       
                    </Nav>
                   </div>
                </Container>
            </Navbar> */}