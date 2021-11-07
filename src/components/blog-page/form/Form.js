import React, { useState } from "react";
import firebase from "../../../utils/firebase";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import "./form.styles.scss";

export default function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState([]);

  const readImages = async (e) => {
    const file = e.target.files[0];
    const id = uuid();
    const storageRef = firebase.storage().ref("images").child(id);

    await storageRef.put(file);
    storageRef.getDownloadURL().then((url) => {
      setImageUrl(url);
    });
  };

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
      imageUrl,
    };

    todoRef.push(todo);

    // {todo.title ? todoRef.push : console.log("Required field is empty")
  };
  return (
    <div className="blog-form">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
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
          <div>
            <h4>Upload imgae</h4>
            <input type="file" accept="image/*" onChange={readImages} />
          </div>
          <input
            onChange={handleOnChangeT}
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            value={title}
            required
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
