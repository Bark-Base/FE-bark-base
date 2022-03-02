import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Template from "./components/Layout/Template";
// import NavigationBar from "./components/NavigationBar/NavigationBar";
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
          <Template header={'Accounts'}>
            <AuthView />
          </Template>
        </Route>
        <Route path={"/training"}>
          <Template header={'Training'}>
            <TrainingResources />
          </Template>
        </Route>
        <Route path={"/facts"}>
          <Template header={'Pet Facts'}>
            <Facts />
          </Template>
        </Route>
        <Route exact path={"/pets"}>
          <Template header={'My Pets'}>
            <Pets />
          </Template>
        </Route>
        <Route exact path={"/pets/add"}>
          <Template header={'Add a Pet'}>
            <AddPet />
          </Template>
        </Route>
        <Route path={"/contacts"}>
          <Template header={'Contacts'}>
            <Contacts />
          </Template>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
