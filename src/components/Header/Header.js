import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='navbar' sticky='top' variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img className='logo-img' src={logo} alt="" />
                        <span className='logo-title headline'>Boost Learner</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link as={Link} to="home#services" className='headline'>Services</Nav.Link> */}
                            <Nav.Link  href="home#services" className='headline'>Services</Nav.Link>
                            <Nav.Link  href="home#reviews" className='headline'>Reviews</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about" className='headline'>About</Nav.Link>
                            <Nav.Link as={Link} to="blog" className='headline'>Blog</Nav.Link>
                         
                            {
                            user ?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="login" className='headline'>
                                Login
                            </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;

