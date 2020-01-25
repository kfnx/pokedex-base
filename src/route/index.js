import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../component/Layout";

const Home = React.lazy(() => import("../page/Home"));
const Detail = React.lazy(() => import("../page/Detail"));
const MyPokemon = React.lazy(() => import("../page/MyPokemon"));

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <React.Suspense fallback={<p>fallback!</p>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:id/:name" component={Detail} />
            <Route path="/my-pokemon" component={MyPokemon} />
          </Switch>
        </React.Suspense>
      </Layout>
    </BrowserRouter>
  );
}
