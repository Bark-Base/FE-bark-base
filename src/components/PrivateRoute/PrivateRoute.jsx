import { Redirect, Route } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default function PrivateRoute({ children, ...rest }) {
  const { user, loading } = useUser();
  return loading ? (
    <h2>"nah, we loading"</h2>
  ) : (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}