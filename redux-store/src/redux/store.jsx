import { createStore } from "redux";

const initialState = {
  value: 0,
};

function AppReducer(state = initialState, action) {
  console.log("Appreducer action", action.type);

  switch (action.type) {
    case "increment":
      return {
        ...state,
        value: state.value + 1,
      };

    case "decrement":
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
}

const store = createStore(AppReducer);

export default store;
