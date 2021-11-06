import React, { useState } from "react";
import firebase from "../../../utils/firebase";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import "./form.styles.scss";

export default function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [imageUrl, setImageUrl] = useState([]);

  // ::::::::::::::::::::::::::::::
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

  //   const getImageUrl = () => {
  //     const imageRef = firebase.database().ref("images").child("daily");
  //     imageRef.on("value", (snapshot) => {
  //       const imageUrls = snapshot.val();
  //       const urls = [];
  //       for (let id in imageUrls) {
  //         urls.push({ id, url: imageUrls[id] });
  //       }
  //       const newState = [...imageUrl, ...urls];
  //       setImageUrl(newState);
  //     });
  //   };

  // ::::::::::::::::::::::::::::::

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

  // export default function Form() {
  //   const [title, setTitle] = useState('');

  //   const handleOnChange = (e) => {
  //     setTitle(e.target.value);
  //   };
  //   const createTodo = () => {
  //     const todoRef = firebase.database().ref('Todo');
  //     const todo = {
  //       title,
  //       complete: false,
  //     };

  //     todoRef.push(todo);
  //   };
  //   return (
  //     <div>
  //       <input type="text" onChange={handleOnChange} value={title} />
  //       <button onClick={createTodo}>Add Todo</button>
  //     </div>
  //   );
  // }
  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      body,
      // complete: false,
      imageUrl,
    };

    todoRef.push(todo);
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
            <h1>Upload imgae</h1>
            <input type="file" accept="image/*" onChange={readImages} />

            {imageUrl
              ? imageUrl.map(({ id, url }) => {
                  return (
                    <div key={id}>
                      <img src={url} alt="" />
                    </div>
                  );
                })
              : ""}
          </div>
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
