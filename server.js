import express from 'express';
import 'dotenv/config.js';
import './config/database.js';

const server = express();
const PORT = process.env.PORT || 8080;
const ready = () => console.log("server ready " + PORT);

//Middlewares
server.use(express.json());
server.use(express.urlencoded({extended :false}))
//Router more server
server.listen(PORT, ready);