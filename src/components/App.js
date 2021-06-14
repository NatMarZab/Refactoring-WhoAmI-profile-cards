import "../stylesheet/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import PageTwo from "./PageTwo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact children={<Landing />} />
        <Route path="/pagetwo" exact children={<PageTwo />} />
        <Route children={<p>Página no encontrada</p>} />
      </Switch>
    </Router>
  );
}

export default App;
