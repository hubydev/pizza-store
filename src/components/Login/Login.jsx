import React, { Component } from "react";
import firebase from "firebase";
import { FaGithub, FaFacebook, FaCircleNotch } from "react-icons/fa";
import base, { firebaseApp } from "../../base";
import "./Login.scss";

class Login extends Component {
  state = {
    user: null,
    store: null,
    storeName: "",
    _loading: false
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler(user);
      }
    });
  }

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(({ user }) => {
        this.setState({ user: user.uid });
      });
  };

  authHandler = async authData => {
    const account = await base.fetch(authData.uid, { context: this });
    debugger;
    if (account && account.user && account.store) {
      this.setState({
        user: account.user,
        store: account.store
      });
      return this.props.history.push(`/store/${this.state.store}`);
    }
  };

  handleChange = e => {
    let storeName = { ...this.state.storeName };
    storeName = e.currentTarget.value;
    this.setState({ storeName });
  };

  createStore = () => {
    this.setState({ _loading: true });
    this.ref = base.post(`${this.state.user}`, {
      data: { user: this.state.user, store: this.state.storeName }
    });
    this.setState({ _loading: false });
    this.props.history.push(`/${this.state.storeName}`);
  };

  renderForm() {
    if (!this.state.user) {
      return (
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
      );
    } else if (this.state.user && this.state.store) {
      return <p>A User with a store</p>;
    } else if (this.state.user && !this.state.store) {
      return <p>A user with no store</p>;
    }
  }

  render() {
    return (
      <div className="login">
        <div className="login-container">
          <div className="login-form">
            <div className="login-header">
              <img src="/images/logo.png" height="150" alt="pizza store" />
              <h1 className="login-header-h1">Pizza Store</h1>
              <p className="login-header-tagline">
                {this.state.user
                  ? `Welcome to Pizza Store! Please enter your store name to continue:`
                  : ` Create and manage your pizza inventory and orders more easily
                than ever.`}
              </p>
            </div>
            <div className="login-form-content">
              {this.renderForm()}
              {/* {!this.state.user ? (
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
              ) : !this.state.store ? (
                <>
                  <input
                    className="input"
                    placeholder="Store Name"
                    onChange={this.handleChange}
                    disabled={this.state._loading}
                  />
                  <button className="btn-store" onClick={this.createStore}>
                    CREAT{this.state._loading ? "ING" : "E"} STORE &nbsp;&nbsp;
                    {this.state._loading ? (
                      <FaCircleNotch className="spin" size={18} />
                    ) : null}
                  </button>
                </>
              ) : null} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
