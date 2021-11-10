import React from "react";
import firebase from "firebase/compat";
import "./blog-body.styles.scss";
// import UploadImage from "../uploadImages";

export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.remove();
    // const storageRef = firebase.storage().ref("images").child(imageUrl.id);
    // const imageRef = firebase
    //   .database()
    //   .ref("Todo")
    //   .child("image")
    //   .child(imageUrl);
    // storageRef.delete().then(() => {
    //   imageRef.remove();
    // });
  };

  // const deleteImage = (id) => {
  //   const storageRef = firebase.storage().ref("images").child(id);
  //   const imageRef = firebase.database().ref("Todo").child("image").child(id);
  //   storageRef.delete().then(() => {
  //     imageRef.remove();
  //   });
  // };

  return (
    <div className="blog-body">
      <img className="img" src={todo.imageUrl} alt="" />

      <h1 className="blog-title">{todo.title}</h1>
      <h2 className="blog-content">{todo.body}</h2>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}
