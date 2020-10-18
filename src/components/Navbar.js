import React from "react";
import styled from "styled-components";
import {Navbar, Nav, Button} from "react-bootstrap";

export default (props) => {
  return <CustomNavbar sticky="top" collapseOnSelect expand="md" >
      <Navbar.Brand href="/" style={{font:"EB Garamond", fontWeight:'800', fontSize:"19px"}}>SG VERIFACT</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav  style={{alignItems: 'center'}}>
          <Nav.Link href="login" style={{color:'black'}}>Log In</Nav.Link>
          <Nav.Link href="signup" style={{color:'black'}}>
            Sign Up
          </Nav.Link>
          <Nav.Link href="/askquestion" >
          <CustomButton >Ask a Question</CustomButton>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </CustomNavbar>
};

const CustomNavbar = styled(Navbar)`
  background: white;
  height: 59px;
  padding: 0px 30px;
  font-family: SF Pro Text;
  font-weight: bold;
  font-size: 14px;
  color:black;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
`;

const CustomButton = styled(Button)`
  background: #EEF0F2;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  transition-duration: 0.4s;
  font-weight: bold;
  font-size: 14px;

  :hover{
    background-color: lightgrey;
    color:black;
  }
`;
