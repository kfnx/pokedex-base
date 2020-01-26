import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../component/Layout";
import NotFound from "../component/NotFound";
import PokeBallSpinner from "../component/PokeBallSpinner";

const Home = React.lazy(() => import("../page/Home"));
const Detail = React.lazy(() => import("../page/Detail"));

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <React.Suspense fallback={<PokeBallSpinner display fallback />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/filter/:filter" component={Home} />
            <Route exact path="/detail/:name" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </React.Suspense>
      </Layout>
    </BrowserRouter>
  );
}
