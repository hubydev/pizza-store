import React, { Component } from "react";
import "./App.scss";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";
import Inventory from "../Inventory/Inventory";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Menu />
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
