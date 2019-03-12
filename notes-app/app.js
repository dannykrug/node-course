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
  handler: function(argv) {
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
  handler: function(argv) {
    notes.removeNote(argv.title)
  }
})

//Create read command

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function() {
    console.log("Reading a note")
  }
})

//Create list command

yargs.command({
  command: 'list',
  describe: 'List the notes',
  handler: function() {
    console.log('Listing all Notes')
  }
})

//add, remove, read, list

yargs.parse()
