import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>   
        <div className="trust-footer text-center">
            <Container className="py-5 text-light">
                <Row lg={3} md={3} sm={1}>
                    <Col>
                    <h2>Connect Us</h2>
                        <p>Call us: +8801704003819</p>
                        <p>Eamil:mdmominulislam310@gmail.com</p>
                        <p>Bir uzali Bazar, Kapasia,Gazipur</p>
                    </Col>
                    <Col>
                        <img src="https://www.pngkey.com/png/detail/451-4515599_we-accept-visa-card-accepted-here.png" className="img-fluid" alt="" />
                    </Col>
                    <Col>
                    Trust Courier Service (Pvt.) Limited has been playing a leading role in these service activities of courier and parcel since its inception in 1983. The Founder, Chairman Imamul Kabir Shanto, has led the effective development and establishment of courier service in Bangladesh.</Col>
                </Row>
            </Container>
        </div>
        <div className="bg-dark text-light text-center p-3">
            <p>Copyright all right reserved &copy; trust courier serveice 2020-2021</p>
        </div>
        </div>
    );
};

export default Footer;