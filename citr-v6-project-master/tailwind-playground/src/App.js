import { useState, StrictMode } from "react";
import { render } from "react-dom";
import Wrapper from "./components/Wrapper";

const App = () => {
  return <Screen value="0" />;
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
