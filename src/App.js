import { BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Authentication/Login/Login";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home/Home";
import MainPage from "./Pages/MainPage/MainPage";
import Notfound from "./Pages/NotFound/Notfound";



function App() {
  return (
    <div>
      <Router>
        
        <Switch>
        <Route exact path="/admin">
            <Admin></Admin>
          </Route>
          <Route exact to="/">
            <MainPage></MainPage>
          </Route>
         
        </Switch>
        
        
      </Router>
      
    </div>
  );
}

export default App;
