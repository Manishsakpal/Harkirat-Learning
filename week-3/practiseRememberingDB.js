// using module named mongoose
const mongoose = require("mongoose")

// connect the mongoose to the db and creating another data base collection which will contain all the tables
const connectstatus=mongoose.connect("mongodb+srv://sakpalmanish01:Manish19@cluster01.acoxy.mongodb.net/NewCollectionNN").then(()=>{console.log("Connected successfully")}).catch(()=>{console.log("some error in connecting")})

// creating instance scyma/modle another table into the created collection
const modleDB = mongoose.model("newTableEE",{name:Number})

// adding data into the instance created above 
const modleWithData = new modleDB({name:777})

// saving it/ pushing it to the actual database 
modleWithData.save().then(()=>{console.log("sucessfully pushed data")}).catch((ERROR)=>{console.log(ERROR)})

// disconnecting the data base
mongoose.disconnect().then(()=>{console.log("disconnected successfully")}).catch(()=>{console.log("some error occured at the time of disconnected")})