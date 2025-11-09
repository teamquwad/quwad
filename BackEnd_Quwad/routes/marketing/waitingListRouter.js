import express from "express";
import waitingListModel from "../../db/model/waitingList.js";

let waitingListRouter = express.Router();

waitingListRouter.post("/", async (req, res)=>{
    
    let body = req.body;

    // console.log(body)

    // Create a record in waiting list collection
    try {
        let result = await waitingListModel.updateOne(
            {emailId:body.emailId},
            {$setOnInsert: {emailId:body.emailId}},
            {upsert:true}
        );

        // console.log(result);

        // Send response
        if(result.upsertedCount > 0){
            res.send({code:1, msg:"Successfully joined waiting list."});
        }else{
            res.send({code:1, msg:"Email id already exist."});
        }
        
    } catch (error) {
        // console.log(error);
        res.send({code:0, msg:"Something went wrong.", error});
    }
});

export default waitingListRouter