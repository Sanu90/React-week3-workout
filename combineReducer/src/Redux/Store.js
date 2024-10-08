import { createStore } from "redux";

const initialState = {
  value: 0,
  toggle: true,
};

const appReducer = (state = initialState, action) => {
  console.log("action is-->", action);

  switch (action.type) {
    case "add":
      return {
        ...state,
        value: state.value + 1,
      };
    case "sub":
      return {
        ...state,
        value: state.value - 1,
      };
    case "toggle":
      return {
        ...state,
        toggle: !state.toggle,
      };
    default:
      return state;
  }
};

const store = createStore(appReducer);

export default store;
