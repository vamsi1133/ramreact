import axios from "axios";
import { GET_SCORE } from "../utils";

export const getScore = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://63e5d15383c0e85a86875c1f.mockapi.io/score"
    );
    dispatch({ type: GET_SCORE, payload: response.data });
  };
};
