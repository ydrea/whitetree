// path: ./config/plugins.js

module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "aws-s3", // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
    },
  },
  // ...
});

// path: ./config/plugins.js

module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      //   provider: "sendgrid", // For community providers pass the full package name (e.g.
      //   provider: "strapi-provider-email-mandrill",
      //   providerOptions: {
      //     apiKey: env("SENDGRID_API_KEY"),
      //   },
      settings: {
        defaultFrom: "andrija.wrld@gmail.com",
        defaultReplyTo: "andrija.wrld@gmail.com",
        testAddress: "andrija.vranic@gmail.com",
      },
    },
  },
  // ...
});
