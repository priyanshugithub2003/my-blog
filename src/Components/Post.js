import React from 'react';

function Post({ title, content, date }) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{content}</p>
    </div>
  );
}

export default Post;
