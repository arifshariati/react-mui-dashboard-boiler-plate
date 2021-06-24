import React from 'react';
import { Switch } from 'react-router-dom';

// Layouts
import {
  Main as MainLayout
} from './layouts';

// Components
import { RouteWithLayout } from './components';

// Views
import {
  Dashboard as DashboardView
} from './views';

const Routes = () => {
  return (

    <Switch>

      <RouteWithLayout
        exact
        path='/dashboard'
        component={DashboardView}
        layout={MainLayout}
      />

    </Switch>
  );
};

export default Routes;