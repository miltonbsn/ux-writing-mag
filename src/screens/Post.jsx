import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Title from "../components/Title";
import SmallerPost from "../components/SmallerPost";
import { articleService } from '../services/index';
import ReactHtmlParser from 'react-html-parser';

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
  },
  uxarticle: {
    marginTop: 35
  }
}));

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

const Post = ({match}) => {

  const classes = useStyles();

  const article = articleService.getArticle(match.params.id);

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
          by {article.author} - {article.when}
        </Typography>
      </Container>

      <img className={classes.image} src={article.coverImage} alt={article.title}/>

      <Container maxWidth="sm">

       {ReactHtmlParser(article.body)}

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