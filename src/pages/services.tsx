```tsx
import { GetStaticProps } from 'next';
import { ServiceType } from '../types/index';
import { fetchData } from '../utils/fetchData';
import Services from '../components/Services';

interface ServicesProps {
  services: ServiceType[];
}

export default function ServicesPage({ services }: ServicesProps) {
  return <Services services={services} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const services = await fetchData('services');

  return {
    props: {
      services,
    },
    revalidate: 1,
  };
};
```