import React, { Fragment } from "react";
import BiggerPost from "../components/BiggerPost";
import SmallerPost from "../components/SmallerPost";
import Title from "../components/Title";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { articleService } from '../services/index';

const posts = articleService.getArticles();

const Home = () => {
  return (
    <Fragment>
      <BiggerPost post={posts[0]} />
      
      <Container maxWidth="sm">
        <Title>Últimos artigos</Title>

        <Grid container spacing={4}>
          {posts.map(item => (
            <Grid key={item.id} item xs={6}>
              <SmallerPost post={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  )
}

export default Home;