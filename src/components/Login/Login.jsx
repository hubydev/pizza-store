import React, { Component } from "react";
import firebase from "firebase";
import { FaGithub, FaFacebook } from "react-icons/fa";
import base, { firebaseApp } from "../../base";
import "./Login.scss";

class Login extends Component {
  state = {
    user: null
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(authData => {
        this.ref = base.post(authData.user.uid, {
          data: { user: authData.user.uid }
        });
        localStorage.setItem("authToken", authData.user.uid);
        this.props.history.push(`/`);
      });
  };

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
              </p>
            </div>
            <div className="login-form-content">
              <>
                <button
                  className="btn-github"
                  onClick={() => this.authenticate("Github")}
                >
                  <FaGithub size={18} />
                  &nbsp;&nbsp;LOGIN WITH GITHUB
                </button>
                <button
                  className="btn-facebook"
                  onClick={() => this.authenticate("Facebook")}
                >
                  <FaFacebook size={18} />
                  &nbsp;&nbsp;LOGIN WITH FACEBOOK
                </button>
              </>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
