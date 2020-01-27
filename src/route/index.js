import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import PokeBallSpinner from "../components/PokeBallSpinner";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <React.Suspense fallback={<PokeBallSpinner display fallback />}>
          <Switch>
            <Route exact path={["/", "/filter/:filter"]} component={Home} />
            <Route exact path="/detail/:name" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </React.Suspense>
      </Layout>
    </BrowserRouter>
  );
}
