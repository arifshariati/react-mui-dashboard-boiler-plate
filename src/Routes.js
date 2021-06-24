import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

// Components
import { Sample } from './components';

const Routes = () => {
  return (

    <Switch>

      <Route
        exact
        path='/sample'
        component={Sample}
      />

    </Switch>
  );
};

export default Routes;