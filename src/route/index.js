import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../component/Layout";

const Home = React.lazy(() => import("../page/Home"));
const Detail = React.lazy(() => import("../page/Detail"));

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <React.Suspense
          fallback={
            <center>
              <h1>LOADING</h1>
            </center>
          }
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/filter/:filter" component={Home} />
            <Route path="/detail/:name" component={Detail} />
            <Route
              component={() => (
                <center>
                  <h1>page not found</h1>
                </center>
              )}
            />
          </Switch>
        </React.Suspense>
      </Layout>
    </BrowserRouter>
  );
}
