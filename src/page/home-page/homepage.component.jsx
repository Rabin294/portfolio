import React from "react";
import "./homepage.styles.scss";
// import bimage from "../../assets/bimage.png";

import backgroundVideo from "../../videos/video.mp4";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <video
        className="menu-item"
        autoPlay
        loop
        muted
        src={backgroundVideo}
        type="video/mp4"
      ></video>
      <h1
        style={{
          height: "440px",
          width: "100%",
          color: "black",
          backgroundColor: "white",
          fontSize: "87px",
          textAlign: "center",
          // paddingRight: "560px",
        }}
      >
        Welcome to my Portfolio!!
      </h1>

      {/* <div
        style={{
          backgroundImage: `url(${bimage})`,
          backgroundSize: "cover",
        }}
        className="menu-item"
      >
        <h1 style={{
            textColor: "white",
            fontSize: "87px",
            textAlign: "center",
            paddingRight: "560px",
          }}
        </h1>
      </div> */}
    </div>
  </div>
);

export default HomePage;
