const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: String },
  address: { type: String },
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
