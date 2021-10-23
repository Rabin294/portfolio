import React from "react";
import { Link } from "react-router-dom";
import TodoList from "./blog-list";
import UploadImage from "./uploadImages";

// import Form from "./form/Form";

// import "./blog.styles.scss";

// const Blogpage = () => (
//   <div className="blog">
//     <div className="blog-menu">
//       <div className="blog-item">
//         <div className="blog-content">
//           <h1 className="blog-title"> Day 1</h1>
//           <span className="blog-subtitle">Write here.</span>
//         </div>
//       </div>
//       <div className="blog-item">
//         <div className="blog-content">
//           <h1 className="blog-title"> Day 2</h1>
//           <span className="blog-subtitle">Write here.</span>
//         </div>
//       </div>
//       <div className="blog-item">
//         <div className="blog-content">
//           <h1 className="blog-title"> Day 3</h1>
//           <span className="blog-subtitle">
//             Redux:
//             <br /> Action goes into root-reducer, that updates the store and
//             finally the DOM gets changed in the right component.
//             <br /> We need to install Redux and Redux bindings for React. We
//             also need the Redux Lugger Middle ware. <br />
//             [npm add redux redux-logger react-redux] <br />
//             Index.js is the file where we will put the new component that we get
//             from react-redux, that will give our application access to reducers
//             and store. "Provider" is the component that we get from react-redux
//             and is the parent componet that we get access to everything.Now that
//             we have our provider, we actually need to write the store itself.we
//             are going to make a new folder inside of our source called Redox,
//             and inside of here it will be all the code related to our redux that
//             we're going to write. Redux is used in big applications.
//           </span>
//         </div>
//       </div>
//       <div className="blog-item">
//         <div className="blog-content">
//           <h1 className="blog-title"> Day 4</h1>
//           <span className="blog-subtitle">
//             React Hooks: <br />
//             We can't use hooks in Class components. We can only use it in
//             functional components. We only get access if the react version is
//             16.8.6 or higher. <br />
//             ①useState: <br />
//             ②useEffect: It give us ability to fire the side effects.
//             <br />
//             ③useState:
//             <br />
//           </span>
//         </div>
//       </div>
//       <div className="blog-item">
//         <div className="blog-content">
//           <h1 className="blog-title"> Day 5</h1>
//           <span className="blog-subtitle">
//             GraphQL:
//             <br />
//             GraphQL is actually a server language,that wraps around an existing
//             database or server that you can make requests against in a different
//             way from the way that we have been up until this point.
//             <a
//               style={{
//                 textDecoration: "underline",
//                 color: "blue",
//               }}
//               target="blank"
//               href="https://graphql.org/"
//             >
//               Click here to learn moer.
//             </a>
//           </span>
//         </div>
//       </div>
//       <div className="blog-item">
//         <div className="blog-content">
//           <h1 className="blog-title"> Day 6</h1>
//           <span className="blog-subtitle">
//             GatsbyJS Blog:
//             <br />
//             Gatsby enables developers to build fast, secure, and powerful
//             websites using a React-based framework and innovative data layer
//             that makes integrating different content, APIs, and services into
//             one web experience incredibly simple.
//             <a
//               style={{
//                 textDecoration: "underline",
//                 color: "blue",
//               }}
//               target="blank"
//               href="https://www.gatsbyjs.com/"
//             >
//               Click here to learn moer.
//             </a>
//           </span>
//         </div>
//       </div>
//       <div className="blog-item">
//         <div className="blog-content">
//           <h1 className="blog-title"> Day 7</h1>
//           <span className="blog-subtitle">
//             Sending emails using React through EmailJs:
//             <br />
//             Today I learned the way of sending email just using emailjs, without
//             using backend.
//             <a
//               style={{
//                 textDecoration: "underline",
//                 color: "blue",
//               }}
//               target="blank"
//               href="https://www.emailjs.com/"
//             >
//               Click here to learn moer.
//             </a>
//           </span>
//         </div>
//       </div>
//       <div className="blog-item">
//         <div className="blog-content">
//           <h1 className="blog-title"> Day 8</h1>
//           <span className="blog-subtitle">
//             styled-component:
//             <br />
//             Used styled-component and @media to style and make it responsive.
//             <a
//               style={{
//                 textDecoration: "underline",
//                 color: "blue",
//               }}
//               target="blank"
//               href="https://styled-components.com/docs/basics#installation"
//             >
//               Click here to learn more about styled component.
//             </a>
//             <a
//               style={{
//                 textDecoration: "underline",
//                 color: "blue",
//               }}
//               target="blank"
//               href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media"
//             >
//               Click here to learn more about @media.
//             </a>
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default Blogpage;

// *********************************************************

export default function Blogpage() {
  return (
    <div className="write">
      <h1 style={{ textAlign: "center", paddingTop: "70px" }}>
        {" "}
        Rabin's Daily Blogs
      </h1>
      <div>
        <Link className="addBlog" to="/Form">
          <button
            style={{
              // float: "left",
              marginBottom: "20px",
              marginLeft: "90px",
              color: "blue",
              cursor: "pointer",
            }}
          >
            ADD BLOG
          </button>
        </Link>
      </div>

      <UploadImage />
      <TodoList />
    </div>
  );
}
