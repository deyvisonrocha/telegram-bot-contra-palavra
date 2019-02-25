const botgram = require('botgram')
const bot = botgram('621661133:AAHke49kS59E3U6OLXvtSAHYz8L2QoVIw7Y')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/iconic-test', {useNewUrlParser: true})

const Event = require('./models/event')
const MagicWord = require('./models/magicWord')

const setupDatabase = require('./migrations/setup')

setupDatabase()

bot.command('start', 'help', (msg, reply) => {
  reply.text('Por favor, digite a palavra-chave.')
})

bot.text((msg, reply, text) => {
  MagicWord.findOne({ word: msg.text }, (err, res) => {
    if (!res) {
      reply.text('Palavra mágica não corresponde.')
    } else {
      Event.create({
        message_at: new Date(),
        word: msg.text,
        chatId: msg.chat.id
      })
      reply.text(res.counterWord)
    }
  })
})

bot.command((msg, reply) => {
  reply.text('Invalid command.')
})
