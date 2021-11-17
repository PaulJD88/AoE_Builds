const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/builds', (req, res) => {
    res.send([
        {
            id: 1,
            name: "Turtling",
            subheading: "How to defend effectively",
            url: "https://google.com"
        },
        {
            id: 2,
            name: "Rush",
            subheading: "How to rush effectively",
            url: "https://diamondlobby.com/age-of-empires-4/english-longbow-rush-aoe4/"
        },
        {
            id: 3,
            name: "Turtling",
            subheading: "How to defend effectively",
            url: "https://diamondlobby.com/age-of-empires-4/english-longbow-rush-aoe4/"
        },
        {
            id: 4,
            name: "Rush",
            subheading: "How to rush effectively",
            url: "https://diamondlobby.com/age-of-empires-4/english-longbow-rush-aoe4/"
        },
    ])
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})