import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Button } from "react-bootstrap";

export default (props) =>
{
  return <CustomNavbar sticky="top" collapseOnSelect expand="md">
    <Navbar.Brand href="/" style={{ color: '#30323D', fontSize: '1.9rem' }}>SG VERIFACT</Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse className="justify-content-end" id='responsive-navbar-nav' style={{ backgroundColor: 'white', margin: '1.1rem 0' }}>
      <Nav className='mr-auto'></Nav>
      <CustomNav>
        <Link href="login">Log In</Link>
        <Link href="signup">Sign Up</Link>
        <CustomButton href="/askquestion">Ask a Question</CustomButton>
      </CustomNav>
    </Navbar.Collapse>
  </CustomNavbar >
};

const CustomNavbar = styled(Navbar)`
  background-color: white;
  padding: 0 2.8rem;
  font-family: SF Pro Text;
  font-weight: bold;
  font-size: 1.4rem;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.08);
  
  @media (max-width: 767px) {
    padding: 1.1rem 2.8rem;
  }
`

const Link = styled.a`
  color: --var(TextPrimary);
  text-decoration: none;
`

const CustomNav = styled(Nav)`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const CustomButton = styled(Button)`
  background-color: #EEF0F2;
  color: #30323D;
  border: none;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  transition-duration: 0.4s;
  font-weight: bold;
  font-size: 1.4rem;
  &:hover{
    background-color: lightgrey;
    color: #30323D;
  }
`