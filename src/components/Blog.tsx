```tsx
import React from 'react';
import { PostType } from '../types/index';
import { fetchData } from '../utils/fetchData';

interface BlogProps {
  posts: PostType[];
}

export const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <section id="blog">
      <h2>Latest Blog Posts</h2>
      <div className="blog-posts">
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>{post.title.rendered}</h3>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <a href={post.link}>Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const posts = await fetchData(`${process.env.API_URL}/posts`);

  return {
    props: {
      posts,
    },
  };
};
```