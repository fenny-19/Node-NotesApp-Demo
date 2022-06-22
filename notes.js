const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find((note) => note.title === title );
    
    debugger

    if(!duplicateNotes) {
        notes.push({
            title, body
        })
    
        saveNote(notes);
        cc
    } else {
        console.log(chalk.red.inverse("note with this title already exist!"));
    }
}

const removeNotes = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => note.title !== title );

    if(notesToKeep.length !== notes.length) {
        saveNote(notesToKeep);
        console.log(chalk.green.inverse('Note removed successfully!'));
    } else {
        console.log(chalk.red.inverse("no such note exists with this title!"));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    
    if(notes.length > 0) {
        console.log(chalk.inverse("Your notes"));
        notes.filter((note, key) => console.log(key + 1, note.title))
    } else {
        console.log(chalk.red.inverse('There are no notes to show!'));
    }
}

const readNotes = (title) => {
    const notes = loadNotes();
    const searchedNote = notes.find((note) => note.title === title );
    
    if(notes.length > 0) {
        if(searchedNote) {
            console.log(chalk.inverse(searchedNote.title));
            console.log(chalk(searchedNote.body));
        } else {
            console.log(chalk.red.inverse('No note found with this title!'));
        }
    } else {
        console.log(chalk.red.inverse('Notes are empty!'));
    }
}

const saveNote = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (error) {
        return [];
    }
}

module.exports = {
    addNotes,
    removeNotes,
    listNotes,
    readNotes
};






