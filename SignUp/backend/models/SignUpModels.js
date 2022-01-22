const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signUpTemplate = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      reuired: true,
    },
    date: {
      type: Date,
      defualt: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("mytable", signUpTemplate);
