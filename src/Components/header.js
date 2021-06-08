import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";


const Header = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg" className="nav-bar">
        <Navbar.Brand href="#home">
          <img className="w-25" src="logo.jpg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto d-flex justify-content-between w-100">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#buy">Buy/Sell</Nav.Link>
            <Nav.Link href="#farrier">Farriers</Nav.Link>
            <Nav.Link href="#track">Tack Shop</Nav.Link>
            <Nav.Link href="#transport">Transporters</Nav.Link>
            <Form inline className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button variant="outline-success">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
