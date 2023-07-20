```javascript
module.exports = {
  env: {
    API_URL: process.env.API_URL,
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
    GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  },
};
```