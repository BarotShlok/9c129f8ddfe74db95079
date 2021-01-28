import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home";
import countryDetails from "./components/countryDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/countryDetails" component={countryDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
