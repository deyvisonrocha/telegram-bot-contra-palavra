const mongoose = require('mongoose')

const MagicWord = require('./../models/magicWord')

MagicWord.findOne({ word: 'Elefante' }, (err, result) => {
  if (!result) {
    MagicWord.create({
      word: 'Elefante',
      counterWord: 'Pica-Pau'
    })
  }
})

MagicWord.findOne({ word: 'Basquete' }, (err, result) => {
  if (!result) {
    MagicWord.create({
      word: 'Basquete',
      counterWord: 'Michael Jordan'
    })
  }
})
MagicWord.findOne({ word: 'Elefante' }, (err, result) => {
  if (!result) {
    MagicWord.create({
      word: 'Caminhão',
      counterWord: 'Árvore de Natal'
    })
  }
})

module.exports = () => {
  console.log('Setup database')
}
