//importing
import express from 'express';
import mongoose from 'mongoose';
import Messages from "./dbMessages";

//app config
const app = express()
const port = process.env.PORT || 9000

//middlewares
app.use(express.json());


//db config
const connection_url = 'mongodb+srv://admin:Gaaf0I52sdE8kG2x@cluster0.rsti6.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
});


//????

//api routes
app.get("/", (req,res)=>res.status(200).send('hello world'));

app.post("/messages/new", (req, res) => {
        const dbMessage = req.body

        Messages.create(dbMessages, (err, data) => {
                if (err) {
                        res.status(500).send(err)
                } else {
                        res.status(201).send(data)
                }
        })
})

//listener
app.listen(port, ()=>console.log(`Listening on localhost ${port}`));