import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';


function MyNavBar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ABC School</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Directory</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/unregister">Unregister</Nav.Link>
            <Nav.Link href="/edit">Edit</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavBar;
