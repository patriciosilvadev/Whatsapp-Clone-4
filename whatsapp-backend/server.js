//importing
import express from 'express';


//app config
const app = express()
const port = process.env.PORT || 9000

//middlewares


//db config


//????

//api routes
app.get('/', (req,res)=>res.status(200).send('hello world'));

//listener
app.listen(port, ()=>console.log(`Listening on localhost ${port}`));