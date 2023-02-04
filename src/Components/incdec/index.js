import React from "react";

const INCDEC = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(25);
  const addRef = useRef(null);
  const prevData = useRef("no data");

  useEffect(() => {
    setAge((prev) => prev + 1);
  }, [count]);
  const increment = () => {
    prevData.current = { age: age, count: count };
    setCount((prev) => prev + 1);
  };

  const display = (e, message) => {
    const value = e.target.value;
    console.log(message + " -" + value);
  };

  const clickRef = (clr) => {
    addRef.current.style.background = clr;
    console.log(prevData.current);
  };
  return (
    <>
      <div ref={addRef} className="firstpage">
        MY Address
      </div>
      <button onClick={increment}>Increment</button>
      <input
        name="userid"
        id="myinput"
        placeholder="username"
        onChange={(e) => display(e, "hello")}
      />
      <br />
      <button onClick={() => clickRef("green")}> Click ref</button>
    </>
  );
};

export default INCDEC;
