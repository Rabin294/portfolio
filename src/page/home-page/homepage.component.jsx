import React, { useState } from "react";
import "./homepage.styles.scss";
// import bimage from "../../assets/bimage.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import backgroundVideo from "../../videos/video2.mp4";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

// const Text = styled.h1`
//   height: 170px;
//   width: 100%;
//   color: black;
//   background-color: white;
//   font-size: 87px;
//   text-align: center;
// `;

// const HomePage = () => (
//   <div className="homepage">
//     <div className="directory-menu">
//       <video
//         className="menu-item"
//         autoPlay
//         loop
//         muted
//         src={backgroundVideo}
//         type="video/mp4"
//       ></video>
//       <Text> Welcome to my Portfolio!!</Text>

//       <div
//         style={{
//           color: "black",
//           textAlign: "center",
//           cursor: "pointer",
//           paddingLeft: "720px",
//         }}
//       >
//         <Link to="/contact">
//           {" "}
//           <button>Contact Me</button>
//         </Link>
//       </div>

//       {/* <div
//         style={{
//           backgroundImage: `url(${bimage})`,
//           backgroundSize: "cover",
//         }}
//         className="menu-item"
//       >
//         <h1 style={{
//             textColor: "white",
//             fontSize: "87px",
//             textAlign: "center",
//             paddingRight: "560px",
//           }}
//         </h1>
//       </div> */}
//     </div>
//   </div>
// );

// export default HomePage;

// :::::::::::::::::::::::::::::::::::::::: Modified Using styled-component::::::::::::::::::::::::::::::::::::::::::

const HeroContainer = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding 0 38px;

  height: 860px;
  position: relative;
  z-index: 1;
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    transition: 0.8s all ease;
    width: 71.3%;
    padding: 0 46px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    //Put your CSS here for 768px to 1024px width devices(covers all width between 768px to 1024px //
    transition: 0.8s all ease;
    width: 90%;
    height: 950px;

    @media only screen and (min-width: 1023px) and (max-width: 1366px) {
      //Put your CSS here for 768px to 1024px width devices(covers all width between 768px to 1024px //
      transition: 0.8s all ease;
      width: 92%;
      height: 1300px;
    }
  }
  // @media only screen and (min-width: 200px) and (max-width: 767px) and (orientation: portrait) {
  //   //Put your CSS here for 200px to 767px width devices (cover all mobile portrait width //
  //   transition: 0.8s all ease;
  //   width: 98.5%;
  // }
  // @media screen and (max-width: 760px) {
  //   padding: 0;
  //   width: 96.4%;
  // }
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
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-item: center;
`;

const HeroH1 = styled.h1`
  color: #fff;
  font-size: 98px;
  text-align: center;
  @media screen and (max-width: 760px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroBtnWrapper = styled.div`
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontLarge }) => (fontLarge ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;

const HomePage = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={backgroundVideo} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to my portfolio!!</HeroH1>
        <HeroBtnWrapper>
          <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover}>
            Contact Me{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
export default HomePage;
