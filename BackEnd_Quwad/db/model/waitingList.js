import mongoose from "mongoose";

let isRequired = false;

let waitinglistEntrySchema = new mongoose.Schema ({
    emailId: {
        type: String,
        required: isRequired
    },
})

let waitingListModel = new mongoose.model("waitingListEntry", waitinglistEntrySchema, "waitingList");

export default waitingListModel