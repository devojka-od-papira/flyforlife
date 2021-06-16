import React from "react";
import { Route } from "react-router-dom";
import Nav from "../components/nav";
import { routes } from "../routes";
const AppLayout = ({ children }) => (
  <div>
    <Nav />
    <div>{children}</div>
  </div>
);

const AppLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <AppLayout>
          <Component {...props} />
        </AppLayout>
      )}
    />
  );
};

export default AppLayoutRoute;
