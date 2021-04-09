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
        notes.listNotes()
    }
}).argv;

yargs.command({
    command: 'read',
    describe: 'Read your notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true
        }
    },
    handler: (argv) => notes.readNote(argv.title)
}).argv;



yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
}).argv;


yargs.parse()
