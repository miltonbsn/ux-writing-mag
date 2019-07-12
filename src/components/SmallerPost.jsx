import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%",
    boxShadow: "0 0 0 transparent",
    padding: 0,
    backgroundColor: theme.palette.secondary.light
  },
  media: {
    height: 130,
  },
  article: {},
  title: {
    lineHeight: 1,
    fontWeight: 700,
  },
  category: {
    fontSize: 8,
    lineHeight: 1,
    marginTop: 10,
    marginBottom: 5,
    color: theme.palette.secondary.light,
    letterSpacing: 1
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    "&:active": {
      color: theme.palette.primary.main
    }
  }
}));

const SmallerPost = ({post}) => {
  const classes = useStyles();

  if (!post) return null;

  return (
    <article className={classes.article}>
      <Card className={classes.card}>
        <CardActionArea>
          <Link to={`/post/${post.id}`}>
            <CardMedia
              className={classes.media}
              image={post.coverImage}
              title={post.title}
            />
          </Link>
        </CardActionArea>
      </Card>

      <Typography className={classes.category} variant="overline" component="h3">
        {post.category}
      </Typography>
      <Link className={classes.link} to={`/post/${post.id}`}>
        <Typography className={classes.title} variant="body1" gutterBottom component="h2">
          {post.title}
        </Typography>
      </Link>
    </article>
  );
}

export default SmallerPost;