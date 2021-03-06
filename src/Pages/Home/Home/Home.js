import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import banner from '../../../images/bg-banner.webp'
import MessegeModal from '../../Modal/MessegeModal/MessegeModal';
import TrackOrder from '../../TrackOrder/TrackOrder';
import Location from '../Location/Location';
import Services from '../Services/Services';
import Shipment from '../Shipment/Shipment';
import './Home.css'

const Home = () => {
    const [modalShow, setModalShow] =useState(false);
    return (
        <div >
            <div className="" >
                <img src={banner} className="img-fluid" alt="" />
                <Container > 
                    <div className="banner-btn-text animate__animated  animate__slideInUp">
                     <h2 className="">The Best Courier and transportation Soulition</h2>
                     <Button variant="success" onClick={()=>setModalShow(true)}>Send Messege</Button>
                     <MessegeModal show={modalShow} onHide={()=>setModalShow(false)}
                     dialogClassName="modal-25w"
                     >
                    
                     </MessegeModal>
                    </div>
                    
                </Container>
                
                
            </div>
            <Services></Services>
            <TrackOrder></TrackOrder>
            <Shipment></Shipment>
            <Location></Location>
        </div>
    );
};

export default Home;