import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from "../components/Title";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 80,
    minHeight: "100vh"
  },
  image: {
    width: "100%",
    marginBottom: 20
  },
}));

function About() {
  const classes = useStyles();

  window.scrollTo(0, 0);

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Title>Contact</Title>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deserunt tenetur aliquid tempore nihil quidem maiores id nisi eos corrupti aperiam illum nesciunt, fugit enim a aliquam, minima sapiente. Hic!</p>
      </Container>
    </div>
  )
}

export default About;

