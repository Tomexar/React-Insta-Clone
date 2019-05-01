    
import React from 'react';
import Post from './Post';
import './Post';

const PostsContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {props.dummy.map(p => <Post key={p.imageUrl} dummy={p} />)}
    </div>
  );
};

export default PostsContainer;