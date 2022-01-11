import React from "react";

export default function Resume() {
  const h1 = {
    fontSize: "50px",
    padding: "15px 15px 15px 15px",
  };

  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignText: "center",
    backgroundColor: "#a2a8d3",
  };

  return (
    <div style={divStyle}>
      <div>
        <h1 style={h1}>Resume</h1>
        <p>
          Download my <a href={require("../../assets/Celeste Farris Resume.pdf")}>Resume</a>
        </p>
</div>
</div>
);
}
       
