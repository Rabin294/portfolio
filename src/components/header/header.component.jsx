import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg"; //Special syntax in React for importing SVG

import "./header.styles.scss";

const Header = () => (
  //Logo container when clicked will direct us to homepage
  <div className="header">
    <Link className="logo-container" to="/">
      HOME
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/about">
        ABOUT
      </Link>
      <Link className="option" to="/projects">
        PROJECTS
      </Link>
      <Link className="option" to="/skills">
        SKILLS
      </Link>
      <Link className="option" to="/blog">
        BLOG
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
