import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const{service}=props;
    //set url to go boooking page
    const url=`/booking/${service._id}`
    return (
        <Col >
                <Card className="h-100 p-3 shadow">
                    <Card.Img variant="top" src={service.url}/>
                    <Card.Body>
                    <Card.Title className="text-center">{service.title}</Card.Title>
                    <Card.Text>
                        {service.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer><NavLink className="btn btn-success" to={url}>Book Now</NavLink></Card.Footer>
                </Card>
                </Col>
    );
};

export default Service;