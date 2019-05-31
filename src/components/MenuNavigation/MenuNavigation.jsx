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
import { withRouter, Route } from 'react-router-dom'
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
    console.log(route)
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
  ]

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
        <Route path="/post-detail" component={PostDetail}></Route>
      </Container>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

export default withRouter(MenuNavigation);