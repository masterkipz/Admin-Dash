import { Navigate, Route } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./store/userContext";

function PrivateRoute({ element, ...rest }) {
  const { userFoundState } = useContext(UserContext);

  return (
    <Route
      {...rest}
      element={userFoundState ? element : <Navigate to="/" replace />}
    />
  );
}

