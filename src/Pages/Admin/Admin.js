import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Addservice from './AddService/Addservice';
import AdminBookings from './AdminBookind/AdminBookings';
import AdminHeader from './AdminHeader/AdminHeader';
import AdminHome from './AdminHome/AdminHome';



const Admin = () => {
    return (
        <div>
            
            <Router>
            <AdminHeader></AdminHeader>
                <Switch>
                    <Route exact path="/admin">
                        <AdminHome></AdminHome>
                    </Route>
                    <Route exact path="/admin-dashboard">
                        <AdminHome></AdminHome>
                    </Route>
                    <Route path="/admin-addservices">
                        <Addservice></Addservice>
                    </Route>
                    <Route path="/admin-bookings">
                        <AdminBookings></AdminBookings>
                    </Route>
                    
                </Switch>
               
            </Router>
        </div>
    );
};

export default Admin;