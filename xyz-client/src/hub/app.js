import React, { useEffect, lazy, Suspense } from "react";
import "./app.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { loading } from "components/com_common/Loading";

const AdminContainer = lazy(() => import("hub/_Container"));
const Home = lazy(() => import("hub/layouts/client_home"));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={loading()}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/admin/*" exact>
            <AdminContainer />
          </Route>

          <Route path="/page404">
            <div>404 not found</div>
          </Route>
          <Redirect from="/*" to="/page404" />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default App;
