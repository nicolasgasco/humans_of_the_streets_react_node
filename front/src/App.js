import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainHeader from "./components/Header/MainHeader";
import SlimHeader from "./components/Header/SlimHeader";
import HomeContent from "./components/HomeMain/HomeContent";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <MainHeader />
        <HomeContent />
      </Route>

      <Route path="/browse">
        <SlimHeader />
        <h2>Browse their stories</h2>
      </Route>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
