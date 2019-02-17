import React from "react";
import "./Pizza.scss";

class Pizza extends React.Component {
  render() {
    return (
      <li className="pizza">
        {/* <img src={image} alt={name} />
        <h3 className="pizza-name">
          {name}
          <span className="pizza-price"></span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button> */}
      </li>
    );
  }
}

export default Pizza;
