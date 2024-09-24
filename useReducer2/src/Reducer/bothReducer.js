// import React from 'react'

function bothReducer(state, action) {
  console.log("hello hello", action.type);

  // there is a general pattern followed while using action. Action should be always an object.
  // one property in object is 'type'... this is optional only
  switch (action.type) {
    case "change-value":
      return {
        ...state,
        value: state.value + action.payload,
      };

    case "change-color":
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
}

export default bothReducer;
