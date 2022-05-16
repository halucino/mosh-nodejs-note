const mongoose = require("mongoose");
const Joi = require("joi");
// 验证逻辑函数
function validateCustomer(customer) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.string().min(5).required(),
    isGold: Joi.boolean().required(),
  });
  return schema.validate(customer);
}
// 创建模型
const Customer = mongoose.model(
  "customer",
  new mongoose.Schema({
    // id: Number,
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    isGold: Boolean,
    phone: {
      type: String,
      required: true,
    },
  })
);

module.exports.Customer = Customer;
exports.validate = validateCustomer;
