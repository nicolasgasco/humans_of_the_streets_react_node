import { useEffect, useState } from "react";
import classes from "./ShowPersonalData.module.css";
import DarkButton from "../UI/DarkButton";
import UserMessage from "../UI/UserMessage";
import ConfirmCancelButtons from "./ConfirmCancelButtons";

const ShowPersonalData = () => {
  const [userId, setUserId] = useState(sessionStorage.getItem("user"));
  const [oldPersonalData, setOldPersonalData] = useState();
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
  const [showPasswordEdit, setShowPasswordEdit] = useState(false);
  const [modalText, setModalText] = useState("");
  const [newPasswordObj, setNewPasswordObj] = useState({ newPasswordObj: {} });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
  };

  const activateDataEdit = () => {
    setFormDisabled(false);
  };

  const activatePasswordEdit = () => {
    setShowPasswordEdit(true);
  };

  const cancelEdits = () => {
    setFormDisabled(true);
  };

  const cancelPasswordEdit = () => {
    setShowPasswordEdit(false);
  };

  const handleNewPasswordObj = (e, key) => {
    setNewPasswordObj((prevState) => {
      const newPasswordObj = Object.assign(prevState.newPasswordObj);
      newPasswordObj[key] = e.target.value;
      return { newPasswordObj };
    });
  };

  const confirmPasswordEdit = () => {
    // Check old password
    fetch("/api/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: personalData.user.email,
        password: newPasswordObj.newPasswordObj.currentPassword,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // Password is right
        if (result.session) {
          if (
            newPasswordObj.newPasswordObj.newPassword !==
            newPasswordObj.newPasswordObj.confirmPassword
          ) {
            setModalText("The two passwords don't match!");
            setShowModal(true);
            setNewPasswordObj({ newPasswordObj: {} });
            return;
          }
          // Set new password in place of old one
          setPersonalData((prevState) => {
            const user = Object.assign(prevState.user);
            user.password = newPasswordObj.newPasswordObj.confirmPassword;
            return { user };
          });

          // Set new password
          fetch("/api/users/password", {
            headers: {
              "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify({
              _id: personalData.user._id,
              password: personalData.user.password,
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.nModified === 1) {
                setShowModal(true);
                setModalText("Personal details changed successfully!");
								setNewPasswordObj({ newPasswordObj: {} });
								setShowPasswordEdit(false);
              } else {
								setShowModal(true);
                setModalText("The was an issue with your request!");
								setNewPasswordObj({ newPasswordObj: {} });
								setShowPasswordEdit(false);
							}
            })
            .catch(function (error) {
              console.log("An error occurred: " + error.message);
            });
        } else {
          setModalText("The password you inserted is wrong!");
          setShowModal(true);
          setNewPasswordObj({ newPasswordObj: {} });
          return;
        }
      })
      .catch(function (error) {
        console.log("An error occurred: " + error.message);
      });
  };

  const confirmEdits = () => {
    // console.log(personalData.user, oldPersonalData)
    // if (oldPersonalData.name === personalData.user.name && oldPersonalData.surname === personalData.user.surname) {
    //   setShowModal(true);
    //   setModalText("Please change your data!");
    //   setFormDisabled(true);
    //   return;
    // }
    console.log(oldPersonalData)
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
      user.name = e.target.value.trim();
      return { user };
    });
  };

  const handleSurname = (e) => {
    setPersonalData((prevState) => {
      const user = Object.assign(prevState.user);
      user.surname = e.target.value.trim();
      return { user };
    });
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
        onClick={activatePasswordEdit}
      />
    </div>
  );

  const editPasswordContent = (
    <form onSubmit={handleChangePassword} className={classes["profile-forms"]}>
      <div>
        <label htmlFor="old-password">Current password: </label>
        <input
          type="password"
          id="old-password"
          autoComplete="current-password"
          value={newPasswordObj.newPasswordObj.currentPassword || ""}
          onChange={(e) => handleNewPasswordObj(e, "currentPassword")}
        />
      </div>
      <br />
      <div>
        <label htmlFor="new-password">New password: </label>
        <input
          type="password"
          id="new-password"
          autoComplete="new-password"
          value={newPasswordObj.newPasswordObj.newPassword || ""}
          onChange={(e) => handleNewPasswordObj(e, "newPassword")}
        />
      </div>
      <div>
        <label htmlFor="confirm-new-password">Confirm new password: </label>
        <input
          type="password"
          id="confirm-new-password"
          autoComplete="new-password"
          value={newPasswordObj.newPasswordObj.confirmPassword || ""}
          onChange={(e) => handleNewPasswordObj(e, "confirmPassword")}
        />
      </div>
      <ConfirmCancelButtons
        onCancel={cancelPasswordEdit}
        onConfirm={confirmPasswordEdit}
      />
    </form>
  );

  const editDataContent = (
    <form onSubmit={handleFormSubmit} className={classes["profile-forms"]}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder={personalData ? personalData.user.name : "Your name"}
          autoComplete="given-name"
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
          placeholder={personalData ? personalData.user.surname : "Your name"}
          autoComplete="family-name"
          value={personalData ? personalData.user.surname : ""}
          onChange={handleSurname}
          disabled={formDisabled}
        />
      </div>
      {formDisabled ? (
        modifyButtons
      ) : (
        <ConfirmCancelButtons onCancel={cancelEdits} onConfirm={confirmEdits} />
      )}
    </form>
  );

  return (
    <>
      {showModal && (
        <UserMessage
          onClick={() => {
            setShowModal(false);
          }}
          text={modalText}
        />
      )}
      <div className={classes["personal-data-container"]}>
        <h3>Personal data</h3>
        {showPasswordEdit ? editPasswordContent : editDataContent}
      </div>
    </>
  );
};

export default ShowPersonalData;
