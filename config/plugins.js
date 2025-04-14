module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "karim@badwork.fr",
        defaultReplyTo: "karim@badwork.fr",
      },
    },
  },
});
