```typescript
export interface PostType {
  id: number;
  title: string;
  content: string;
  slug: string;
  date: string;
}

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioType {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface TestimonialType {
  id: number;
  clientName: string;
  clientTitle: string;
  clientCompany: string;
  testimonial: string;
}

export interface TeamMemberType {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}
```