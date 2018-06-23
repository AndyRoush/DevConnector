// brings in mongoose
const mongoose = require("mongoose");
// create schema using mongoose's documentation
const Schema = mongoose.Schema;

// Create Schema...this is how the data will be stored on mongodb
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now // logs the current time stamp
  }
});

//exports the mongoose model as User..."users" is the name of the model..."UserSchema is the schema of choice that the data needs to follow"
module.exports = User = mongoose.model("users", UserSchema);
