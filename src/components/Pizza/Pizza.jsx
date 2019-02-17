import React from "react";
import "./Pizza.scss";

class Pizza extends React.Component {
  render() {
    return (
      <li className="pizza">
        <div className="pizza-img">
          <img src="/images/greek.png" alt="greek" />
        </div>
        <h3 className="pizza-name">
          Greek
          <span className="pizza-price">$10.00</span>
        </h3>
        <p className="pizza-desc">I am a pizza description</p>
        <button className="btn-order">ADD TO ORDER</button>
      </li>
    );
  }
}

export default Pizza;
