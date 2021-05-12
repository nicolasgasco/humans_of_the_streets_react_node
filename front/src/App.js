import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainHeader from "./components/Header/MainHeader";
import SlimHeader from "./components/Header/SlimHeader";
import BrowseContent from "./components/Main/BrowseContent";
import HomeContent from "./components/Main/HomeContent";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <MainHeader />
        <HomeContent />
      </Route>

      <Route path="/browse">
        <SlimHeader />
        <BrowseContent />
      </Route>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
