import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Components/login";
import FirstPage from "./Components/firstPage";
import ClassDemo from "./Components/classDemo";
import Profiles from "./Components/profiles";
import ReduxDemo from "./Components/reduxdemo";
import Score from "./Components/userprofie";

const CustomRouter = (props) => {
  const routes = [
    { path: "/", element: <FirstPage /> },
    { path: "/login", element: <Login /> },
    { path: "/class", element: <ClassDemo name={"roll the dice game"} /> },
    { path: "/profiles", element: <Profiles /> },
    { path: "/redux", element: <ReduxDemo /> },
    { path: "/score", element: <Score /> },
  ];

  return (
    <>
      <Router>
        <Routes>
          {routes.map((val) => (
            <Route key={val.path} path={val.path} element={val.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default CustomRouter;
