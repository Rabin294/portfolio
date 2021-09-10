import React from "react";
import "./homepage.styles.scss";
import bimage from "./bimage.png";
import pimage from "./pimage.jpg";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div
        style={{
          backgroundImage: `url(${bimage})`,
          backgroundSize: "cover",
        }}
        className="menu-item"
      >
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
      </div>
    </div>
  </div>
);

export default HomePage;
