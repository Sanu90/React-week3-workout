import { createStore, combineReducers } from "redux";

const initialState = {
  value: 0,
  toggle: true,
};

// const appReducer = (state = initialState, action) => {
//   console.log("action is-->", action);
//   switch (action.type) {
//     case "add":
//       return {
//         ...state,
//         value: state.value + 1,
//       };
//     case "sub":
//       return {
//         ...state,
//         value: state.value - 1,
//       };
//     case "toggle":
//       return {
//         ...state,
//         toggle: !state.toggle,
//       };
//     default:
//       return state;
//   }
// };

const appReducer = combineReducers({
  value: counterReducer,
  toggle: toggleReducer,
});

function counterReducer(state = 0, action) {
  console.log("counter state value", state);

  switch (action.type) {
    case "add":
        return state + 1;
    case "sub":
        return state - 1;
    default:
      return state;
  }
}

function toggleReducer(state = initialState.toggle, action) {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        toggle: !state.toggle,
      };
    default:
      return state;
  }
}

const store = createStore(appReducer);

export default store;
