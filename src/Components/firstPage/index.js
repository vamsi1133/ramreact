import { Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginWrapper from "../HOC";
import ABC from "./abc";
import "./Firstpage.css";

const FirstPage = (props) => {
  const [showABC, setShowABC] = useState(false);
  const [info, setInfo] = useState("hello");
  const scores = useSelector(({ score }) => score.scores) || [];

  const id = 2;
  const h2color = {
    fontWeight: "bold",
    color: "yellow",
    backgroundColor: "black",
  };

  const handleDisplay = () => {
    setShowABC((prev) => !prev);
  };

  const DisplayElement = () => {
    if (showABC) {
      return <ABC data={info} />;
    }
  };

  return (
    <>
      <div className="firstpage">
        <h1 style={{ color: "red", backgroundColor: "green" }}>First Page</h1>
        <h2 style={h2color}>user id: {id} </h2>
        <em>name: {props.name}</em>
        <br />
        <Input value={info} onChange={(e) => setInfo(e.target.value)} />
      </div>
      <Link to={"/profiles"}>Go to Profiles</Link>
      <br />
      <Link to={"/redux"}>Go to Redux</Link>
      <br />
      <Link to={"/score"}>Go to SCORE</Link>
      <br />
      {/* {showABC ? <ABC /> : <>123</>} */}
      {/* {showABC && <ABC />} */}
      {/* <DisplayElement /> */}
      {scores.map((val) => {
        return (
          <h1>
            {val.team} :{val.score}
          </h1>
        );
      })}
      {DisplayElement()}
      <button onClick={handleDisplay}>Show ABC</button>
    </>
  );
};

export default LoginWrapper(FirstPage);
