import React from "react";
import { useState } from "react";
import {Form, Alert, Button, Col} from 'react-bootstrap';

function MyRegister() {
  
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    grade: '',
    email: ''
  })

  //handle success and error for post
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await fetch('http://localhost:3001/api/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log(result);
       
        //clear the form and success message
        if (response.status === 201) {
            setFormData({
                firstname: '',
                lastname: '',
                dob: '',
                grade: '',
                email: '',
            });
            setSuccess('successfully submitted form')
            console.log(success)
            setError(null)
        }
        else {
            setError('An error occured')
            setSuccess(null)
        }
        
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        setError(`Failed to submit form: ${error}`)
        setSuccess(null)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
} 

  return (
    <>
    <h3 className="student-register">New Student Registration</h3>
    <Form onSubmit={handleSubmit} className="student-register">
        
                <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                </Form.Group>
            

            <Form.Group controlId="formDob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formGrade">
                <Form.Label>Grade</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </Form.Group>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
    
  );
}

export default MyRegister;