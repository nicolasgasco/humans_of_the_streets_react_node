import { useState } from "react";
import classes from "./ShowPersonalData.module.css";
import DarkButton from "../UI/DarkButton";
import UserMessage from "../UI/UserMessage";

const ShowPersonalData = () => {
  const [userId, setUserId] = useState(sessionStorage.getItem("user"));
  const [personalData, setPersonalData] = useState(() => {
    fetch(`/api/users/id/${userId}`)
      .then((res) => res.json())
      .then((result) => {
        setPersonalData({ user: result.results });
      })
      .catch(function (error) {
        console.log("An error occurred: " + error.message);
      });
  });
  const [formDisabled, setFormDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);
	const [modalText, setModalText] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const activateDataEdit = () => {
    setFormDisabled(false);
  };

  const modifyButtons = (
    <div>
      <DarkButton
        text="Modify data"
        className={classes["show-data-button"]}
        onClick={activateDataEdit}
      />
      <DarkButton
        text="Modify password"
        className={classes["show-data-button"]}
      />
    </div>
  );

  const cancelEdits = () => {
    setFormDisabled(true);
  };

  const confirmEdits = () => {
    fetch("/api/users/update/data", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        oldmail: personalData.user.email,
        email: personalData.user.email,
        name: personalData.user.name,
        surname: personalData.user.surname,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.results.modifiedCount === 1) {
          setShowModal(true);
					setModalText("Personal details changed successfully!");
        }
      })
      .catch(function (error) {
        console.log("An error occurred: " + error.message);
      });
    setFormDisabled(true);
  };

  const handleName = (e) => {
    setPersonalData((prevState) => {
      const user = Object.assign(prevState.user);
      user.name = e.target.value;
      return { user };
    });
  };

  const handleSurname = (e) => {
    setPersonalData((prevState) => {
      const user = Object.assign(prevState.user);
      user.surname = e.target.value;
      return { user };
    });
  };

  const confirmCancelButtons = (
    <div>
      <DarkButton
        text="Cancel"
        className={classes["show-data-button"]}
        onClick={cancelEdits}
      />
      <DarkButton
        text="Confirm"
        className={classes["show-data-button"]}
        onClick={confirmEdits}
      />
    </div>
  );

  return (
    <>
      {showModal && (
        <UserMessage onClick={() => {setShowModal(false)}} text={modalText} />
      )}
      <div className={classes["personal-data-container"]}>
        <h3>Personal data</h3>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              placeholder={personalData ? personalData.user.name : "Your name"}
              value={personalData ? personalData.user.name : ""}
              onChange={handleName}
              disabled={formDisabled}
            />
          </div>
          <div>
            <label htmlFor="surname">Surname: </label>
            <input
              type="text"
              id="surname"
              placeholder={
                personalData ? personalData.user.surname : "Your name"
              }
              value={personalData ? personalData.user.surname : ""}
              onChange={handleSurname}
              disabled={formDisabled}
            />
          </div>
          {formDisabled ? modifyButtons : confirmCancelButtons}
        </form>
      </div>
    </>
  );
};

export default ShowPersonalData;
