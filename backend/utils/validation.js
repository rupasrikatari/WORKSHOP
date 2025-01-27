const Joi = require("joi");

exports.validateWorkshop = (data) => {
  const schema = Joi.object({
    topic: Joi.string().required(),
    image: Joi.string().required(),
    about: Joi.array().items(Joi.string()).required(),
    whatWillYouGain: Joi.array().items(Joi.string()).required(),
    aboutInstructor: Joi.array().items(Joi.string()).required(),
    masterClassFor: Joi.array().items(Joi.string()).required(),
    testimonials: Joi.array().items(
      Joi.object({
        id: Joi.string(),
        image: Joi.string().optional(),
        text: Joi.string().optional(),
      })
    ),
    startDateTime: Joi.date().required(),
    endDateTime: Joi.date().required(),
    targetingUsers: Joi.array()
      .items(
        Joi.string().valid(
          "College students",
          "School students",
          "Professionals",
          "Government exam candidates"
        )
      )
      .required(),
    venue: Joi.object({
      mode: Joi.string().valid("online", "offline").required(),
      address: Joi.string().optional(),
    }).required(),
  });

  return schema.validate(data);
};
