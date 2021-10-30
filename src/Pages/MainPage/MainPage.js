import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Login from '../Authentication/Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home/Home';
import Notfound from '../NotFound/Notfound';

const MainPage = () => {
    return (
        <Router>
            <Header></Header>
            <Switch>
                
            {/* <Route exact path="/">
            <Home></Home>
          </Route> */}
          <Route to="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*" >
            <Notfound></Notfound>
          </Route>
                
            </Switch>
            <Footer></Footer>
        </Router>
    );
};

export default MainPage;