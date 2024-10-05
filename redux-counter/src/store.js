import { createStore } from "redux";

const initialValue = {
  value: 0,
};

const counterReducer = (prevState = initialValue, action) => {
  console.log("action inside reducer->", action);

  switch (action.type) {
    case "increment":
      return { ...prevState, value: prevState.value + 1 };

    case "decrement":
      return { ...prevState, value: prevState.value - 1 };

    default:
      return prevState;
  }
};

const store = createStore(counterReducer);

export default store;
