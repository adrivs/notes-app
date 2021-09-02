const getNotes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    handler: function () {
        console.log('Adding a new note....')
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    handler: function () {
        console.log('Removing the note....')
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes.',
    handler: function () {
        console.log('Listing notes....')
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a notes.',
    handler: function () {
        console.log('Reading a note....')
    }
});

console.log(yargs.argv)