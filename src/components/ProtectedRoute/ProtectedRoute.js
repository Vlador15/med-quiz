import { Route, Redirect } from "react-router";
import { userData } from "../../utils/helper";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  let currentUser = userData();

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        currentUser.isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;
