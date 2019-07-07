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
          by Marina Yalanska - Dec 28,
        </Typography>
      </Container>

      <img className={classes.image} src={`http://lorempixel.com/600/400/nightlife/${Math.floor((Math.random() * 10) + 1)}`} alt={article.title} />

      <Container maxWidth="sm">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, adipisci. Repudiandae eaque explicabo suscipit optio expedita dolores fuga possimus nam nihil. Magnam, repellat esse nostrum blanditiis sapiente ducimus impedit illo!</p>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/539018871&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia ipsum voluptas et numquam officiis debitis dolor tempora necessitatibus similique nisi, ducimus neque, corporis consequatur earum optio pariatur itaque maxime.</p>
        <img className={classes.imageText} src={`http://lorempixel.com/600/400/nightlife/${Math.floor((Math.random() * 10) + 1)}`} />
        <p>Fugit eius porro reiciendis placeat dolorem neque dolores hic. Enim ducimus at officia corrupti repudiandae dicta odit quis vero reiciendis porro. Vero, accusantium tempore tenetur totam nostrum corrupti eius officia.</p>
        <iframe width="100%" height="300" src="https://www.youtube.com/embed/atss7XN2j8I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>At molestias sit quis. Iste error asperiores in, consectetur accusantium ipsam doloremque unde quo, possimus, voluptas similique. Delectus illum officia architecto, maxime necessitatibus eum excepturi! Esse reprehenderit pariatur amet non.</p>

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