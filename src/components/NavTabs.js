import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function NavBar(props) {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg='dark' variant='dark'
        sticky='top' expand='md' collapseOnSelect>
        <Navbar.Brand href="/">
          TableTop
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href='/About'>About</Nav.Link>
            <Nav.Link href='/Community'>Community</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </>
  );
}
