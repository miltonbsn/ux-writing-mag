import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Home from "./screens/Home";
import About from "./screens/About";
import Post from "./screens/Post";
import grey from "@material-ui/core/colors/grey";
import MenuNavigation from "./components/MenuNavigation";
import Footer from "./components/Footer";
import Share from './screens/Share';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4400ff"
    },
    secondary: {
      main: grey[900]
    },
    text: {
      primary: "#1c1c1c"
    }
  },
  typography: {
    fontFamily: [
      "Nunito"
    ]
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Fragment>
          <MenuNavigation />
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/articles" component={Home}></Route>
          <Route path="/share" component={Share}></Route>
          <Route path="/post/:id" component={Post}></Route>
          <Route path="/topics" component={Home}></Route>
          <Footer />
        </Fragment>
      </ThemeProvider>
    </Router>
  );
}

export default App;
