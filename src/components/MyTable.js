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
      <div className='student-list'>
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
      </div>
        
    );
}

export default MyTable;