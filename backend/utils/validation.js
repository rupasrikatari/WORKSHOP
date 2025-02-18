const Joi = require("joi");

exports.validateWorkshop = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    image: Joi.string().required(),
    startTime: Joi.date().required(),
    endTime: Joi.date().required(),
    
  });

  return schema.validate(data);
};
