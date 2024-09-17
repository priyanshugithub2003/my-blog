// src/App.js
import React from 'react';
import './App.css'; // Importing CSS for App component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Priyanshu's Blog</h1>
        <p>This is a simple blog created using React.</p>
      </header>
      <section className="blog-section">
        <article className="blog-post">
          <h2>First Post</h2>
          <p>Date: 2024-09-18</p>
          <p>
            This is my first blog post! I'm excited to showcase my projects and experiences here.
          </p>
        </article>

        <article className="blog-post">
          <h2>Second Post</h2>
          <p>Date: 2024-09-19</p>
          <p>
            In this post, I'll walk you through the process of creating this simple blog using React.
          </p>
        </article>
      </section>
      <footer className="App-footer">
        <p>© 2024 Priyanshu's Blog</p>
      </footer>
    </div>
  );
}

export default App;
