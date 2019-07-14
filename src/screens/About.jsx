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

function About() {
  const classes = useStyles();

  window.scrollTo(0, 0);

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Title>Sobre</Title>
      </Container>

      <img className={classes.image} src={"https://ik.imagekit.io/uxmag/Linda__YIXuI9TAi.jpeg"} alt="Sobre" />

      <Container maxWidth="sm">
        <p>Foi em 2017 que descobri o UX Writing, assim que o John Maeda publicou seu relatório anual de tendências, apontando a criação de conteúdo como fator essencial para uma boa Experiência do Usuário. Cursando jornalismo e trabalhando na área de tecnologia, logo me encantei pela nova profissão e decidi me aprofundar nos estudos. </p>
        <p>Meu Trabalho de Conclusão de Curso da Universidade Federal de Santa Catarina foi a oportunidade ideal para desenvolver uma plataforma em que eu pudesse me dedicar ainda mais a explorar as possibilidades do UX Writing, publicar meus aprendizados e compartilhar esse conhecimento com outros jornalistas e redatores interessados. </p>
        <ul className={classes.speciallist} style={{ listStyleType: "none" }}>
        <li><strong>Textos e Gestão do Projeto:</strong> Lilian Koyama </li>
        <li><strong>Orientação:</strong> Professora Rita Paulino </li>
        <li><strong>Tecnologia:</strong> Milton Bittencourt </li>
        <li><strong>Agradecimentos:</strong> Bruno Franzoni, Arthur Nascimento, Cloé de Haro e Felipe Campos </li>
        </ul>
      </Container>
    </div>
  )
}

export default About;

