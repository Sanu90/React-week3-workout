/* eslint-disable react/prop-types */
// import React from "react";

function Home(props) {
  const display = () => {
    console.log("Display function is invoked");
    props.child2Parent("212");
  };

  return (
    <div>
      <button
        onClick={display}
        style={{ cursor: "pointer", backgroundColor: "pink" }}
      >
        Home
      </button>
    </div>
  );
}

export default Home;
