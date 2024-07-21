import React from "react";
import { useState } from 'react';
import { Form, Button, Alert, Col } from 'react-bootstrap'

function MyEdit () {

    const [foundId, setFoundId] = useState(false)
    const [foundError, setFoundError] = useState(null)
    const [formData, setFormData] = useState({
        studentid: ''
      })

    //set edit form 
    // const [studentRecord, setStudentRecord] = useState([])
    const [formEditData, setFormEditData] = useState({
        firstname: '',
        lastname: '',
        dob: '',
        grade: '',
        email: ''
    })
    const [success, setSuccess] = useState(null)
    const [error, setError] =useState(null)
    

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
    } 

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/students/${formData.studentid}`, {
                method: 'GET'
            });
            const result = await response.json();
            console.log(result);
            if ( result.length > 0 ) {
                setFoundId(true)
                setFormEditData({
                    ...formEditData,
                    firstname: result[0].firstname,
                    lastname: result[0].lastname,
                    dob: result[0].birthdate.split("T")[0],
                    grade: result[0].grade,
                    email: result[0].email
                });
            }
            else {
                setFoundError("No record found, please check studentid is valid in directory")
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setFormEditData({
            ...formEditData,
            [name]: value,
        });
    }  

    const handleEditSubmit = async (e) => {
        e.preventDefault()
        console.log(formEditData)
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/students/${formData.studentid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formEditData),
            });
            const result = await response.json();
            console.log(result);
        
            //clear the form and success message
            if (result.length > 0) {
                setSuccess('Successfully editted student record. Go to directory to see the updates in record.')
                setError(null)
            }
            else {
                setError('An error occured. Please try again')
                setSuccess(null)
            }
            
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setError(`Failed to submit form: ${error}`)
            setSuccess(null)
        }
    } 

    

    return (
        
        <>
            <h3 className="student-edit">Edit Student Record</h3>
            {/* show studentid search form */}
            {foundId === false && (
            <Form onSubmit={handleSubmit} className="student-edit">

                {foundError && <Alert variant="danger">{foundError}</Alert>}

                <Form.Group as={Col} controlId="formStudentID">
                    <Form.Label>Student ID</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Student ID"
                        name="studentid"
                        value={formData.studentid}
                        onChange={handleChange}
                        min={1000}
                        max={2000}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            )}

            {/* show student edit form */}
            
            {foundId === true && (
            <Form onSubmit={handleEditSubmit} className="student-edit">

                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}

                <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={formEditData.firstname}
                        name="firstname"
                        onChange={handleEditChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={formEditData.lastname}
                        name="lastname"
                        onChange={handleEditChange}
                    />
                </Form.Group>
            

            <Form.Group controlId="formDob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                    type="date"
                    value={formEditData.dob}
                    name="dob"
                    onChange={handleEditChange}
                />
            </Form.Group>

            <Form.Group controlId="formGrade">
                <Form.Label>Grade</Form.Label>
                <Form.Control
                    type="text"
                    value={formEditData.grade}
                    name="grade"
                    onChange={handleEditChange}
                />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formEditData.email}
                    onChange={handleEditChange}
                />
            </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            )}
        </>
    )

}

export default MyEdit