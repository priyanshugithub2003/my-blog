import React from 'react';
import Post from './Post';

const posts = [
  {
    title: 'First Post',
    content: 'This is the content of the first post.',
    date: 'September 18, 2024'
  },
  {
    title: 'Second Post',
    content: 'Content of the second post goes here.',
    date: 'September 19, 2024'
  }
];

function BlogList() {
  return (
    <div className="main-content">
      {posts.map((post, index) => (
        <Post key={index} title={post.title} content={post.content} date={post.date} />
      ))}
    </div>
  );
}

export default BlogList;
