import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../images/trust-logo.png'

const AdminHeader = () => {
    return (
        <div className="bg-dark">
            <Container className="d-flex justify-content-center">
            <img src={logo} alt="" className="trust-logo" />
            <h2 className="text-light ms-3"> Welcome to Trust Courier Admin</h2>
            </Container>
    
        </div>
    );
};

export default AdminHeader;