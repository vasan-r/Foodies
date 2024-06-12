import React from "react";
import ReactDOM from "react-dom/client";

const Component = () => (
  <h1>This is react component</h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component></Component>);
