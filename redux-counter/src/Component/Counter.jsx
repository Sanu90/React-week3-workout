import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Counter: {count}</p>
      <br></br>
      <button
        style={{ backgroundColor: "grey" }}
        onClick={() =>
          dispatch({
            type: "increment",
            payload: "this is increment",
          })
        }
      >
        Increment
      </button>
      {"  "}
      <button
        style={{ backgroundColor: "grey" }}
        onClick={() => {
          dispatch({
            type: "decrement",
            payload: "this is decrement",
          });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
