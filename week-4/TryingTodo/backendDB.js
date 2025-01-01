
const mongoose = require("mongoose")

const schema = mongoose.Schema({username:String,task:String})

var model = mongoose.model("TodoTable",schema)
async function mongoDBInitialize(){
    

    await mongoose.connect("mongodb+srv://sakpalmanish01:Manish19@cluster01.acoxy.mongodb.net/tryingTodoCluster").then(()=>{console.log("Connected successfully")}).catch(()=>{console.log("unable to connected please try again")})


}
async function addData(userName,taskEntry){

    mongoDBInitialize()

    const dataPut = new model({username:userName,task:taskEntry})

    await dataPut.save().then(()=>{console.log("successfully data new added")}).catch(()=>{console.log("unable to add data to the table")})
    
    await mongoose.disconnect()
}


async function getAllData(){

    await mongoDBInitialize()

    // const dataPut = new model({username:userName,task:taskEntry})
    const data=await model.find({})
    console.log(data)
    await mongoose.disconnect()
}



getAllData()
addData("Manish","Complete the task")
getAllData()