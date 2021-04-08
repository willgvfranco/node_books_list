import fs from 'fs'
import chalk from 'chalk'

const getNotes = () => {
    return 'Your notes...'

}

const addNote = (title, author) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => {
        return note.title == title
    })

    if (duplicateNotes.length === 0) {
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

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
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

export default { addNote, getNotes, saveNotes, loadNotes }
// export const { getnotes, addnotes }