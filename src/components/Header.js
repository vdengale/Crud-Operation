import React from 'react'
import { Navbar, Container, Nav, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {


  return (
    <div>
      {/* ----------------- */}
      <Navbar bg="success" expand="lg">
        <Container fluid>
          <Navbar.Brand style={{ color: 'black' }} href="#"> {' '}
            Employee Data
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link to="/" className="nav-item"> <Link style={{ color: 'black' }} to="/">Home</Link></Nav.Link>
              <Nav.Link to="/addUser" className="nav-item"> <Link style={{ color: 'black' }} to="/addUser">AddUser</Link></Nav.Link>
              <Nav.Link to="/searchuser" className="nav-item"> <Link style={{ color: 'black' }} to="/searchuser">SearchUser</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
