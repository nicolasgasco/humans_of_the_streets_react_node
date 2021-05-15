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
import StandardButton from "./components/UI/StandardButton";
import UserMessage from "./components/UI/UserMessage";

const App = () => {
  const [session, setSession] = useState(() => {
    // One fetch to check if the user is logged, another fetch to get the ID
    fetch("/api/login/check")
      .then((res) => res.json())
      .then((result) => {
        console.log("Session is ", result.isLogged);
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
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [modalMessage, setModalMessage] = useState(null);
  const [storyToDelete, setStoryToDelete] = useState({
    storyToDelete: { id: "", delete: false },
  });

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
    setShowLogin(!showLogin);
  };

  const handleModalMessage = (text) => {
    setModalMessage(text);
  };

  const handleStoryToDelete = (value) => {
    setStoryToDelete(value);
  };

  useEffect(() => {
    if (storyToDelete.storyToDelete.id && storyToDelete.storyToDelete.delete) {
      console.log(storyToDelete.storyToDelete.id);
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
          {showSignup ? <SignupForm /> : null}
          <HomeContent />
        </Route>

        <Route path="/browse">
          <SlimHeader session={session} />
          <BrowseContent />
        </Route>

        {session ? (
          <Route path="/profile">
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
              storyToDelete={storyToDelete}
            />
          </Route>
        ) : (
          <Redirect to="/" />
        )}

        <Route path="/add">
          <SlimHeader session={session} />
          <AddContent />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
