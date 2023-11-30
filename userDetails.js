const mongoose=require("mongoose");

const UserDetailsScehma =new mongoose.Schema(
    {
        id:Number,
        name: String,
        phone: Number,
        place: String,
        vehicle: String,
        required:Number,
        timestamp:String,
        date:String,
        time:String,
    },
    {
        collection:"UserInfo",
    }
);
mongoose.model("UserInfo",UserDetailsScehma);