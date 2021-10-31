import Button from '@restart/ui/esm/Button';
import Dropdown from '@restart/ui/esm/Dropdown';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import trustlogo from '../../../images/trust-logo.png'

const NavbarMenu = () => {
    const{logOut,user}=UseAuth()
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" >
                <Container>
                    <NavLink to="/" className="navbar-brand"><img src={trustlogo} alt="" className="trust-logo" /></NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <NavLink to="/home" className="nav-link">Home</NavLink>
                        <NavLink to="/services" className="nav-link">Services</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/contactus" className="nav-link">Contact Us</NavLink>
                        
                        </Nav>
                        <Nav>
                            {user?<NavDropdown title={user.displayName} id="collasible-nav-dropdown">
                            <Dropdown.Item className="dropdown-item"><NavLink to="/managebooking" className="nav-link text-dark"> Manage Booking</NavLink></Dropdown.Item>
                            
                            <Button onClick={logOut} className="dropdown-item" >logout</Button>
                        </NavDropdown>:<NavLink to="/login" className="nav-link">Login</NavLink>}
                        
                       
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
</Navbar>
    );
};

export default NavbarMenu;