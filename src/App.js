import { BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import AuthProvider from "./Hooks/PrivateRoute/AuthContext";
import PrivateRoute from "./Hooks/PrivateRoute/PrivateRoute";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Authentication/Login/Login";
import Booking from "./Pages/Booking/Booking";
import Contactus from "./Pages/ContactUs/Contactus";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import ManageBooking from "./Pages/ManageBooking/ManageBooking";
import Notfound from "./Pages/NotFound/Notfound";




function App() {
 
  let pathName=document.location.pathname;
  if(pathName==='/admin'){
    return (<Admin></Admin>);
  }
  else{
    return (
      <div>
        <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
                <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/managebooking">
              <ManageBooking></ManageBooking>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/contactus">
              <Contactus></Contactus>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthProvider>
      </div>
    );
  }
  
}

export default App;
