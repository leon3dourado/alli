import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { PhonePlans } from "../components/PhonePlans/PhonePlans";
import { SignPlan } from "../components/SignPlan/SignPlan";
import { Spinner } from "../shared/components/Spinner/Spinner";

function AppRoutes() {
  const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/planos/:sku" component={PhonePlans} />
        <Route exact path="/assinarPlano" component={SignPlan} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );

  return <Suspense fallback={<Spinner />}>{routes}</Suspense>;
}

export default AppRoutes;
