const notes = require("./notes");
// const chalk = require("chalk");
const yargs = require("yargs");

//Create add command
yargs.command({
	command: "add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Note Title",
			demandOption: true, //required option in command
			type: "string" // if --title only written without string gives true in value
		},
		body: {
			describe: "Note Body",
			demandOption: true, //required option in command
			type: "string" // if --title only written without string gives true in value
		}
	},
	handler(argv) {
		notes.addNotes(argv.title, argv.body)
	}
});

//Create remove command
yargs.command({
	command: "remove",
	describe: "Remove a note",
	builder: {
		title: {
			describe: "Note Title",
			demandOption: true, //required option in command
			type: "string" // if --title only written without string gives true in value
		}
	},
	handler(argv) {
		notes.removeNotes(argv.title);
	}
})

//Create list command
yargs.command({
	command: "list",
	describe: "listing notes",
	handler() {
		notes.listNotes();
	}
});

//Create read command
yargs.command({
	command: "read",
	describe: "Read a note",
	builder: {
		title: {
			describe: "Note Title",
			demandOption: true, //required option in command
			type: "string" // if --title only written without string gives true in value
		}
	},
	handler(argv) {
		notes.readNotes(argv.title);
	}
});

console.log(yargs.parse())
