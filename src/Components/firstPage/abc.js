import React from "react";
import Classes from "./abc.module.css";
import { useSelector } from "react-redux";

const ABC = (props) => {
  const name = useSelector(({ userCount }) => userCount.name);
  return (
    <>
      <h1 className={Classes.firstpage}>State data : {props.data}</h1>
      <h1 className={Classes.firstpage}>redux data: {name}</h1>
    </>
  );
};

export default ABC;
