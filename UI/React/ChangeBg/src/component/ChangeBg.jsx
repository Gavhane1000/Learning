import React, { useState } from "react";
import "./ChangeBg.css";

const ChangeBg = () => {
  const [color, useColor] = useState("Red");
  function changeColor(color) {
    useColor(color);
  }
  return (
    <>
      <div className="container" style={{ backgroundColor: color }}>
        <span className="text">{color}</span>
      </div>
      <div className="btn">
        <button onClick={() => changeColor("Yellow")}>Yellow</button>
        <button onClick={() => changeColor("Green")}>Green</button>
        <button onClick={() => changeColor("Blue")}>Blue</button>
      </div>
    </>
  );
};

export default ChangeBg;
