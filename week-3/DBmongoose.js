// mongoose is a add on the mongobd package with scymatic validation
const mongooes = require("mongoose")

// connet to a server with the url for the served provided and creating a new Database
mongooes.connect("mongodb+srv://sakpalmanish01:Manish19@cluster01.acoxy.mongodb.net/SampleHrer")

// creating table in existing connected Database
const tableDB=mongooes.model("SampleTable",{name: String,roll_no:Number})

// adding data with creating object of table 
const DBTable = new tableDB({name:"vikas",roll_no:44})

// a promisified actualling updating on the database machine
DBTable.save().then(()=>mongooes.disconnect()).catch((error)=>{console.log("some error occured")})

