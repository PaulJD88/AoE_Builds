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
  db.run('CREATE TABLE builds(name text, subheading text, url text)', err => {
    if (err) {
      console.log('table may already exist', err)
      return;
    }
    console.log('create a table')
  });
  console.log ('created builds table')
});

let builds= [
  {
      id: 1,
      name: "How to play",
      subheading: "The Abbasid Dynasty is a 2 Stars Difficulty civilization that, in many ways, does not play very differently from others at first glance.",
      url: "https://diamondlobby.com/age-of-empires-4/how-to-play-the-abbasids-in-aoe4/"
  },
  {
      id: 2,
      name: "General build",
      subheading: "This guide will present, explain and analyze a build order for the Abbasid Dynasty, a civilization in Age of Empires IV.",
      url: "https://www.videogamegirtle.com/age-of-empires-iv-abbasid-dynasty-build-order/"
  },
  {
      id: 3,
      name: "How to play",
      subheading: "The Chinese are a civilization that feels quite different from the others in Age of Empires 4. Their structures, units, and overall AoE4 Chinese build order have a distinct look, and they even count on unique systems such as the Dynasty System that makes them have their own unique gameplay aspects.",
      url: "https://diamondlobby.com/age-of-empires-4/how-to-play-the-chinese-in-aoe4/"
  },
  {
      id: 4,
      name: "Lancer Rush",
      subheading: "With this build, you'll be able to rush out a sizable swarm of Chinese Lancers to quickly take out enemy landmarks for an early victory.",
      url: "https://segmentnext.com/age-of-empires-4-chinese-build-order/"
  },
  {
      id: 5,
      name: "How to play",
      subheading: "The Delhi Sultanate are a 3 Stars difficulty civilization with the following traits: Military, Research, and Defense. This is the civilization that has the iconic War Elephants on their side.",
      url: "https://diamondlobby.com/age-of-empires-4/how-to-play-as-the-delhi-sultanate/"
  },
  {
      id: 6,
      name: "How to play",
      subheading: "The English AoE4 civilization is most likely the most defensive one in the game. They count with special units that gain significant bonuses when they're near English towers and castles, allowing players to effectively protect the civilization's structures and turtle their way to victory.",
      url: "https://diamondlobby.com/age-of-empires-4/english-longbow-rush-aoe4/"
  },
  {
      id: 7,
      name: "Longbow Rush",
      subheading: "This early offensive build grants you a huge military advantage over the adversary. The English Longbowman is one of the most dangerous units in Age of Empires 4 due to its long range and good attack speed.",
      url: "https://diamondlobby.com/age-of-empires-4/english-longbow-rush-aoe4/"
  },
  {
      id: 8,
      name: "Town Center Boom",
      subheading: "Booming is one of the most important things that players can do to have an ever-growing economy in Age of Empires, and it is a strategy that helps you win more games.",
      url: "https://diamondlobby.com/age-of-empires-4/english-town-center-boom-build/"
  },
  {
      id: 9,
      name: "How to play",
      subheading: "The French have a strong cavalry with competent armored knights that can lead your units by effectively charging into the enemies' frontline and breaking their defensive lines. In Age of Empires 4, the French civilization is based on the Medieval France that overcame plagues, revolts, and invasions.",
      url: "https://diamondlobby.com/age-of-empires-4/how-to-play-the-french-in-aoe4/"
  },
  {
      id: 10,
      name: "Knight Rush",
      subheading: " If you're interested in learning everything about the AoE 4 French build order, this guide is precisely what you need.",
      url: "https://diamondlobby.com/age-of-empires-4/french-knight-rush-build-order/"
  },
  {
      id: 11,
      name: "How to play",
      subheading: "he Holy Roman Empire is a standard civilization in many ways. Although it does have its unique units and structures, it's not like you're learning how to play as the Mongols in Age of Empires 4. They are a 2 Stars difficulty civilization that has the following traits: Infantry, Religion, Defense.",
      url: "https://diamondlobby.com/age-of-empires-4/how-to-play-holy-roman-empire/"
  },
  {
      id: 12,
      name: "Man-at-Arms-Rush",
      subheading: "Those who know how to play the Holy Roman Empire in Age of Empires 4 are aware of the early Man-at-Arms that this civilization has access to. Although they do grant a decent advantage to the Roman Empire, it's hard to see how it's a game-changer.",
      url: "https://diamondlobby.com/age-of-empires-4/roman-man-at-arms-rush-build-order/"
  },
  {
      id: 13,
      name: "How to play",
      subheading: "According to the game itself, the Mongols are a three stars difficulty civilization. Their traits are aggression, nomadic, and mobility. Those traits define the Mongols very well, especially when you consider their aggressive gameplay. Their unique characteristics allow players to move structures and rush military units quite early in the game.",
      url: "https://diamondlobby.com/age-of-empires-4/how-to-play-mongols-in-age-of-empires-4/"
  },
  {
      id: 14,
      name: "Horsemen Rush",
      subheading: "This rush aims to build an outpost within the enemy territory and defend the villagers, making it with early trained Horsemen. If you're a Mongols player and the idea of a rush that disrupts the enemy within five minutes appeals to you, this guide will show you the AoE4 Mongols build order.",
      url: "https://diamondlobby.com/age-of-empires-4/mongols-horsemen-rush-build-in-aoe4/"
  },
  {
      id: 15,
      name: "How to play",
      subheading: "Learning how to play the Rus might take some effort at first. Much like learning how to play as the Mongols, you will have to get used to a different early game that demands the use of unusual buildings and a unique system. The Rus gain Gold from killing animals. They also have unique buildings that affect how they collect resources, effectively changing how you have to think about gathering Food and Wood.",
      url: "https://diamondlobby.com/age-of-empires-4/how-to-play-as-the-rus-in-aoe4/"
  },
  {
      id: 16,
      name: "Beginner's Build",
      subheading: "A beginner's guide for playing the Rus civilization in Multiplayer 1v1. This guide focuses on land maps only.",
      url: "https://www.videogamegirtle.com/age-of-empires-iv-rus-multiplayer-beginners-guide/"
  },
]
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

app.post('/builds', (req, res) => {
  console.log('We Got The Post Request!', req.body)
  builds.push(req.body);
  var insertBuildQueryString = 'INSERT INTO builds (name, subheading, url) VALUES (?,?,?)'
  db.run(insertBuildQueryString, [req.body.name, req.body.subheading, req.body.url])
    res.send()
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})