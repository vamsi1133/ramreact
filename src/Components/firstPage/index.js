import React, { useEffect } from "react";

const FirstPage = (props) => {
  const id = 2;
  return (
    <>
      <h1>First Page</h1>
      <h2>user id: {id} </h2>
      <em>name: {props.name}</em>
      <br />
      <b>count: {props.count}</b>
    </>
  );
};

export default FirstPage;
