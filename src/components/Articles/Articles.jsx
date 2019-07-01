import React from 'react'
import PostCard from './PostCard';

function Articles() {
  return (
    <div>
      <span>Articles</span>
      <div style={{ marginTop: "20px" }}>
        <PostCard articleId={1}></PostCard>
      </div>
      <div style={{ marginTop: "20px" }}>
        <PostCard articleId={2}></PostCard>
      </div>
      <div style={{ marginTop: "20px" }}>
        <PostCard articleId={3}></PostCard>
      </div>
      <div style={{ marginTop: "20px" }}>
        <PostCard articleId={4}></PostCard>
      </div>
    </div>
  )
}

export default Articles;

