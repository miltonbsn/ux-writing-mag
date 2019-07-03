import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: "bold",
    position: "relative",
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.primary,
    marginBottom: 20
  },
  line: {
    width: 15,
    height: 4,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
    marginRight: 5
  }
}));

const Title = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
      <div className={classes.line} />
      {children}
    </Typography>
  );
}

export default Title;