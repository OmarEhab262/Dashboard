import React, { useState, useEffect } from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return (
    <Route
      {...rest}
      element={authenticated ? <Component {...rest} /> : <Navigate to="/" />}
    />
  );
};

export default PrivateRoute;
