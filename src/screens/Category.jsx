import React, { Fragment } from "react";
import SmallerPost from "../components/SmallerPost";
import Title from "../components/Title";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { articleService } from '../services/index';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 80,
    minHeight: "100vh"
  }
}));

function Category({match}) {

  const posts = articleService.getArticlesByCategory(match.params.category);

  const classes = useStyles();

  window.scrollTo(0, 0);

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Title>Categorias</Title>
      </Container>
      <Fragment>  
        <Container maxWidth="sm">
          <Grid container spacing={4}>
            {posts.map(item => (
              <Grid key={item.id} item xs={6}>
                <SmallerPost post={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Fragment>
    </div>
  )
}

export default Category;

