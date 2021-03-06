import React, {Fragment} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter } from 'react-router-dom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Domain';
import ContactIcon from '@material-ui/icons/Email';
import CategoryIcon from '@material-ui/icons/Label';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontWeight: 700
  },
  logoIcon: {
    width: 50
  },
  search: {
    position: 'šrelative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: 150
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  list: {
    width: 250,
    textAlign: "left"
  }, 
  subCategory: {
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 5,
    fontWeight: 200,
    marginLeft: 55,
    width: 150,
  },
  subCategoryText: {
    fontSize: 12,
    fontWeight: 400
  },
  zeroSpace: {
    paddingBottom: 0
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function MenuNavigation({ history, ...props }) {
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
      icon: <HomeIcon />,
      path: "/",
      id: 1,
      subs: []
    },
    {
      title: "Categorias",
      icon: <CategoryIcon/>,
      path: "/categories/ALL",
      id: 2,
      subs: [{
        title: "- GUIA",
        icon: <CategoryIcon/>,
        path: "/categories/GUIA",
        id: 3
      },
      {
        title: "- DICAS",
        icon: <CategoryIcon/>,
        path: "/categories/DICAS",
        id: 4
      },
      {
        title: "- MÉTRICAS",
        icon: <CategoryIcon/>,
        path: "/categories/METRICAS",
        id: 5
      }]
    },
    {
      title: "Sobre",
      icon: <AboutIcon />,
      path: "/about",
      id: 3,
      subs: []
    },
    {
      title: "Compartilhe",
      icon: <ContactIcon />,
      path: "/share",
      id: 4,
      subs: []
    }
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

          <Fragment key={page.id}>
            
            <ListItem button key={page.id} className={page.title === "Categorias"? classes.zeroSpace:""} onClick={() => goTo(page.path)}>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItem>

            {page.subs.map(sub => (
              <ListItem button key={sub.id} className={classes.subCategory} onClick={() => goTo(sub.path)}>
                {/* <ListItemIcon>{sub.icon}</ListItemIcon> */}
                <ListItemText disableTypography={true} secondary={sub.title} inset={false} className={classes.subCategoryText} />
              </ListItem>
            ))} 

          </Fragment>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>

            <img className={classes.logoIcon} src={"/uw192.png"} onClick={() => goTo("/")} alt="logo" />

            <Typography className={classes.title} variant="h6" noWrap onClick={() => goTo("/")}>Mag</Typography> 

          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

export default withRouter(MenuNavigation);