import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 760px) {
    grid-template-rows: repeat(6, 80px);
  }
`;
const SidebarLink = styled(Link)`
  border-radius: 50xp;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 22px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #010606;
    background: #fff;
    transition: all 0.2s ease-in-out;
  }
`;
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={toggle}>
            ABOUT
          </SidebarLink>
          <SidebarLink to="/projects" onClick={toggle}>
            PROJECTS
          </SidebarLink>
          <SidebarLink to="/skills" onClick={toggle}>
            SKILLS
          </SidebarLink>
          <SidebarLink to="/blog" onClick={toggle}>
            BLOG
          </SidebarLink>
          <SidebarLink to="/contact" onClick={toggle}>
            CONTACT
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
