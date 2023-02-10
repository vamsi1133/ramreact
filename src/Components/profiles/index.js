import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import IDCard from "./IDCard";

function Profiles(props) {
  const [userData, setUserData] = useState([]);
  const [sid, setSid] = useState("");

  useEffect(() => {
    getData();
  }, [sid]);

  const getData = async () => {
    const response = await axios.get(
      `https://63e5d15383c0e85a86875c1f.mockapi.io/users?id=${sid}`
    );
    setUserData(response.data);
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ padding: 5 }}>
        <TextField
          id="outlined-basic"
          label="Search"
          value={sid}
          variant="outlined"
          onChange={(e) => {
            setSid(e.target.value);
          }}
        />
        {userData.map((val) => {
          return <IDCard {...val} />;
        })}
      </Container>
    </>
  );
}

export default Profiles;
