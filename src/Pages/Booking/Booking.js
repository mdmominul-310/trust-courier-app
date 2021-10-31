import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const Booking = () => {
    const { register, handleSubmit} = useForm();
    const {id}=useParams();
    const onSubmit = (data,e) => {
        const{name,number,email,address}=data;
       const bookedUserInfo={name:name,number:number,email:email,address:address,bookingId:id}
     

       fetch('http://localhost:5000/booking',{
           method:'POST',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(bookedUserInfo)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.insertedId){
               alert("Your Services Booked Succesfully");
               //reset after added to database
              e.target.reset()
           }
       })
    }
    
    return (
        <Container className="my-5">
            <h2 className="text-center my-3">Service Booking</h2>
            <Container className="p-5">   
              <form onSubmit={handleSubmit(onSubmit)}>
                 <label className="form-label" htmlFor="name">Name:</label>
                <input  {...register("name")} className="form-control mb-3" id="name" placeholder="Enter your Name" required/>
                <label htmlFor="email" className="form-label"> Number:</label>
                <input {...register("number")} placeholder="Enter Your valid Mobile Number" className="form-control mb-3" id="name" required/>
                <label className="form-label" htmlFor="emeil"> Email:</label>
                <input {...register("email")} className="form-control mb-3" placeholder="Enter YOur valid Email Address" required/>
                <label htmlFor="address" className="from-label">Address:</label>
                <textarea {...register("address")} type="textarea" id="address" className="form-control" placeholder="Enter your address" required ></textarea>
                <input type="submit" className="btn btn-success my-3" id="email" placeholder="Enter your Email Address " />
             </form>
            </Container>
        </Container>
    );
};

export default Booking;