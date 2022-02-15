import { Route, Switch } from "react-router-dom";

// components
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import HomePage from "./components/HomePage/HomePage";
import Quiz from "./components/Quiz/Quiz";

const AppRouter = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <ProtectedRoute path="/quiz" component={Quiz} />
  </Switch>
);

export default AppRouter;
