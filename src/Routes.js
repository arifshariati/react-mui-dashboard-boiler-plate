import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

// Layouts
import {
  Main as MainLayout,
  Minimal as MinimalLayout
} from './layouts';

// Components
import { Sample } from './components';

const Routes = () => {
  return (

    <Switch>

      <Route
        exact
        path='/sample'
        component={Sample}
        layout={MainLayout}
      />

    </Switch>
  );
};

export default Routes;