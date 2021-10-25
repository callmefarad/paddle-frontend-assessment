import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Pages/LandingPage/Homepage/Homepage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/homepage" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
