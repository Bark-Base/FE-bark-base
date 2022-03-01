import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AddPet from "./views/AddPet/AddPet";
import AuthView from "./views/AuthView/AuthView";
import Facts from "./views/Facts/Facts";
import Home from "./views/Home/Home";
import Pets from "./views/Pets/Pets";
import TrainingResources from "./views/TrainingResources/TrainingResources";

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
        <Route path={"/training"}>
          <TrainingResources />
        </Route>
        <Route path={"/facts"}>
          <Facts />
        </Route>
        <Route exact path={"/pets"}>
          <Pets/>
        </Route>
        <Route exact path={"/pets/add"}>
          <AddPet />
        </Route>
        <Route path={"/contacts"}></Route>
      </Switch>
    </Router>
  );
}

export default App;
