import { Button, Input } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../../store/actions/userCountAction";
import { CHANGE_NAME } from "../../store/utils";

function ReduxDemo(props) {
  const dispatch = useDispatch();
  const count = useSelector(({ userCount }) => userCount.count);
  const name = useSelector(({ userCount }) => userCount.name);

  const handleChange = (e) => {
    dispatch({ type: CHANGE_NAME, payload: e.target.value });
  };

  const handleCounter = (e) => {
    const actionType = e.target.name;
    if (actionType === "inc") dispatch(incrementCounter(count));
    else dispatch(decrementCounter(count));
  };

  return (
    <>
      <Container>
        <Input value={name} onChange={handleChange} />
        <Button name="inc" onClick={handleCounter}>
          +
        </Button>
        <Button name="dec" onClick={handleCounter}>
          -
        </Button>
        <div>
          <h5>{name}</h5>
          <h5>{count}</h5>
        </div>
      </Container>
    </>
  );
}

export default ReduxDemo;
