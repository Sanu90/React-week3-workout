import React from "react";

import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Below is counter component and it uses redux.</h4>
      <p>Counter: {count}</p>
      <button
        style={{ backgroundColor: "grey" }}
        onClick={() => {
          dispatch({
            type: "add",
          });
        }}
      >
        +
      </button>{" "}
      <button
        style={{ backgroundColor: "grey" }}
        onClick={() => {
          dispatch({ type: "sub" });
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
