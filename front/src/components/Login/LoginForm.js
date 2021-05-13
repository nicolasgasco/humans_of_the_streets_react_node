import "./LoginForm.css";
import StandardButton from "../UI/StandardButton";
import WhiteBtnWrapper from "../UI/WhiteBtnWrapper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const submitForm = (e) => {
    e.preventDefault();
    e.target.checkValidity();

    fetch("/api/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.session) {
          window.alert("Welcome back!");
          setUser({ email: "", password: "" });
          props.onLogin(true);
        } else {
          window.alert("Wrong user or password!");
          setUser({ email: "", password: "" });
        }
      })
      .catch(function (error) {
        console.log("An error occurred: " + error.message);
      });
  };

  const handleUsername = (username) => {
    setUser((prevData) => {
      return { ...prevData, email: username };
    });
  };

  const handlePassword = (password) => {
    setUser((prevData) => {
      return { ...prevData, password: password };
    });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={submitForm}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="email"
            name="username"
            id="username"
            required
            value={user.email}
            onChange={(e) => {
              handleUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={user.password}
            onChange={(e) => {
              handlePassword(e.target.value);
            }}
          />
        </div>
        <WhiteBtnWrapper>
          <button type="submit" className="login-button">
            Login
          </button>
        </WhiteBtnWrapper>
      </form>
      <p>Are you new? <span onClick={props.toggleSignupFormVisibility} className="signup-link">Sign up</span> instead.</p>
    </div>
  );
};

export default LoginForm;
