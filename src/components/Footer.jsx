import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    position: "relative",
    top: 'auto',
    bottom: 0,
    marginTop: 40,
    width: "100%",
    padding: 20,
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    color: "white"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="caption">® Copyright</Typography>
    </footer>
  );
}

export default Footer;