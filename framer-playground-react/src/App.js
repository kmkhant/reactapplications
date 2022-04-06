import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { render } from "react-dom";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="text-center text-white">hi, there</div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
