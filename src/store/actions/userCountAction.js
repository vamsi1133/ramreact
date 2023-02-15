import { INCREMENT_DECREMENT } from "../utils";

export const incrementCounter = (data) => {
  return {
    type: INCREMENT_DECREMENT,
    payload: data + 1,
  };
};

export const decrementCounter = (data) => {
  return {
    type: INCREMENT_DECREMENT,
    payload: data - 1,
  };
};
