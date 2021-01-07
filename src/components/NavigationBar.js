import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import  styled  from 'styled-components';
import logo  from '../assets/rinfe-logo.png'


const Styles = styled.div`
  .navbar {
    background-color: #45b6d9;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #FFF;
  }

  &:hover {
    color: #000;
  }
`;

export const NavigationBar = () => (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/"><img width="290" src={logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item><Nav.Link href="/" className="font-weight-bolder ">Home   &nbsp;  &nbsp;|</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/about" className="font-weight-bolder">About   &nbsp;  &nbsp;|</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/projects" className="font-weight-bolder">Projects   &nbsp;  &nbsp;|</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/Mission" className="font-weight-bolder">Mission   &nbsp;  &nbsp;|</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/Services" className="font-weight-bolder">Services   &nbsp;  &nbsp;| </Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/Contact" className="font-weight-bolder">Our People   &nbsp;  &nbsp;|</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/Contact" className="font-weight-bolder">Contact  &nbsp;  &nbsp; </Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
  );
