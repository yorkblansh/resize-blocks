import React from "react";
import { render } from "react-dom";
import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  background: "#f0f0f0"
};

const wrapperStyle = {
  display: "flex",
  flex: 1,
  width: 400,
  height: 400,
  background: "tomato"
};

const siblingStyle = {
  display: "flex",
  flex: 1,
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "auto",
  background: "green",
  overflow: "hidden"
};

const App = () => {
  return (
    <div style={wrapperStyle}>
      <div style={siblingStyle}>002</div>
      <Resizable
        bounds="parent"
        style={style}
        defaultSize={{
          width: 200,
          height: 200
        }}
      >
        001
      </Resizable>
    </div>
  );
};

render(<App />, document.getElementById("root"));
