import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    boxShadow: "0 0 0 transparent",
    padding: 0,
    borderRadius: 0,
    marginBottom: 30,
    backgroundColor: "black"
  },
  media: {
    height: 380,
    opacity: 0.8
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(68, 0, 255, 0.5)",
    paddingTop: 60
  },
  category: {
    color: "white",
    letterSpacing: 3
  },
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: 700,
    lineHeight: 0.9
  },
  overview: {
    color: "rgba(255, 255, 255, .9)",
    lineHeight: 1
  }
}));

const BiggerPost = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link style={{ marginLeft: "auto" }} to={`/post/${post.id}`}>
          <CardMedia
            className={classes.media}
            image={`http://lorempixel.com/500/500/nightlife/${Math.floor((Math.random() * 10) + 1)}`}
            title={post.title}
          />

          <CardContent className={classes.content}>
            <Typography className={classes.category} variant="overline" component="h3">
              {post.category}
            </Typography>
            <Typography className={classes.title} variant="h6" gutterBottom component="h2">
              {post.title}
            </Typography>
            <Typography className={classes.overview} variant="body1" gutterBottom component="p">
              {post.overview}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}

export default BiggerPost;