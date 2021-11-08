import React from "react";
import styled from "styled-components";
// import pimage from "../../assets/pimage.png";
// import aimage from "../../assets/bg-about.webp";
import Video from "../../videos/video1.mp4";
// import { Link } from "react-router-dom";

import "./aboutpage.styles.scss";

const HeroContainer = styled.div`
background:#0c0c0c;
display:flex;
justify-content:center;
align-items:center;
padding 0 38px;
height:800px;
position:relative;
z-index:1;

`;
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: none;
`;
const VideoBg = styled.video`
  width: 95%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  align-item: center;
`;

const HeroH1 = styled.h1`
  color: #fff;
  font-size: 32px;
  text-align: center;
  @media screen and (max-width: 760px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
const HeroP = styled.p`
  color: #fff;
  font-size: 29px;
  text-align: center;
  @media screen and (max-width: 760px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const Aboutpage = () => (
  <HeroContainer>
    <HeroBg>
      <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
    </HeroBg>
    <HeroContent>
      {/* <HeroImage></HeroImage>> */}
      <HeroH1>Rabin Karki</HeroH1>
      <HeroP>
        My name is Rabin. I am located in Japan, Okinawa. I am a self-taught
        react developer.
        <br /> I have been learning programming since 2019.
        <br />
        I am passionate about learning new things and consider myself a fast
        learner.
        <br />I consider myself as a fast learner.
      </HeroP>
    </HeroContent>
  </HeroContainer>
  // <div className="about">
  /* <div
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
        My name is Rabin. I am located in Japan, Okinawa. I am a self-taught
        react developer.
        <br /> I have been learning programming since 2019.
        <br />
        I am passionate about learning new things and consider myself a fast
        learner.
        <br />I consider myself as a fast learner.
      </span>
      <div
        style={{
          paddingTop: "50px",
          textTransform: "uppercase",
        }}
      > */
  /* <Link to="/contact">
          {" "}
          <button>Contact Me</button>
        </Link> */
  // </div>
  //     </div>
  //   </div>
);

export default Aboutpage;
