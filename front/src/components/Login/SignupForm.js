import "./SignupForm.css";
import { useRef, useState } from "react";
import WhiteButton from "../UI/WhiteButton";

const SignupForm = (props) => {
  const nameInputRef = useRef("");
  const surnameInputRef = useRef("");
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const confirmPasswordInputRef = useRef("");
  const checkedInputRef = useRef("");

  const submitForm = (e) => {
    e.preventDefault();
    e.target.checkValidity();

    console.log(nameInputRef.current.value)
    if (passwordInputRef.current.value !== confirmPasswordInputRef.current.value) {
      props.handleModalMessage("The two passwords don't match!");
      passwordInputRef.current.value = "";
      confirmPasswordInputRef.current.value = "";
    } else {
      fetch("/api/signin", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: emailInputRef.current.value.trim(),
          name: nameInputRef.current.value.trim(),
          surname: surnameInputRef.current.value.trim(),
          password: confirmPasswordInputRef.current.value,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            props.handleModalMessage("Welcome to Humans of the Streets!");

            emailInputRef.current.value = "";
            nameInputRef.current.value = "";
            surnameInputRef.current.value = "";
            passwordInputRef.current.value = "";
            confirmPasswordInputRef.current.value = "";
          } else {
            props.handleModalMessage("The user is already registered!");          
          }
        })
        .catch(function (error) {
          console.log("An error occurred: " + error.message);
          props.handleModalMessage("Ops! Something went wrong :(");          
        });
    }
  };

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
              autoComplete="given-name"
              ref={nameInputRef}
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
              autoComplete="family-name"
              ref={surnameInputRef}

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
              autoComplete="email"
              ref={emailInputRef}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="password">Password: </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              required
              autoComplete="new-password"
              ref={passwordInputRef}
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm password: </label>
            <br />
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              required
              autoComplete="new-password"
              ref={confirmPasswordInputRef}
            />
          </div>
        </div>
        <div>
          <p className="disclaimer-text">
            <input
              className="checkbox"
              type="checkbox"
              required
              ref={checkedInputRef}
            />
            By signing up, you accept our Privacy Agreement.
          </p>
        </div>
        <WhiteButton type="submit" className="signup-button" text="Sign up" />
      </form>
    </div>
  );
};

export default SignupForm;
