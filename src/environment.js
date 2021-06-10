const dev = {
  NAME: "Development Mode",
  API_URL: "http://dev.codemaster.com.br:30020",
  API_URL_SCM: "http://dev.codemaster.com.br:30030",
  s3: {
    BUCKET: "YOUR_DEV_S3_UPLOADS_BUCKET_NAME"
  }
};

const staging = {
  NAME: "Staging Mode",
  // API_URL: "http://staging.questcode.org",
  API_URL: "http://dev.codemaster.intranet:30020",
  API_URL_SCM: "http://dev.codemaster.intranet:30030"
  //s3: {
  //  BUCKET: "YOUR_DEV_S3_UPLOADS_BUCKET_NAME"
  //}
};

const production = {
  NAME: "Production",
  API_URL: "http://prod.codemaster.intranet",
  s3: {
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  }
};

const config =
  process.env.REACT_APP_STAGE === "production"
    ? production 
    : process.env.REACT_APP_STAGE === "staging"
      ? staging
      : dev;

/*
let config;
if (process.env.REACT_APP_STAGE === "production") {
  config = prod;
} else if (process.env.REACT_APP_STAGE === "staging") {
  config = staging;
} else {
  config = dev;
}
*/

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
