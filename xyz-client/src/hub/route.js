import React from "react";
import "./route.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

const loading = () => {
  return <div>TODO: loading effect for Lazy loading...</div>
}

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route path="/" exact>
            <div className="App">hello world</div>
          </Route>

          <Route path="/page404">
            <div>404 not found</div>
          </Route>

          <Redirect from="/*" to="/page404" />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
