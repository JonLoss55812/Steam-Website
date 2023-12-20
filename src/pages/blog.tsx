```tsx
import { GetStaticProps } from 'next';
import { fetchData } from '../utils/fetchData';
import { PostType } from '../types/index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

interface BlogProps {
  posts: PostType[];
}

export default function BlogPage({ posts }: BlogProps) {
  return (
    <div>
      <Header />
      <Blog posts={posts} />
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchData('posts');

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};
```