var mongoose = require('mongoose')

var Schema = mongoose.Schema

var usermodel = new Schema({
  name: {
    type: String,
    default: 'Quinchilla'
  },
  email: {
    type: String,
    default: 'a@b.com'
  }
})

var User = mongoose.model('User', usermodel)

module.exports = User
