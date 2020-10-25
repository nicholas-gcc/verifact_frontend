import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Button } from "react-bootstrap";

export default (props) => {
  return <CustomNavbar sticky="top" collapseOnSelect expand="md" >
    <Navbar.Brand href="/" style={{ color: "#30323D" }}>SG VERIFACT</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" style={{ backgroundColor: 'white', width: '100px' }}>
      <Nav className="mr-auto"></Nav>
      <Nav style={{ alignItems: 'center' }}>
        <Nav.Link style={{ color: "#30323D" }} href="login">Log In</Nav.Link>
        <Nav.Link style={{ color: "#30323D" }} href="signup">
          Sign Up
          </Nav.Link>
        <Nav.Link href="/askquestion" >
          <CustomButton >Ask a Question</CustomButton>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </CustomNavbar >
};

const CustomNavbar = styled(Navbar)`
  background-color: white;
  height: 59px;
  padding: 0px 30px;
  font-family: SF Pro Text;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
`;

const CustomButton = styled(Button)`
  background-color: #EEF0F2;
  color: #30323D;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  transition-duration: 0.4s;
  font-weight: bold;
  font-size: 14px;

  &:hover{
    background-color: lightgrey;
    color: #30323D;
  }
`;
