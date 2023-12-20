```tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero-section" className="hero-section">
      <div className="container mx-auto px-4">
        <div className="hero-content">
          <h1 className="text-5xl font-bold text-white">Welcome to Steammn</h1>
          <p className="text-xl text-white mt-4">We are a leading App Design and Development Company</p>
          <div className="mt-8">
            <a href="#contact" className="px-8 py-3 bg-white text-black rounded-full">Get a Quote</a>
            <a href="#portfolio" className="ml-4 px-8 py-3 bg-white text-black rounded-full">See Our Work</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.png" alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
```