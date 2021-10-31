import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminNav from '../AdminNav/AdminNav';

const AdminBookings = () => {
    const[booking,setBooking]=useState([])
    useEffect(()=>{
        fetch('https://possessed-eyeballs-16377.herokuapp.com/bookings')
        .then(res=>res.json())
        .then(data=>setBooking(data))
    },[])
    return (
        <Row>
            <Col lg={2}>
                <AdminNav></AdminNav>
            </Col>
            <Col>
                <Container>
                    <h2 className="text-center my-3">All Order List</h2>
                    <Container>
                        {booking.map(book=><div key={book._id}>
                            <p> Name: {book.name} bookingid: {book.bookingId}</p>
                        </div>)}
                    </Container>
                    
                </Container>
            </Col>
        </Row>
    );
};

export default AdminBookings;