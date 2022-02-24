import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AuthView from "./views/AuthView/AuthView";
import Home from "./views/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={"/auth"}>
          <AuthView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
