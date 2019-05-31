import React from 'react'
import PostCard from './PostCard';

function Articles() {
  return (
    <div>
      <span>Articles</span>
      <div style={{ marginTop: "20px" }}>
        <PostCard></PostCard>
      </div>
      <div style={{ marginTop: "20px" }}>
        <PostCard></PostCard>
      </div>
      <div style={{ marginTop: "20px" }}>
        <PostCard></PostCard>
      </div>
      <div style={{ marginTop: "20px" }}>
        <PostCard></PostCard>
      </div>
    </div>
  )
}

export default Articles;

