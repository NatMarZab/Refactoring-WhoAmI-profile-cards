import "../stylesheet/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import PageTwo from "./PageTwo";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/pagetwo" exact component={PageTwo} />
      <Route> {<p>Página no encontrada</p>}</Route>
    </Switch>
  );
}

export default App;
