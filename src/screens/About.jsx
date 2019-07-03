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
        <Title>About</Title>
      </Container>

      <img className={classes.image} src={`http://lorempixel.com/600/400/nightlife/${Math.floor((Math.random() * 10) + 1)}`} alt="About" />

      <Container maxWidth="sm">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deserunt tenetur aliquid tempore nihil quidem maiores id nisi eos corrupti aperiam illum nesciunt, fugit enim a aliquam, minima sapiente. Hic!</p>
        <p>Quasi molestiae atque nisi eveniet illum incidunt quisquam omnis excepturi iste. Fugiat temporibus illo error adipisci omnis voluptatibus ipsam earum, rerum magni excepturi et, debitis cumque? Rem, dolores nam. Rerum.</p>
        <p>Assumenda repellendus vel itaque autem ratione adipisci provident optio et labore consectetur aliquam quisquam natus fugit animi similique quam enim dignissimos culpa consequuntur pariatur, quidem aliquid fugiat unde? Vero, minus.</p>
      </Container>
    </div>
  )
}

export default About;

