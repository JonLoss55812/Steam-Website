```tsx
import React from 'react';
import { PortfolioType } from '../types/index';
import fetchData from '../utils/fetchData';

interface PortfolioProps {
  portfolioData: PortfolioType[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolioData }) => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">Our Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioData.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img src={item.image} alt={item.title} />
            <div className="portfolio-item-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export async function getStaticProps() {
  const portfolioData = await fetchData('portfolio');
  return {
    props: {
      portfolioData,
    },
  };
}

export default Portfolio;
```