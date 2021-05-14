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

const App = () => {
  const [session, setSession] = useState(localStorage.getItem("logged"));
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  console.log(session);
  const handleSession = (value) => {
    console.log(session);
    setSession(value);
    if (value) {
      localStorage.setItem("logged", true);
    } else {
      localStorage.removeItem("logged");
    }
  };

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

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainHeader
            session={session}
            toggleLoginFormVisibility={toggleLoginFormVisibility}
          />
          {showLogin ? (
            <LoginForm
              onLogin={handleSession}
              toggleSignupFormVisibility={toggleSignupFormVisibility}
              toggleLoginFormVisibility={toggleLoginFormVisibility}
            />
          ) : null}
          {showSignup ? <SignupForm /> : null}
          <HomeContent />
        </Route>

        <Route path="/browse">
          <SlimHeader session={session} />
          <BrowseContent />
        </Route>

        <Route path="/profile">
          <SlimHeader />
          <ProfileContent />
        </Route>

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
