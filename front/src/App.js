import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MainHeader from "./components/Header/MainHeader";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <MainHeader />
      </Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
