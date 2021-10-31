import React from 'react';
import { Route, Router, Switch } from 'react-router';
import Login from '../Authentication/Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home/Home';
import Notfound from '../NotFound/Notfound';

const AppRouter = () => {
    return (
        <Router>
        {/* <Switch location="/admin"></Switch> */}
        <Header></Header>
        <Switch>
        {/* <Route exact path="/admin">
            <Admin></Admin>
          </Route> */}
          
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
         
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    );
};

export default AppRouter;