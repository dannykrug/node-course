const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

const notes = getNotes()

console.log(notes)

console.log(validator.isURL('krug.com'))

console.log(chalk.blue.inverse('Success!'))
