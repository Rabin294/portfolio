import React, { useState } from "react";
import firebase from "firebase/compat";
import { Link } from "react-router-dom";

import "./form.styles.scss";

export default function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // useEffect(() => {
  //   const imageRef = firebase.database().ref("images").child("daily");
  //   imageRef.on("value", (snapshot) => {
  //     const imageUrls = snapshot.val();
  //     const urls = [];
  //     for (let id in imageUrls) {
  //       urls.push({ id, url: imageUrls[id] });
  //     }
  //     // const newState = [...imageUrl, ...urls];
  //     setImageUrl(urls);
  //   });
  // }, []);

  const handleOnChangeT = (e) => {
    setTitle(e.target.value);
  };
  const handleOnChangeB = (e) => {
    setBody(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      body,
    };

    todoRef.push(todo);
  };
  return (
    <div className="blog-form">
      {/* <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      /> */}
      <form className="writeForm">
        <div className="writeTitle">
          {/* <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            onChange={handleOnChangeT}
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            value={image}
          /> */}

          <input
            onChange={handleOnChangeT}
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            value={title}
          />
        </div>
        <div className="writeFormGroup" onChange={handleOnChangeB}>
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>

        <button onClick={createTodo} className="writeSubmit" type="submit">
          <Link to="/blog">PUBLISH</Link>
        </button>
      </form>
    </div>
  );
}
