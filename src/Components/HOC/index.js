import React from "react";
import Logincheck from "./logincheck";

function LoginWrapper(Component) {
  return (props) => (
    <>
      <Logincheck />
      <Component />;
    </>
  );
}

export default LoginWrapper;
