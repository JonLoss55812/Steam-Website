```tsx
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { validateRecaptcha } from '../utils/validateRecaptcha';
import { handleSubmit } from '../utils/handleSubmit';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: NextPage = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div>
      <Header />
      <main id="contact">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit(handleSubmit)}>
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
          <div className="g-recaptcha" data-sitekey={process.env.RECAPTCHA_KEY} data-callback={validateRecaptcha}></div>
          <button type="submit">Submit</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
```