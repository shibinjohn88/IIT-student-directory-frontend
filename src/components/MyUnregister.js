import React from "react";
import { useState } from "react";
import {Form, Button, Alert, Col} from 'react-bootstrap';

function MyUnregister () {

    const [formData, setFormData] = useState({
        studentid: ''
      })

    //handle success and error for post
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    
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
                method: 'DELETE'
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
            setSuccess('Successfully deleted student record. Continue to delete another student record or go to directory to see the changes in record.')
            console.log(success)
            setError(null)
        }
        else {
            setError(`An error occured: ${result.error} check student id exists in directory and try again`)
            setSuccess(null)
        }
        } catch (error) {
            console.error('Error:', error);
            setError(`Failed to submit form: ${error}`)
            setSuccess(null)
        }
    }

    return (
        <>
            <h3 className="student-unregister">Unregister Old Student</h3>
            <Form onSubmit={handleSubmit} className="student-unregister">

                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}

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
        </>
    )
}

export default MyUnregister