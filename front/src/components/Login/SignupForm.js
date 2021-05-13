import "./SignupForm.css";
import StandardButton from "../UI/StandardButton";
import WhiteBtnWrapper from "../UI/WhiteBtnWrapper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = (props) => {
  const [user, setUser] = useState({
    user: {
      name: "",
      surname: "",
      email: "",
      password: "",
      "confirm-password": "",
      checked: false,
    },
  });

  const resetSignupForm = () => {
    setUser({
      user: {
        name: "",
        surname: "",
        email: "",
        password: "",
        "confirm-password": "",
        checked: false,
      },
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    e.target.checkValidity();

    if (user.user.password !== user.user["confirm-password"]) {
      window.alert("The two passwords don't match!");
      resetSignupForm();
    } else {
      fetch("/api/signin", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: user.user.email,
          name: user.user.name,
          surname: user.user.surname,
          password: user.user.password,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            window.alert("Welcome to Humans of the Streets!");
            resetSignupForm();
          } else {
            window.alert("User is already registered!");
            resetSignupForm();
          }
        })
        .catch(function (error) {
          console.log("An error occurred: " + error.message);
        });
    }
  };

  const handleUser = (value, field) => {
    setUser((prevState) => {
      let user = Object.assign({}, prevState.user);
      user[field] = value;
      return { user };
    });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={submitForm}>
        <div>
          <label htmlFor="username">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={user.user.name}
            onChange={(e) => {
              handleUser(e.target.value, "name");
            }}
          />
        </div>
        <div>
          <label htmlFor="username">Surname: </label>
          <input
            type="text"
            name="surname"
            id="surname"
            required
            value={user.user.surname}
            onChange={(e) => {
              handleUser(e.target.value, "surname");
            }}
          />
        </div>
        <div>
          <label htmlFor="username">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={user.user.email}
            onChange={(e) => {
              handleUser(e.target.value, "email");
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
            value={user.user.password}
            onChange={(e) => {
              handleUser(e.target.value, "password");
            }}
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm password: </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            required
            value={user.user["confirm-password"]}
            onChange={(e) => {
              handleUser(e.target.value, "confirm-password");
            }}
          />
        </div>
        <div>
          <input
            type="checkbox"
            required
            checked={user.user.checked}
            onChange={(e) => {
              handleUser(e.target.value, "checked");
            }}
          />
          <p>By signing up, you accept our Privacy Agreement.</p>
        </div>
        <WhiteBtnWrapper>
          <button type="submit" className="login-button">
            Login
          </button>
        </WhiteBtnWrapper>
      </form>
    </div>
  );
};

export default SignupForm;
