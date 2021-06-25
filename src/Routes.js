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