import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import AdminNav from '../AdminNav/AdminNav';
//add new service 
const Addservice = () => {
    //state for collecting form data
    const serviceTitle=useRef();
    const serviceDescription=useRef();
    const serviceImgUrl=useRef();
    const addServices=(e)=>{
        const addTitle=serviceTitle.current.value;
        const addDescription=serviceDescription.current.value;
        const addImg=serviceImgUrl.current.value;
        const newService={title:addTitle,description:addDescription,url:addImg}
        //fetch for port
        fetch('http://localhost:5000/services',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newService)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('You have addded one new service');
                //clear form after added service;
                serviceTitle.current.value='';
                serviceDescription.current.value='';
                serviceImgUrl.current.value='';
            }
        })
        e.preventDefault()

    }
    return (
        <Row>
            <Col lg={2}>
                <AdminNav></AdminNav>
            </Col>
            <Col>
                <Container>
                    <h2 className="text-center my-3">Add New Service</h2>
                    <Container>
                    <Form onSubmit={addServices}>
                        <Form.Group>
                            <Form.Label>Service Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter the service title" ref={serviceTitle} required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Service Description</Form.Label>
                            <Form.Control as="textarea" rows={3} type="text" placeholder="Enter the service description" ref={serviceDescription} required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Service img url</Form.Label>
                            <Form.Control  type="text" placeholder="Enter the service img url" ref={serviceImgUrl} required></Form.Control>
                        </Form.Group>
                        <Button variant="success" type="submit" className="my-3">Submit Data</Button>
                    </Form>
                    </Container>
                    
                </Container>
            </Col>
        </Row>
    );
};

export default Addservice;