import React, { useState } from "react";
import { Link } from "react-router-dom";
import ABC from "./abc";
import "./Firstpage.css";

const FirstPage = (props) => {
  const [showABC, setShowABC] = useState(false);
  const id = 2;
  const h2color = {
    fontWeight: "bold",
    color: "yellow",
    backgroundColor: "black",
  };

  const handleDisplay = () => {
    if (showABC) {
      setShowABC((prev) => !prev);
    } else setTimeout(() => setShowABC((prev) => !prev), 3000);
  };

  const DisplayElement = () => {
    if (showABC) {
      return <ABC />;
    }
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
      <Link to={"/profiles"}>Go to Profiles</Link>
      <br />
      {/* {showABC ? <ABC /> : <>123</>} */}
      {/* {showABC && <ABC />} */}
      {/* <DisplayElement /> */}
      {DisplayElement()}
      <button onClick={handleDisplay}>Show ABC</button>
    </>
  );
};

export default FirstPage;
