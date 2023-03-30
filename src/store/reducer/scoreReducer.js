import { GET_SCORE } from "../utils";

const initialState = {
  scores: [],
  count: 1,
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCORE:
      return { ...state, scores: action.payload };
    default:
      return state;
  }
};

export default scoreReducer;
