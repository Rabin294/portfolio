import React from "react";
import "./homepage.styles.scss";
import bimage from "../../assets/bimage.png";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div
        style={{
          backgroundImage: `url(${bimage})`,
          backgroundSize: "cover",
        }}
        className="menu-item"
      ></div>
    </div>
  </div>
);

export default HomePage;
