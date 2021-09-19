import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainHeader from "./components/Header/MainHeader";
import SlimHeader from "./components/Header/SlimHeader";
import LoginForm from "./components/Login/LoginForm";
import SignupForm from "./components/Login/SignupForm";
import AddContent from "./components/Main/AddContent";
import BrowseContent from "./components/Main/BrowseContent";
import HomeContent from "./components/Main/HomeContent";
import ProfileContent from "./components/Main/ProfileContent";
import UserMessage from "./components/UI/UserMessage";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [session, setSession] = useState(() => {
    // One fetch to check if the user is logged, another fetch to get the ID
    fetch("/api/login/check")
      .then((res) => res.json())
      .then((result) => {
        setSession(result.isLogged);
        fetch("/api/users/email", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ email: result.user }),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.userFound) {
              sessionStorage.setItem("user", result.results._id);
            }
          })
          .catch(function (error) {
            console.log("An error occurred: " + error.message);
          });
      })
      .catch(function (error) {
        console.log("An error occurred: " + error.message);
      });
  });
  // Show login pane or not
  const [showLogin, setShowLogin] = useState(false);
  // Show signup pane or not
  const [showSignup, setShowSignup] = useState(false);
  // What do you want to show in a pop window
  const [modalMessage, setModalMessage] = useState(null);
  // Which story to delete
  const [storyToDelete, setStoryToDelete] = useState({
    storyToDelete: { id: "", delete: false },
  });
  const [showUserPane, setShowUserPane] = useState(false);

  const handleSession = (value) => {
    setSession(value);
  };

  useEffect(() => {
    if (!session) {
      sessionStorage.removeItem("user");
    }
  }, [session]);

  const toggleLoginFormVisibility = () => {
    setShowLogin(!showLogin);
    if (showSignup) {
      setShowSignup(false);
    }
  };

  const toggleSignupFormVisibility = () => {
    setShowSignup(!showSignup);
    if (showLogin) {
      setShowLogin(false);
    }
  };

  const handleModalMessage = (text) => {
    setModalMessage(text);
  };

  const handleStoryToDelete = (value) => {
    setStoryToDelete(value);
  };

  // Delete story
  useEffect(() => {
    // Only if both story id and trigger are active
    if (storyToDelete.storyToDelete.id && storyToDelete.storyToDelete.delete) {
      fetch(`/api/humans/${storyToDelete.storyToDelete.id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            setStoryToDelete({ storyToDelete: { id: "", delete: false } });
          }
        })
        .catch(function (error) {
          console.log("An error occurred: " + error.message);
        });
    }
  }, [storyToDelete]);

  const toggleUserPaneVisibility = () => {
    setShowUserPane(!showUserPane);
  };

  const logOutUser = () => {
    fetch("/api/logout", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.loggedOut) {
          handleSession(false);
        } else {
          handleModalMessage("It wasn't possible to log you out!");
        }
      })
      .catch(function (error) {
        console.log("An error occurred: " + error.message);
      });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {modalMessage ? (
            <UserMessage onClick={handleModalMessage} text={modalMessage} />
          ) : null}
          <MainHeader
            session={session}
            toggleLoginFormVisibility={toggleLoginFormVisibility}
            handleModalMessage={handleModalMessage}
          />
          {showLogin ? (
            <LoginForm
              onLogin={handleSession}
              toggleSignupFormVisibility={toggleSignupFormVisibility}
              toggleLoginFormVisibility={toggleLoginFormVisibility}
              handleModalMessage={handleModalMessage}
            />
          ) : null}
          {showSignup ? (
            <SignupForm handleModalMessage={handleModalMessage} />
          ) : null}
          <HomeContent
            toggleSignupFormVisibility={toggleSignupFormVisibility}
          />
        </Route>

        <Route exact path="/browse">
          <SlimHeader
            session={session}
            toggleUserPaneVisibility={toggleUserPaneVisibility}
          />
          <BrowseContent
            showUserPane={showUserPane}
            toggleUserPaneVisibility={toggleUserPaneVisibility}
            logOutUser={logOutUser}
          />
        </Route>

        {session ? (
          <Route exact path="/profile">
            {modalMessage ? (
              <UserMessage
                onClick={handleModalMessage}
                text={modalMessage}
                cancelButton={true}
                handleStoryToDelete={handleStoryToDelete}
              />
            ) : null}
            <SlimHeader />
            <ProfileContent
              session={session}
              handleModalMessage={handleModalMessage}
              handleStoryToDelete={handleStoryToDelete}
              handleSession={handleSession}
              storyToDelete={storyToDelete}
              logOutUser={logOutUser}
            />
          </Route>
        ) : (
          <Redirect to="/" />
        )}

        <Route path="/add">
          <SlimHeader
            session={session}
            toggleUserPaneVisibility={toggleUserPaneVisibility}
          />
          <AddContent
            showUserPane={showUserPane}
            toggleUserPaneVisibility={toggleUserPaneVisibility}
            logOutUser={logOutUser}
          />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
