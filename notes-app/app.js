const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

//Customize Yargs version

yargs.version('1.1.0')

//Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

//Create remove command

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

//Create read command

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.readNote(argv.title)
  }
})

//Create list command

yargs.command({
  command: 'list',
  describe: 'List the notes',
  handler() {
    notes.listNotes()
  }
})

//add, remove, read, list

yargs.parse()
