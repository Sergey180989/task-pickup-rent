import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink exact to="/" className="nav-link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/catalog" className="nav-link" activeClassName="active">
        Catalog
      </NavLink>
      <NavLink to="/favorites" className="nav-link" activeClassName="active">
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigation;