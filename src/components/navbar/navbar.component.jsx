import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg"; //Special syntax in React for importing SVG
// import Logo from "../../assets/homepage.png";

import "./navbar.styles.scss";

const Nav = styled.nav`
  background: #000;

  height: 80px;
  width: 99.4%;
  align-self: center;
  // margin-top:-80px
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  font-size: 1.5rem;
  top: 0;
  z-index: 10;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    transition: 0.8s all ease;
    width: 93%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    //Put your CSS here for 768px to 1024px width devices(covers all width between 768px to 1024px //
    transition: 0.8s all ease;
    width: 98.5%;
  }
  // @media only screen and (min-width: 200px) and (max-width: 767px) and (orientation: portrait) {
  //   //Put your CSS here for 200px to 767px width devices (cover all mobile portrait width //
  //   transition: 0.8s all ease;
  //   width: 98.5%;
  // }
  // @media screen and (max-width: 768px) {
  //   transition: 0.8s all ease;
  //   width: 9.5%;
  // }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 98%;
  max-width: 1100px;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    transition: 0.8s all ease;
    width: 91%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    //Put your CSS here for 768px to 1024px width devices(covers all width between 768px to 1024px //
    transition: 0.8s all ease;
    width: 89.5%;
  }
  // @media screen and (max-width: 960px) {
  //   transition: 0.8s all ease;
  //   width: 91%;
  // }
`;

const NavLogo = styled(Link)`
  cursor: pointer;
  color: white;
  justify-self: flex-start;
  display: flex;
  align-item: center;

  font-size: 2rem;
  padding-top: 15px;
  // margin-right: 24px;
  font-weight: bold;

  // backgroundimage: "url(${Logo})";
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
const NavMenu = styled.ul`
  width: 50%;
  height: 100%;
  color: white;
  list-style: none;
  display: flex;
  align-items: center;
  margin-right: -22px;
  justify-content: flex-end;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
const NavItem = styled.li`
  height: 80px;
`;
const NavLinks = styled(Link)`
  color: white;
  margin-top: 12px;
  padding: 10px 30px;
  @media screen and (max-width: 800px) {
    padding: 6px;
    font-size: medium;
  }
`;

const Navbar = ({ toggle }) => (
  <Nav>
    <NavbarContainer>
      <NavLogo to="/">HOME</NavLogo>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks to="/about">ABOUT</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/projects">PROJECTS</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/skills">SKILLS</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/blog">BLOG</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to="/contact">CONTACT</NavLinks>
        </NavItem>
      </NavMenu>
    </NavbarContainer>
  </Nav>
);

export default Navbar;
