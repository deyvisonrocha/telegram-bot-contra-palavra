const mongoose = require('mongoose')

const magicWord = new mongoose.Schema({
  word: String,
  counterWord: String
})

module.exports = mongoose.model('MagicWord', magicWord)
