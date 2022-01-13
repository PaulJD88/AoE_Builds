const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

let db = new sqlite3.Database('./aoeiv.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the aoeiv database.');
});

db.run('CREATE TABLE builds(name text)', err => {
  if (err) {
    console.log('table may already exist', err)
    return;
  }
  console.log('create a table')
});

db.close();
let builds= [
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
]
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/builds', (req, res) => {
    res.send(builds)
  })

app.post('/builds', (req, res) => {
  console.log('We Got The Post Request!', req.body)
  builds.push(req.body);
    res.send()
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})