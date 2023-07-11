import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../Providers/AuthProvider';
import useTitleSet from '../../../hooks/useTitleSet';

const Register = () => {
  //step-2.0:- get createUser from authProvider
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


// useTitleSet
useTitleSet('RegisterPage')


  const handleRegister = (event) => {
    // step-1
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
        /*___________________________________________________________________*/
    // password validation
    setError("");
    if (password.length < 6) {
      setError("please add at lest 6 characters in your password");
      return;
    }
    /*___________________________________________________________________*/
    // step-2.1:-
        // step-2.1:-
        createUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
        // setError
        setError("");
        setSuccess("The user has successfully logged in");
          form.reset();
        })
        .catch((error) => {
          console.log(error);
        });
  };
  // handleCheckbox
  const [accepted, setAccepted]= useState(false)
  const handleCheckbox = (event)=>{
    const form=event.target.checked;
    console.log(form)
    setAccepted(form)
  }
    return (
        <div className="container mx-auto w-75 border border-5 my-3 rounded">
        <h3 className='text-center'>Please Register !!!</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Enter email"
              required
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={handleCheckbox}
              type="checkbox"
              name="accept"
              label="Accept Term & Conditions"
            />
          </Form.Group>
          <div className='d-flex justify-content-center'>
          <Button variant="secondary" type="submit" disabled={!accepted} className='w-75'>
            Register
          </Button>
          </div>
         <div className='d-flex justify-content-center'>
         <Form.Text className="text-success fs-4 fw-semibold">
            Already Have An Account ? <Link to="/login" className='text-decoration-none'>Login</Link>
          </Form.Text>
         </div>
          <div className='d-flex justify-content-center'>
          <Form.Text className="text-danger fs-2 fw-bold">{error}</Form.Text>
          <br />
          <Form.Text className="text-success fs-2 fw-bold mb-3">{success}</Form.Text>
          </div>
        </Form>
      </div>
    );
};

export default Register;