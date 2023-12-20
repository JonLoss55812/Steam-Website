```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { validateRecaptcha } from '../utils/validateRecaptcha';

const Contact: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: any) => {
    const recaptchaValid = await validateRecaptcha(data.recaptcha);
    if (!recaptchaValid) {
      alert('reCAPTCHA validation failed. Please try again.');
      return;
    }

    // Handle form submission here
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" ref={register({ required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" ref={register({ required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" ref={register({ required: true })} />
          {errors.message && <span>This field is required</span>}
        </div>
        <div>
          <div id="recaptcha" ref={register({ required: true })}></div>
          {errors.recaptcha && <span>reCAPTCHA validation is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
```