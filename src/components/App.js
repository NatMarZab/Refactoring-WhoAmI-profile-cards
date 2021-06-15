import "../stylesheet/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import PageTwo from "./PageTwo";

function App() {
  return (

    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Landing />
    //     </Route>

    //     <Route exact path="/pagetwo">
    //       <PageTwo />
    //     </Route>
    //     <Route children={<p>Página no encontrada</p>} />
    //   </Switch>
    // </Router>
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/pagetwo" exact component={PageTwo} />
        <Route children={<p>Página no encontrada</p>} />
      </Switch>
    </Router>
  );
}

export default App;
