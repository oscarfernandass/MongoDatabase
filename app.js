const express= require("express");
const app=express();
const mongoose=require("mongoose");
app.use(express.json())

const mongoUrl="mongodb+srv://oscar:oscar@cluster0.oippzx6.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
})
.then(()=>{
    console.log("connected to database")
})
.catch((e)=>console.log(e));





app.post("/post",async(req,res)=>{
    console.log(req.body);
    const {data}=req.body;
});

require("./userDetails");

const User=mongoose.model("UserInfo");

app.post("/Post", async (req, res) => {
    const {
      id,
      name,
      phone,
      place,
      vehicle,
      required,
      timestamp,
      date,
      time,
    } = req.body;
  
    try {
      const newUser = await User.create({
        id,
        name,
        phone,
        place,
        vehicle,
        required,
        timestamp,
        date,
        time,
      });
  
      res.send({ status: "ok", user: newUser });
    } catch (error) {
      console.error(error);
  
      if (error.name === 'ValidationError') {
        res.status(400).send({ status: "validation error", message: error.message });
      } else {
        res.status(500).send({ status: "error", message: "Internal Server Error" });
      }
    }
  });
  

app.get("/Get", async (req, res) => {
    try {
      const allUsers = await User.find();
  
      if (allUsers.length > 0) {
        res.send({ status: "ok", users: allUsers });
      } else {
        res.send({ status: "not found", message: "No users found" });
      }
    } catch (error) {
      res.status(500).send({ status: "error", message: "Internal Server Error" });
    }
  });
module.exports = app;
  
  
