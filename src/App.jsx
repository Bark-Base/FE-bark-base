import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import AddPet from "./views/AddPet/AddPet";
import AuthView from "./views/AuthView/AuthView";
import EditPet from "./views/EditPets/EditPet";
import Facts from "./views/Facts/Facts";
import Home from "./views/Home/Home";
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
        <Route exact path={"/pets"}></Route>
        <Route exact path={"/pets/add"}>
          <AddPet />
        </Route>
        <Route exact path={"/pets/edit/:id"}>
          <EditPet />
        </Route>
        <Route path={"/contacts"}></Route>
      </Switch>
    </Router>
  );
}

export default App;
