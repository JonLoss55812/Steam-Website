```tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer__info">
          <h3>Company Name</h3>
          <p>1234 Street Name, City, State, 12345</p>
          <p>Email: info@company.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer__links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
        <div className="footer__social">
          <a href="https://www.facebook.com/company" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook-icon.svg" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/company" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter-icon.svg" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/company" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin-icon.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```