import React from "react";
import firebase from "firebase/compat";
import "./blog-body.styles.scss";

export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.remove();
  };

  return (
    <div className="blog-body">
      <h1 className="blog-title">{todo.title}</h1>
      <h2 className="blog-content">{todo.body}</h2>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}
