import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import FirstPage from "./Components/firstPage";

function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(25);
  const addRef = useRef();

  useEffect(() => {
    setAge((prev) => prev + 1);
  }, [count]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const display = (e, message) => {
    const value = e.target.value;
    console.log(message + " -" + value);
  };

  return (
    <div className="App">
      <div ref={addRef}>MY Address</div>
      <FirstPage name={age} count={count} />
      <button onClick={increment}>Increment</button>
      <input
        name="userid"
        id="myinput"
        placeholder="username"
        onChange={(e) => display(e, "hello")}
      />
    </div>
  );
}

export default App;
