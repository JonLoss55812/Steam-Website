```tsx
import { GetStaticProps } from 'next';
import { fetchData } from '../utils/fetchData';
import { PostType } from '../types/index';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface AboutProps {
  aboutData: PostType;
}

const About: React.FC<AboutProps> = ({ aboutData }) => {
  return (
    <div>
      <Header />
      <main id="about-us">
        <h1>{aboutData.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: aboutData.content.rendered }} />
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const aboutData = await fetchData('about');

  return {
    props: {
      aboutData,
    },
  };
};

export default About;
```