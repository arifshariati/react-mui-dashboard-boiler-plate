import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

// Layouts
import {
  Main as MainLayout,
  Minimal as MinimalLayout
} from './layouts';

// Components
import { RouteWithLayout } from './components';

// Views
import {
  Dashboard as DashboardView,
  NotFound as NotFoundView,
  Login as LoginView,
  Signup as SignupView,
  ResetPassword as ResetPasswordView
} from './views';

const Routes = () => {
  return (

    <Switch>

      {/*  Views */}
      <RouteWithLayout
        exact
        path='/dashboard'
        component={DashboardView}
        layout={MainLayout}
      />

      <RouteWithLayout
        component={SignupView}
        exact
        layout={MinimalLayout}
        path="/signup"
      />

      <RouteWithLayout
        component={LoginView}
        exact
        layout={MinimalLayout}
        path="/login"
      />

      <RouteWithLayout
        component={ResetPasswordView}
        exact
        layout={MinimalLayout}
        path="/reset-password"
      />

      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />

      <Redirect to='/not-found' />
    </Switch>
  );
};

export default Routes;