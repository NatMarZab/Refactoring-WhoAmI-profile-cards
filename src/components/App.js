import "../stylesheet/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import PageTwo from "./PageTwo";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/pagetwo">
          <PageTwo />
        </Route>
        <Route children={<p>Página no encontrada</p>} />
      </Switch>
    </Router>
    // <Router>
    //   <Switch>
    //     <Route path="/" exact children={<Landing />} />
    //     <Route path="/pagetwo" exact children={<PageTwo />} />
    //     <Route children={<p>Página no encontrada</p>} />
    //   </Switch>
    // </Router>
  );
}

export default App;
