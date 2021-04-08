import fs from 'fs';

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// console.log(typeof bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData)
// console.log(`type: ${typeof parsedData}`)


// fs.writeFileSync('json_string.json', bookJSON)

// fs.writeFileSync('json_parsed.json', parsedData)


const dataBuffer = fs.readFileSync('json_string.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)


data.title = "War addnd Peace"

const dataString = JSON.stringify(data)

fs.writeFileSync('json_string.json', dataString)

