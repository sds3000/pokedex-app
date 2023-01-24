import express from 'express'
import postgres from 'postgres'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config() // applies env variables

let app = express();
let sql = postgres({database: 'pokedb'});// .URL if deployed
let port = process.env.PORT;

// MIDDLEWARE ================================

app.use(express.json());
app.use(cors()); //cross browser
app.use(express.static('../src/components'));

// ROUTES =====================================
/*
* fetch data from api
*/

app.get('/', (req, res) => { // used to get saved teams from db
    sql`SELECT * FROM team`.then(result => res.json(result))
});

app.delete('/delete', (req,res) => {
    let team = req.body;
    let {name} = team
    sql`DELETE FROM team WHERE name = ${name} RETURNING *`.then((result) => {
        res.json(result)
    });
});

app.post('/poke', (req, res) => {
    let pokemon = req.body; // how to get req.body to = new-task
    let {name} = pokemon
    sql`INSERT INTO team(name) VALUES(${name}) RETURNING *`.then((result) => {
        res.send(result[0]) 
    })
    
})

app.put('/editpoke', (req, res) => { //need to hit edit button 2 times
    let pokemon = req.body;
    let {name, move1,move2,move3,move4,lvl} = pokemon
    sql`UPDATE task SET name = ${name,move1,move2,move3,move4,lvl} WHERE name=${name} RETURNING *`.then(result => {
        res.send(result)
    })
})

app.listen(4000, () => {
    console.log("10 years old for 20+ years... HOW???!!! -_-")
});