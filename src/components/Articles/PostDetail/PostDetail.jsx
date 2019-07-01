import React from 'react'

function PostDetail({ match }) {
  return (
    <div>
      <h3> Artigo selecionado: {match.params.id}</h3>  
    </div>
  );
}

export default PostDetail;