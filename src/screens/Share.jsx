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
  speciallist: {
    margin: 0,
    padding: 0
  }
}));

function Share() {
  const classes = useStyles();

  window.scrollTo(0, 0);

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Title>Compartilhe o U:W Mag</Title>
      </Container>

      <Container maxWidth="sm">
        <p> Sabia que é possível salvar essa página como um aplicativo no seu celular? </p>
        <p> Veja no tutorial abaixo como: </p>

        <img className={classes.image} src={"/images/share-how.gif"} alt="Sobre" />

        <p> Essa plataforma foi construída para compartilhar meus conhecimentos e aprendizados com jornalistas, redatores e outros profissionais que desejam aprofundar suas habilidades em UX Writing. </p>
        <p> Ajude a difundir informação e compartilhe o U:W Mag com alguém que possa se interessar ;) </p>
      </Container>
    </div>
  )
}

export default Share;

