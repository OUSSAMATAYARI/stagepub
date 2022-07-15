import express from 'express'
import bodyParser from 'body-parser' ;
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';


mongoose.connect('mongodb+srv://project:project@cluster0.ttbc2.mongodb.net/?retryWrites=true&w=majority');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
    res.send(
      [{
        title: "Hello World!",
        description: "Hi there! How are you?"
      },
      {
        title: "Docker",
        description: "Docker is awesome!"
      },
      {
        title: "WDJ",
        description: "WDJ is aight"
      }]
    )
  })

app.listen(process.env.PORT || 8081)