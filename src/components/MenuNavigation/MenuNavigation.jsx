import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter, Route, Link } from 'react-router-dom'
import PostCard from '../Articles/PostCard';
import { Container } from '@material-ui/core';
import Favorites from '../About';
import Posts from '../Articles';
import Contact from '../Contact';
import PostDetail from '../Articles/PostDetail';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  }
}));

function MenuNavigation({ history }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const goTo = route => {
    history.push(route);
  }

  const pages = [
    {
      title: "Home",
      icon: "home",
      path: "/home",
      id: 1
    },
    {
      title: "Artigos",
      icon: "assignment",
      path: "/articles",
      id: 2
    },
    {
      title: "Quem somos",
      icon: "home",
      path: "/about",
      id: 3
    },
    {
      title: "Contato",
      icon: "home",
      path: "/contact",
      id: 4
    },
    {
      title: "Categorias",
      icon: "home",
      path: "/categories",
      id: 5
    },
    {
      title: "Topicos",
      icon: "home",
      path: "/topics",
      id: 6
    },
  ]

  const Topic = ({ match }) => {
    return <h3>Requested Param: {match.params.id}</h3>;
  }

  const Topics = ({ match }) => {
    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:id`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Divider />
      <List>
        {pages.map(page => (
          <ListItem style={{ textAlign: "center" }} button key={page.id} onClick={() => goTo(page.path)}>
            <ListItemText primary={page.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="h6" className={classes.title} style={{ marginLeft: "-52px" }}>
            U:W Mag
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container fixed style={{ marginTop: "100px" }}>
        <Route path="/about" component={Favorites}></Route>
        <Route path="/articles" component={Posts}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/post-detail/:id" component={PostDetail}></Route>
        <Route path="/topics" component={Topics}></Route>
      </Container>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

export default withRouter(MenuNavigation);