```tsx
import React from 'react';
import { TestimonialType } from '../types/index';

interface TestimonialsProps {
  testimonials: TestimonialType[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center">What Our Clients Say</h2>
        <div className="flex flex-wrap mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white shadow rounded p-6">
                <p className="text-gray-600">{testimonial.content}</p>
                <div className="mt-6 flex items-center">
                  <img className="w-10 h-10 rounded-full mr-4" src={testimonial.clientImage} alt={testimonial.clientName} />
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.clientName}</h4>
                    <p className="text-gray-500">{testimonial.clientTitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
```