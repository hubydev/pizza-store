import React, { Component } from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import "./Login.scss";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-container">
          <div className="login-form">
            <div className="login-header">
              <img src="/images/logo.png" height="150" alt="pizza store" />
              <h1 className="login-header-h1">Pizza Store</h1>
              <p className="login-header-tagline">
                Create and manage your pizza inventory and orders more easily
                than ever.
              </p>
            </div>
            <div className="login-buttons">
              <button className="btn-github">
                <FaGithub size={18} />
                &nbsp;&nbsp;LOGIN WITH GITHUB
              </button>
              <button className="btn-facebook">
                <FaFacebook size={18} />
                &nbsp;&nbsp;LOGIN WITH FACEBOOK
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
