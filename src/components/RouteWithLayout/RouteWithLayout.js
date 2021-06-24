import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => {
        if (localStorage.getItem('userId')) {
          //  logged in so redirect to dashboard page
          return <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
        }

        return (<Layout>
          <Component {...matchProps} />
        </Layout>)
      }}
    />
  );
};

RouteWithLayout.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string,
};

export default RouteWithLayout;
