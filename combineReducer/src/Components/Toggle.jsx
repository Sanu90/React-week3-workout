import React from "react";
import "./Toggle.css";
import { useDispatch, useSelector } from "react-redux";

function Toggle() {
  const togg = useSelector((state) => state.toggle);
  console.log("Toggle value is--->", togg);

  const dispatch = useDispatch();
  return (
    <div>
      <h4>Below is toggle component and it uses redux.</h4>
      {togg ? (
        <div className="testDiv" style={{ backgroundColor: "red" }}></div>
      ) : (
        <div className="testDiv" style={{ backgroundColor: "green" }}></div>
      )}
      <br></br>
      <button
        className="toggleButton"
        onClick={() => {
          dispatch({
            type: "toggle",
            payload: true,
          });
        }}
      >
        Toggle Color
      </button>
    </div>
  );
}

export default Toggle;
