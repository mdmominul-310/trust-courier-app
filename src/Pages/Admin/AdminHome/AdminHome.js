import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminNav from '../AdminNav/AdminNav';
import Dashboard from '../Dashboard/Dashboard';


const AdminHome = () => {
    return (
        <div className="">
            <Row>
                <Col lg={2}>
                   <AdminNav></AdminNav>
                </Col>
                <Col lg={8}>
                   
                      
                          
                                <Dashboard></Dashboard>
                            
                   
                    
                </Col>
            </Row>
        </div>
    );
};

export default AdminHome;