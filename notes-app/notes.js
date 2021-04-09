import fs from 'fs'
import chalk from 'chalk'

const getNotes = () => 'Your notes...'

const addNote = (title, author) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(note => note.title == title)
    const duplicateNote = notes.find(note => note.title == title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            author: author
        })
        saveNotes(notes)
        console.log(chalk.blue('New Note added!'))

    } else {
        console.log(chalk.red("Note title already taken!"))

    }
    // console.log(notes)


}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title != title)

    if (notesToKeep.length < notes.length) {
        console.log(chalk.blue('Note removed!'))
        saveNotes(notesToKeep)

    } else {
        console.log(chalk.red("Note doesn't exists!"))

    }
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your Notes'))
    notes.map((n) => {
        console.log(n.title)
    })
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title == title)

    // if (note) {
    //     console.log(chalk.inverse(note.title))
    //     console.log(note.author)
    // } else {
    //     console.log(chalk.red.inverse('Not Founded'))
    // }
    note ? (console.log(chalk.inverse(note.title, '-', note.author))) : console.log(chalk.red.inverse('Note not founded!'))
}

export default { addNote, getNotes, saveNotes, loadNotes, removeNote, listNotes, readNote }
// export const { getnotes, addnotes }