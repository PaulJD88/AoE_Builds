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

  console.log ('about to create build')
  db.run('CREATE TABLE builds(id INTEGER PRIMARY KEY, civilisation_name text, build_name text, build_order text, url text)', err => {
    if (err) {
      console.log('table may already exist', err)
      return;
    }
    console.log('create a table')
  })
  console.log ('created builds table')
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/builds", (req, res, next) => {
  var sql = "select * from builds"
  var params = []
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json(rows)
    });
});

app.get("/builds/:civ", (req, res, next) => {
  var sql = `select * from builds where civilisation_name = "${req.params.civ}"`
  var params = []
  console.log(req.params.civ)
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json(rows)
    });
});

app.post('/builds', (req, res) => {
  console.log('We Got The Post Request!', req.body)
  var insertBuildQueryString = 'INSERT INTO builds (civilisation_name, build_name, build_order, url) VALUES (?,?,?,?)'
  db.run(insertBuildQueryString, [req.body.civilisation_name, req.body.build_name, req.body.build_order, req.body.url])
    res.send()
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})