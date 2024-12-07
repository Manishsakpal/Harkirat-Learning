// importing a mongoose to create a mongoesdb connection
const mongoose = require("mongoose")

// creating to mongosedb compass 
const passwordVariable="Sakpal19"
const dbName="experimentalDB"
mongoose.connect("mongodb+srv://sakpalmanish01:"+passwordVariable+"@cluster01.acoxy.mongodb.net/"+dbName)

// mongoose follow a scyma a modle so creating a  syma and storing it in a variable to use it as a instance
const modelVariable = mongoose.model("ExperimentalTable",{nameOfPerson:String,ageOfPerson:Number})  // here it tales 2 arguments first : table name, second : structure of take to pass

// now to creatq a instance to save it on the in the above created instance
const dataToAdd = new modelVariable({nameOfPerson:"Manish is adding this data",ageOfPerson:26})

// actually pushing the data to the database its a promisified function to save this data

dataToAdd.save().then(message=>{console.log("successfully update the db "+message)}).catch(error=>{console.log("failed to update to the db "+error)})

