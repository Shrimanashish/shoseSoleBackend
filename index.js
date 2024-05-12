import express from 'express'
import  dotenv from 'dotenv'
import Connection from './database/db.js';
import Routes from './routes/route.js'
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true})); 
app.use(cors());
app.use('/',Routes);
const Port   = process.env.PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password);
app.listen(Port , ()=>console.log(`server is running succssfully on port ${Port}`));
// two arrgument
// port Number
// call back Function

// dotenv initionlions
// .config function

