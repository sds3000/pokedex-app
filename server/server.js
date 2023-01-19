import express from 'express'
import postgres from 'postgres'
import dotenv from 'dotenv'
import cors from 'cors'


let app = express();
let sql = postgres(process.env)// .URL

app.use(express.json());
app.use(cors()); //cross browser
app.use(express.static('./src'));

/*
* fetch data from api
*/