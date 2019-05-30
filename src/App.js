import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import BottomNavigationComponent from './components/BottomNavigation';
import Favorites from "./components/Favorites"
import Posts from "./components/Posts"
import User from "./components/User"
import MenuNavigation from './components/MenuNavigation';

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
      <div className="App">
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
  );
}

export default App;
