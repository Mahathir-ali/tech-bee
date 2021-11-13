import React from "react";
import { Route, Redirect } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import useAuth from "../hooks/useAuth";
const AdminRoute = ({ children, ...rest }) => {
  const { isLoading, user, admin } = useAuth();

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
