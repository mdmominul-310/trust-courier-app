import React from 'react';
import { Container } from 'react-bootstrap';
import './Location.css'

const Location = () => {
    return (
        <Container className="shadow my-5">
            <h2 className="text-center mb-3">Find us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.4400912805427!2d90.61748701543249!3d24.226381784356878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375681370c3d7809%3A0x2be3b12747025324!2sMa%20Computer%20%26%20Internet%20Point!5e0!3m2!1sen!2sbd!4v1635670542384!5m2!1sen!2sbd" title="location " className="w-100 locate-visit"></iframe>
        </Container>
        
    );
};

export default Location;