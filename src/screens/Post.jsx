import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Title from "../components/Title";
import SmallerPost from "../components/SmallerPost";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 80,
    minHeight: "100vh"
  },
  title: {
    fontWeight: "bold",
    color: theme.palette.text.primary,
    marginBottom: 20
  },
  category: {
    letterSpacing: 3,
    color: theme.palette.text.primary
  },
  image: {
    width: "100%",
    marginBottom: 20
  },
  imageText: {
    width: "100%",
    marginBottom: 20
  },
  overview: {
    marginBottom: 20
  },
  author: {
    opacity: 0.7
  },
  related: {
    marginTop: 50,
  }
}));

const article = {
  id: 3,
  title: "Lorem ipsum dolor sit amet",
  category: "Processo e ferramentas",
  overview: "Ea molestias quasi exercitationem repellat qui ipsa sit aut"
};

const relatedPosts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    category: "Entrevistas",
    overview: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
  },{
    id: 2,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    category: "Dicas",
    overview: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
  }
];

const Post = () => {
  const classes = useStyles();

  window.scrollTo(0, 0);

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Typography className={classes.category} variant="overline" component="h4">
          {article.category}
        </Typography>

        <Typography className={classes.title} variant="h4" gutterBottom component="h1">
          {article.title}
        </Typography>

        <Typography className={classes.overview} variant="subtitle1" gutterBottom component="p">
          {article.overview}
        </Typography>

        <Typography className={classes.author} variant="caption" gutterBottom component="p">
          by Lilian Koyama - Dez 28, 2018
        </Typography>
      </Container>

      <img className={classes.image} src={`http://lorempixel.com/600/400/nightlife/${Math.floor((Math.random() * 10) + 1)}`} alt={article.title} />

      <Container maxWidth="sm">
        <p>O UX Writer está ganhando cada vez mais prestígio e destaque. Mas afinal de contas, quais são as habilidades que tornam esse profissional tão necessário? Faça o seguinte teste agora: entre em qualquer software ou aplicativo. Todo o texto que você encontrar ao navegar pela plataforma, deve (ou pelo menos deveria) ter sido criado por UX Writer. Para o usuário, é crucial entender de forma rápida qual é a ação esperada dele. Um exemplo excelente de boa usabilidade é o site do buscador Google. É fácil entender onde preciso digitar, como buscar apenas imagens ou então navegar pelas páginas. Toda experiência é tão simples que mesmo quem não tem familiaridade com a tecnologia não precisa pensar muito para entender como ele funciona. 
</p>
        <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/539018871&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe>
       
       <h2>Oi tudo bom?</h2>
        <p>
        Durante uma palestra para o maior evento de desenvolvimento de Software do Brasil, o The Developers Conference, realizada em abril de 2019 em Florianópolis, Alice Saraiva, uma das primeiras UX Writers do Brasil, elencou 3 princípios básicos para todo texto de UX Writing: clareza, concisão e consistência. 
        </p>
        <ul>
       <li>Claro: é preciso entender a mensagem, sem possibilidade para múltiplas interpretações;</li>
       <li>Conciso: quanto mais rápido de ser lido e 'escaneado' com os olhos, melhor; </li>
       <li>Consistência: manter a mesma linguagem. </li>

        </ul>
        <img className={classes.imageText} src={`http://lorempixel.com/600/400/nightlife/${Math.floor((Math.random() * 10) + 1)}`} />
        <p>
        Esses três princípios devem trabalhar sempre juntos, o que não significa que eles nunca vão conflitar entre si. O trabalho do UX Writer é entender qual a melhor forma de equilibrá-los. Para isso, primeiro, o profissional deve saber qual o tom e voz da marca que ele representa. Ele deve considerar se a marca quer transmitir conhecimento e inovação, proximidade e alegria ou seriedade e respeitabilidade. De qualquer forma, todas as comunicações precisam ser consistentes e ter a mesma linguagem. Essa é também, segundo o UX Writer da empresa Shakuro, Moses Kim, uma forma das empresas terem controle sobre como ela se relaciona com seus consumidores. Outra ferramenta importante é o entendimento do usuário por meio de pesquisas e entrevistas. Quanto mais você conhece seu usuário, seus gostos, dificuldades, habilidades, mais específico você consegue ser na hora de se comunicar com ele. Alice Saraiva também aponta o estudo das métricas de desempenho e testes de design para aprimorar seu texto, como o teste A/B. Nesse teste, são criados duas amostragens com apenas uma variável diferente entre elas. Por exemplo, para um grupo aleatório o botão se chama "Clique aqui" e para o segundo grupo aleatório, o botão se chama "Saiba mais". Depois de um tempo, é possível tirar a conclusão sobre qual teve melhor desempenho para aplicá-lo de forma única no seu produto. No caso de empresas maiores e com mais acessos, como a Netflix, em questão de segundos o teste já aponta, por exemplo, qual descrição do filme teve melhor resultado. Em empresas menores, o teste pode levar algumas semanas para ser finalizado.  
        </p>
        <iframe width="100%" height="300" src="https://www.youtube.com/embed/atss7XN2j8I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <div className={classes.related}>
          <Title>Artigos relacionados</Title>

          <Grid container spacing={4}>
            {relatedPosts.map(item => (
              <Grid key={item.id} item xs={6}>
                <SmallerPost post={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Post;