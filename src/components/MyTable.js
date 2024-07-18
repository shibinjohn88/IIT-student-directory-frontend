import Table from 'react-bootstrap/Table';
import React from 'react';
import { useEffect, useState } from 'react';

function MyTable() {

    //set state for student data fetched
    const [studentList, setStudentList] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/students`);
            const data = await response.json();
            setStudentList(data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

    return (
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Student ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Grade</th>
            <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>May 11, 2000</td>
            <td>9</td>
            <td>markotto@mail.com</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            </tr> */}
            {studentList.map((student) => {
                let dob = student.birthdate.split("T")[0]
                return (
                    <tr key={student.studentid}>
                        <td>{student.studentid}</td>
                        <td>{student.firstname}</td>
                        <td>{student.lastname}</td>
                        <td>{dob}</td>
                        <td>{student.grade}</td>
                        <td>{student.email}</td>
                    </tr>
                );
            })}
        </tbody>
        </Table>
    );
}

export default MyTable;