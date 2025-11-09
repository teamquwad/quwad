import express from "express";
import cors from "cors";
import waitingListRouter from "./routes/marketing/waitingListRouter.js";
import mongooseConnect from "./db/mongooseConnect.js";

await mongooseConnect();

const server = express();

server.use(express.json());

server.use(cors());

let port = 8000;

server.get("/", (req,res)=>{
    res.send({code:1, msg:"Quwad Backend"})
});

// Routes
server.use("/waitinglist", waitingListRouter);


// Server Listen
server.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});