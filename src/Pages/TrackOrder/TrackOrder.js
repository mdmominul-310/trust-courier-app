import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './TrackOrder.css'

const TrackOrder = () => {
    const{register, handleSubmit}=useForm();
    const submitTractNumber=data=>console.log(data)
    return (
        <Container className="my-5">
            <Container className="shadow p-5">
                <Container className="w-75">   
                <h2 className="text-center mb-3">Tracking Your Order</h2>
            <Form onSubmit={handleSubmit(submitTractNumber)} className="mb-3 track-form p-3">
                
                    <input {...register("trackingNumber")}  type="text" required className="" placeholder="Enter your Booking Id" ></input>
                    <input type="submit" value="Track" className="btn btn-success rounded rounded-pill"/>
                
            </Form>
            </Container>
            </Container>
            
        </Container>
    );
};

export default TrackOrder;