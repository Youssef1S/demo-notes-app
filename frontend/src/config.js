const config = {
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51LiWdKIDSTaUBncJkz2FJoNZyJJYwdiLUggEoCcfvn0D9aTemFolSj4eVJpdCjf6IZ8Iqmm1z1H2Q7MLxLTj9ADX00Dd8dip5A",
  SENTRY_DSN:
    "https://905356fa64ca4bde86588e8b5b37dc4e@o1415134.ingest.sentry.io/6755969",
};

export default config;
