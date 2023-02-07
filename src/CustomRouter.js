import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Components/login";
import FirstPage from "./Components/firstPage";
import ClassDemo from "./Components/classDemo";

const CustomRouter = (props) => {
  const routes = [
    { path: "/", element: <FirstPage /> },
    { path: "/login", element: <Login /> },
    { path: "/class", element: <ClassDemo /> },
  ];
  return (
    <>
      <Router>
        <Routes>
          {routes.map((val) => (
            <Route path={val.path} element={val.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default CustomRouter;
