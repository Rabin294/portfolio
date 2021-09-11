import React from "react";
import pimage from "../../assets/pimage.png";

import "./aboutpage.styles.scss";

const Aboutpage = () => (
  <div className="content">
    <div
      style={{
        backgroundImage: `url(${pimage})`,
        backgroundSize: "cover",
      }}
      className="circle"
    ></div>
    <h1 className="title">Rabin Karki</h1>
    <span className="subtitle">
      My name is Rabin. I am a react developer.
      <br /> I have been learning programming since 2019.
      <br />
      Let me know If you want to know more about me.
    </span>
  </div>
);

export default Aboutpage;
