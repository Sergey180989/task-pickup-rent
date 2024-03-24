import React from "react";
import "./Header.css";
import { Navigation } from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="styled-header">
      <Navigation />
    </header>
  );
};

export default Header;