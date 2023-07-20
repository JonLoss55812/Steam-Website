```tsx
import React from 'react';
import { ServiceType } from '../types/index';
import fetchData from '../utils/fetchData';

interface ServicesProps {
  services: ServiceType[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export async function getStaticProps() {
  const services = await fetchData('services');
  return {
    props: {
      services,
    },
  };
}

export default Services;
```