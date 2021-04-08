import yargs from 'yargs';
import notes from './notes-app/notes.js'
// yargs.help("h").alias("h", "help").argv;

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true
        },
        author: {
            describe: "Note author",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        // console.log('Adding a new note!', argv)
        // console.log('Title: ' + argv.title)
        // console.log('author: ' + argv.author)
        notes.addNote(argv.title, argv.author);
    }
}).argv;

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes!')
    }
}).argv;

yargs.command({
    command: 'read',
    describe: 'Read your notes',
    handler: function () {
        console.log('Reading a note!')
    }
}).argv;

yargs.parse()
