import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import BackIcon from '@material-ui/icons/KeyboardArrowLeft';
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
    marginBottom: 20,
    marginTop: 10
  },
  category: {
    letterSpacing: 3,
    color: theme.palette.text.primary
  },
  back: {
    display: "flex",
    alignItems: "center",
    letterSpacing: 3,
    fontSize: 10,
    lineHeight: 1,
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
  },
  flex: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const Post = ({history, match}) => {

  const classes = useStyles();

  const article = articleService.getArticle(match.params.id);
  const relatedPosts = articleService.getRelatedPosts(article.id, article.relatedArticles);

  console.log(history)

  const goBack = () => {
    history.goBack();
  }

  window.scrollTo(0, 0);

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <div className={classes.flex}>
          <Typography className={classes.category} variant="overline" component="h4">
            {article.categoryDescription}
          </Typography>
          <Typography className={classes.back} component="p" onClick={() => goBack()}><BackIcon style={{fontSize: 12, marginRight: 5}} /> VOLTAR </Typography>
        </div>

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