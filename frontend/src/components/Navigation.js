import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Navigation = () => (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-Auction</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Fetch Product Details</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
);

export default Navigation;