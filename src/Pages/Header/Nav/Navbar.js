import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import trustlogo from '../../../images/trust-logo.png'

const NavbarMenu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" >
                <Container>
                    <NavLink to="/" className="navbar-brand"><img src={trustlogo} alt="" className="trust-logo" /></NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <NavLink to="/home" className="nav-link">Home</NavLink>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
</Navbar>
    );
};

export default NavbarMenu;