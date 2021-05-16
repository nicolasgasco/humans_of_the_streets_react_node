import "./SignupForm.css";
import { useState } from "react";
import WhiteButton from "../UI/WhiteButton";

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
  const [formValid, setFormValid] = useState(true);
  const [userRegistered, setUserRegistered] = useState(false);

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
      setFormValid(false);
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
            setUserRegistered(true);
          }
        })
        .catch(function (error) {
          console.log("An error occurred: " + error.message);
        });
    }
  };

  const handleUser = (value, field) => {
    setFormValid(true);
    setUserRegistered(false);

    setUser((prevState) => {
      let user = Object.assign({}, prevState.user);
      user[field] = value;
      return { user };
    });
  };

  const showPasswordsNoMatch = (
    <div>
      <p class="red-text">The two passwords don't match!</p>
    </div>
  );

  const showUserAlreadyRegistered = (
    <div>
      <p class="red-text">The user is already registered!</p>
    </div>
  );

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={submitForm}>
        <div className="form-div">
          <div>
            <label htmlFor="name">Name: </label>
            <br />
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
            <label htmlFor="surname">Surname: </label>
            <br />
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
        </div>
        <div>
          <div>
            <label htmlFor="email">Email: </label>
            <br />
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
        </div>
        <div>
          <div>
            <label htmlFor="password">Password: </label>
            <br />
            <input
              className={` ${!formValid ? "invalid" : ""}`}
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
            <br />
            <input
              className={` ${!formValid ? "invalid" : ""}`}
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
        </div>
        <div>
          <p>
            <input
              className="checkbox"
              type="checkbox"
              required
              checked={user.user.checked}
              onChange={(e) => {
                handleUser(e.target.value, "checked");
              }}
            />
            By signing up, you accept our Privacy Agreement.
          </p>
        </div>
        <WhiteButton type="submit" className="login-button" text="SIgn up" />
      </form>
      {!formValid ? showPasswordsNoMatch : null}
      {userRegistered ? showUserAlreadyRegistered : null}
    </div>
  );
};

export default SignupForm;
