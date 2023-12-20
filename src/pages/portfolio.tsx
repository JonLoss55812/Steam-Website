```tsx
import { GetStaticProps } from 'next';
import { PortfolioType } from '../types';
import { fetchData } from '../utils/fetchData';
import Portfolio from '../components/Portfolio';

interface PortfolioProps {
  portfolioItems: PortfolioType[];
}

export default function PortfolioPage({ portfolioItems }: PortfolioProps) {
  return (
    <div id="portfolio">
      <Portfolio portfolioItems={portfolioItems} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const portfolioItems: PortfolioType[] = await fetchData('portfolio');

  return {
    props: {
      portfolioItems,
    },
    revalidate: 1,
  };
};
```