const fs = require('fs')

// const book = {
//   title: 'Scott Pilgrim',
//   author: 'Bryan Lee O\'Malley'
// }
//
// const bookJSON = JSON.stringify(book)
//
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
//
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Denny"
data.age = 29

const dannyJSON = JSON.stringify(data)

fs.writeFileSync('1-json.json', dannyJSON)

console.log(data.name, data.age)
