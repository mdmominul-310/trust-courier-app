import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Shipment = () => {
    return (
        <Container className="mb-5 p-3 shadow">
            <Row lg={2} md={1} sm={1}>
                <Col>
                    <img src="https://preview.colorlib.com/theme/logistic/assets/img/gallery/visit_bg.jpg.webp" className="img-fluid" alt="" />
                </Col>
                <Col className="bg-light">
                    <div className="p-5 text-center  d-flex justify-content-center align-items-center mt-5"> 
                        <h1>We give you complete control of your shipments</h1>
                    </div>
               
                </Col>
            </Row>
        </Container>
    );
};

export default Shipment;