import { CHANGE_NAME, INCREMENT_DECREMENT } from "../utils";

const initialState = {
  count: 0,
  name: "vamsi",
};

const countReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case INCREMENT_DECREMENT:
      return { ...state, count: data };
    case CHANGE_NAME:
      return { ...state, name: data };
    default:
      return state;
  }
};

export default countReducer;
