const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    code: String,
    expireIn: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("otp", otpSchema);
