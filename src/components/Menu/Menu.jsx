import React from "react";
import "./Menu.scss";
import Pizza from "../Pizza/Pizza";

const Menu = props => (
  <div className="menu">
    <div className="menu-header">
      <img src="/images/logo.png" height="150" alt="pizza store" />
      <h1 className="login-header-h1">Pizza Store</h1>
    </div>
    <div className="menu-list">
      <ul className="menu-list-content">
        <Pizza />
        <Pizza />
        <Pizza />
      </ul>
    </div>
  </div>
);

Menu.propTypes = {};

export default Menu;
