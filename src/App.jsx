import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import AddPet from "./views/AddPet/AddPet";
import AuthView from "./views/AuthView/AuthView";
import Contacts from "./views/Contacts/Contacts";
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
          <NavigationBar />
        </Route>
        <Route path={"/training"}>
          <TrainingResources />
          <NavigationBar />
        </Route>
        <Route path={"/facts"}>
          <Facts />
          <NavigationBar />
        </Route>
        <Route exact path={"/pets"}>
          <Pets/>
          <NavigationBar />
        </Route>
        <Route exact path={"/pets/add"}>
          <AddPet />
          <NavigationBar />
        </Route>
        <Route path={"/contacts"}>
          <Contacts />
          <NavigationBar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
