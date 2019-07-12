import React, { Fragment } from "react";
import BiggerPost from "../components/BiggerPost";
import SmallerPost from "../components/SmallerPost";
import Title from "../components/Title";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { articleService } from '../services/index';

const posts = articleService.getArticles();

// const posts = [
//   {
//     id: 1,
//     title: "Lorem ipsum dolor sit amet",
//     category: "Entrevistas",
//     overview: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
//   },{
//     id: 2,
//     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     category: "Dicas",
//     overview: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
//   },{
//     id: 3,
//     title: "eum et est occaecati",
//     category: "Processo e ferramentas",
//     overview: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
//   },{
//     id: 4,
//     title: "dolorem eum magni eos aperiam quia",
//     category: "Casos de estudo",
//     overview: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
//   },{
//     id: 5,
//     title: "dolorem dolore est ipsam",
//     category: "Entrevistas",
//     overview: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
//   },{
//     id: 6,
//     title: "nesciunt iure omnis dolorem tempora et accusantium",
//     category: "Dicas",
//     overview: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
//   },{
//     id: 7,
//     title: "in quibusdam tempore odit est dolorem",
//     category: "Processos e ferramentas",
//     overview: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
//   },{
//     id: 8,
//     title: "dolorum ut in voluptas mollitia et saepe quo animi",
//     category: "Dicas",
//     overview: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
//   }
// ]

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