module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "krimobadworker@gmail.com",
        from: "karim@badwork.fr",
        subject: "You have a new area",
        text: `New area <b>UUID</b> : ${result.name}`,
      });
    } catch (error) {
      console.log("error email send :", error);
    }
  },
};
