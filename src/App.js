import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Favorites from "./components/About"
import Posts from "./components/Articles"
import User from "./components/Contact"
import MenuNavigation from './components/MenuNavigation';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: "#00ccff" },
  },
});

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const routes = [
  {
    path: "/",
    component: MenuNavigation,
    exact: true,
    routes: [
      {
        path: "/posts",
        component: Posts
      },
      {
        path: "/favorites",
        component: Favorites,
      },
      {
        path: "/my-user",
        component: User,
      }
    ]
  }
];

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Route path="/" component={MenuNavigation}></Route>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
