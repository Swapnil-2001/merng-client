import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
function Loading() {
  //other logic
  return (
    <div>
      <Loader
        type="Puff"
        color="#206a5d"
        height={100}
        width={100}
        timeout={40000}
        style={{
          position: "fixed",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      />
    </div>
  );
}

export default Loading;
