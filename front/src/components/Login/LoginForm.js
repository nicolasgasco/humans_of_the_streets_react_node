import "./LoginForm.css";
import WhiteButton from "../UI/WhiteButton";
import { useState } from "react";

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
          props.handleModalMessage("Welcome back!");
          setUser({ email: "", password: "" });
          props.onLogin(true);
          sessionStorage.setItem("user", result.user._id);
          props.toggleLoginFormVisibility();
        } else {
          props.handleModalMessage("Wrong user or password!");
          setUser({ email: "", password: "" });
        }
      })
      .catch(function (error) {
        console.log("An error occurred: " + error.message);
        props.handleModalMessage("Something went wrong :( Try again.");
      });
  };

  const handleUsername = (username) => {
    setUser((prevData) => {
      return { ...prevData, email: username.trim() };
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
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="email"
              name="username"
              id="username"
              autoComplete="email"
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
              autoComplete="current-password"
              required
              value={user.password}
              onChange={(e) => {
                handlePassword(e.target.value);
              }}
            />
          </div>
        </div>
        <WhiteButton type="submit" className="login-button" text="Login" />
      </form>
      <p className="white-text">
        Are you new?{" "}
        <span
          onClick={props.toggleSignupFormVisibility}
          className="signup-link"
        >
          Sign up
        </span>{" "}
        instead.
      </p>
    </div>
  );
};

export default LoginForm;
