import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainHeader from "./components/Header/MainHeader";
import SlimHeader from "./components/Header/SlimHeader";
import LoginForm from "./components/Login/LoginForm";
import SignupForm from "./components/Login/SignupForm";
import AddContent from "./components/Main/AddContent";
import BrowseContent from "./components/Main/BrowseContent";
import HomeContent from "./components/Main/HomeContent";
import StandardButton from "./components/UI/StandardButton";

const App = () => {
  const [session, setSession] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleSession = (value) => {
    setSession(value);
  };

  const toggleLoginFormVisibility = () => {
    setShowLogin(!showLogin);
    if (showSignup) {
      setShowSignup(false);
    } 
  };

  const toggleSignupFormVisibility = () => {
    console.log("triggered@")
    setShowSignup(!showSignup);
    setShowLogin(!showLogin);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainHeader toggleLoginFormVisibility={toggleLoginFormVisibility} />
          {showLogin ? <LoginForm onLogin={handleSession} toggleSignupFormVisibility={toggleSignupFormVisibility} /> : null}
          {showSignup ? <SignupForm /> : null}
          <HomeContent />
        </Route>

        <Route path="/browse">
          <SlimHeader />
          <BrowseContent />
        </Route>

        <Route path="/add">
          <SlimHeader />
          <AddContent />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
