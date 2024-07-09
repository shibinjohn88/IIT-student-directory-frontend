import React from "react";
import { useState } from "react";
import {Form, Button, Col} from 'react-bootstrap';

function MyUnregister () {

    const [formData, setFormData] = useState({
        studentid: ''
      })
    
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
    } 

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <h3 className="student-unregister">Unregister Old Student</h3>
            <Form onSubmit={handleSubmit} className="student-unregister">
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