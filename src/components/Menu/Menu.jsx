import React from "react";
import "./Menu.scss";

const Menu = props => (
  <div className="menu">
    <div className="menu-header">
      <img src="/images/logo.png" height="150" alt="pizza store" />
      <h1 className="login-header-h1">Pizza Store</h1>
    </div>
    <duv className="menu-content">
      <ul className="menu-list" />
    </duv>
  </div>
);

Menu.propTypes = {};

export default Menu;
