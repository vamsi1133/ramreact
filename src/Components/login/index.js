import React, { useState } from "react";

const Login = (props) => {
  const [credential, setCredentials] = useState({ username: "", password: "" });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(credential);
  };

  return (
    <>
      <div>
        <h1>Login Page</h1>
        <form onChange={handleInput}>
          <input
            name="username"
            placeholder="username"
            value={credential.username}
          ></input>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={credential.password}
          ></input>
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
