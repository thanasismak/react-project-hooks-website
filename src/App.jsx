import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { Route, HashRouter, Switch } from 'react-router-dom';

import HomePage from './components/Homepage';
import Services from './components/Services';
import History from './components/History';
import FindUs from './components/FindUs';
import AppMainPage from './components/AppMainPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#088A08', //#52BD00
      main: '#4b6cb7',
    },
    secondary: {
      // main: orange[400],
      main: '#FFC837',
    },
  },
});

const routes = {
  home: '/',
  services: '/services',
  history: '/about',
  findus: '/contact'
};

const App = () => (
  <HashRouter>
    <MuiThemeProvider theme={theme}>
      <AppMainPage>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.services} component={Services} />
          <Route exact path={routes.history} component={History} />
          <Route exact path={routes.findus} component={FindUs} />
        </Switch>
      </AppMainPage>
    </MuiThemeProvider>
  </HashRouter>
);

export default App;
