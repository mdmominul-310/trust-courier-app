import React from 'react';
// import trustlogo from '../../images/trust-logo.png';
import './Header.css';
import NavbarMenu from './Nav/Navbar';


const Header = () => {
    return (
        <header className="bg-header sticky-top">
            <NavbarMenu></NavbarMenu>
        </header>
    );
};

export default Header;