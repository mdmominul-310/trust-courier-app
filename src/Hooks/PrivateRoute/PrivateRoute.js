import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import UseAuth from "../UseAuth";


function PrivateRoute({ children, ...rest }) {
    let auth =UseAuth();
    const {isLooding}=UseAuth();
    console.log(isLooding)
 
    if(isLooding){
        return   <Spinner animation="border" variant="success" />

    }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute;