import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import FirstPage from "./Components/firstPage";
import ABC from "./Components/firstPage/abc";

function App() {
  const name = "ram";
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <FirstPage name={name} count={count} />
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
