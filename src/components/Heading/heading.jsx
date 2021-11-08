import React, { useState } from "react";
import Navbar from "../navbar/navbar.component";
import Sidebar from "../navbar/sidebar";

const Heading = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </div>
  );
};

export default Heading;
