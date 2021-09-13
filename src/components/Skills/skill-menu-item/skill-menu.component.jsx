import React from "react";

import "./skill-menu.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} skill-item `}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    {/* <div className="skill-content">
      <h1 className="skill-title"> {title.toUpperCase()}</h1>
      <span className="skill-subtitle"></span>
    </div> */}
  </div>
);

export default MenuItem;
