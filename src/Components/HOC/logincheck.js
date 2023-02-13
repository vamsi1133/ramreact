import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Logincheck(props) {
  const router = useNavigate();
//   const loginFlag = localStorage.getItem("loggedIn") || false;
//   if (!loginFlag) {
//     router("/login");
//   }
  return (
    <Button
      onClick={() => {
        localStorage.setItem("loggedIn", false);
        router("/login");
      }}
    >
      Logout
    </Button>
  );
}

export default Logincheck;
