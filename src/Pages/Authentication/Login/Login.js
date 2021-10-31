import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import googleIcon from '../../../images/google.png'
import facebookIcon from '../../../images/facebook.png'
import UseAuth from '../../../Hooks/UseAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    
    //sign in method
    const {signInWithGoogle,signInWithFacebook,isLooding}=UseAuth();
    console.log(isLooding)
   
    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from||'/home';
    console.log(location)
    //redirect to initail page after login
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(()=>{
            history.push(redirect_uri);
        })
        .catch(error=>console.log(error))
        
    }
    const handleFacebookLogin=()=>{
        signInWithFacebook()
        .then(()=>{
            history.push(redirect_uri)
        })
        .catch(error=>console.log(error))
    }
    
    return (
        <Container className="my-5">
            <h2 className="text-center mb-3">Please Login</h2>
            <Container className="w-75 p-5">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
            <Container className="my-3 d-flex justify-content-center">
                <Button variant="success" onClick={handleGoogleSignIn}> <img src={googleIcon} alt="" /> Login with Google</Button>
                <Button variant="success" className="ms-3" onClick={handleFacebookLogin}>  <img src={facebookIcon} alt="" /> Login with Facebook</Button>
            </Container>
            </Container>
        </Container>
    );
};

export default Login;