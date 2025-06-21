import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import bookRoute from "./app/modules/book/book.route";
import borrowRoute from "./app/modules/borrow/borrow.route";


const app: Application = express();
const port = 5000;

// middlewares
app.use(cors());
app.use(express.json());
 
// routes
app.use('/api', bookRoute);
app.use('/api', borrowRoute);



// server
app.get('/', (req, res) =>{
  res.send({success: true, message:'Library Management Home'})
});

app.listen(config.port, ()=> {
  console.log(`✅ Server is running on port ${port}`)
});

// mongo database
async function server () {
  try {
    console.log(config)
    await mongoose.connect(config.database_url!);

    console.log(`✅ Connected to Mongo Database`);
  } catch (error) {
    console.log(`❌ Server error ${server}`)
  }
}

server();