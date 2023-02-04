import React from "react";
import ABC from "./abc";
import "./Firstpage.css";

const FirstPage = (props) => {
  const id = 2;
  const h2color = {
    fontWeight: "bold",
    color: "yellow",
    backgroundColor: "black",
  };
  return (
    <>
      <div className="firstpage">
        <h1 style={{ color: "red", backgroundColor: "green" }}>First Page</h1>
        <h2 style={h2color}>user id: {id} </h2>
        <em>name: {props.name}</em>
        <br />
        <b>count: {props.count}</b>
      </div>
      <ABC />
    </>
  );
};

export default FirstPage;
