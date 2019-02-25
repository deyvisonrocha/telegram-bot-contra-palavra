const mongoose = require('mongoose')

const event = new mongoose.Schema({
  message_at: String,
  word: String,
  chatId: String
})

module.exports = mongoose.model('Event', event)
