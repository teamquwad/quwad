
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let userName = process.env.DB_USERNAME;
let password = process.env.DB_PASSWORD;
let cluster = process.env.CLUSTER;
let dbName = process.env.DB_NAME;

let url = `mongodb+srv://${userName}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority`;

async function mongooseConnect() {

    try {
        await mongoose.connect(url);
        console.log("MongoDB Atlas connected successfully.");
        
    } catch (error) {
        console.log(error);
    }

}

export default mongooseConnect