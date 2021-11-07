import React from "react";
import pimage from "../../assets/pimage.png";
import aimage from "../../assets/bg-about.webp";
// import Video from "../../videos/video1.mp4";
import { Link } from "react-router-dom";

import "./aboutpage.styles.scss";

const Aboutpage = () => (
  <div className="about">
    <div
      style={{
        backgroundImage: `url(${aimage})`,
        backgroundSize: "cover",
      }}
      className="content"
    >
      <div
        style={{
          backgroundImage: `url(${pimage})`,
          backgroundSize: "cover",
        }}
        className="circle"
      ></div>
      <h1 className="title">Rabin Karki</h1>
      <span className="subtitle">
        My name is Rabin. I am located in Japan, Okinawa. I am a react
        developer.
        <br /> I have been learning programming since 2019.
        <br />
        I am passionate about learning new things and consider myself a fast
        learner.
        <br />
        Let me know If you want to know more about me.
      </span>
      <div
        style={{
          paddingTop: "50px",
          textTransform: "uppercase",
        }}
      >
        <Link to="/contact">
          {" "}
          <button>Contact Me</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Aboutpage;
