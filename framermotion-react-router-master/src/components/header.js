import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row space-between">
          <div className="border-2 border-black border-dashed p-2 hover:bg-black hover:text-white">
            <Link to="/">HOME</Link>
          </div>
          <div className="flex space-x-4">
            <div className="border-b-2 border-black border-dashed hover:border-white hover:text-white">
              <Link to="/model/khaingmyelkhant">ABOUT</Link>
            </div>
            <div className="border-b-2 border-black border-dashed hover:border-white hover:text-white">
              <Link to="/model/khaingmyelkhant">PORTFOLIO</Link>
            </div>
            <div className="border-b-2 border-black border-dashed hover:border-white hover:text-white">
              SKILLS
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
