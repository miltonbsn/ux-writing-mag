import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  root: {
    position: "fixed",
    zIndex: 99,
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#3f51b5"
  },
  button: {
    color: "white !important"
  }
});

function BottomNavigationComponent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.button} label="Recents" icon={<Icon>speaker_notes</Icon>} />
      <BottomNavigationAction className={classes.button} label="Favorites" icon={<Icon>favorite</Icon>} />
      <BottomNavigationAction className={classes.button} label="My user" icon={<Icon>person</Icon>} />
    </BottomNavigation>
  );
}

export default BottomNavigationComponent;