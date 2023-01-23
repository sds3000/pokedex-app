import express from 'express'
import postgres from 'postgres'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config() // applies env variables

let app = express();
let sql = postgres(process.env);// .URL if deployed
let port = process.env.PORT;

// MIDDLEWARE ================================

app.use(express.json());
app.use(cors()); //cross browser
app.use(express.static('./src/components'));

// ROUTES =====================================
/*
* fetch data from api
*/

app.get('/', (req, res) => { // used to get saved teams from db
    sql`SELECT * FROM team`.then(result => res.json(result))
});

app.delete('/delete-pokemon', (req,res) => {

});

app.listen(port, () => {
    console.log("10 years old for 20+ years... HOW???!!! -_-")
});