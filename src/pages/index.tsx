```tsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { fetchData } from '../utils/fetchData';
import { PostType, ServiceType, PortfolioType, TestimonialType, TeamMemberType } from '../types';

interface HomePageProps {
  posts: PostType[];
  services: ServiceType[];
  portfolio: PortfolioType[];
  testimonials: TestimonialType[];
  team: TeamMemberType[];
}

const HomePage: React.FC<HomePageProps> = ({ posts, services, portfolio, testimonials, team }) => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services services={services} />
      <Portfolio portfolio={portfolio} />
      <Testimonials testimonials={testimonials} />
      <Team team={team} />
      <Blog posts={posts} />
      <Contact />
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const posts = await fetchData('posts');
  const services = await fetchData('services');
  const portfolio = await fetchData('portfolio');
  const testimonials = await fetchData('testimonials');
  const team = await fetchData('team');

  return {
    props: {
      posts,
      services,
      portfolio,
      testimonials,
      team,
    },
  };
}

export default HomePage;
```