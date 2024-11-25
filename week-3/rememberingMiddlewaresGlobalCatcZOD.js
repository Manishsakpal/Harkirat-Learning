// importing express
const express = require ("express")

// creating a instance to use
const expressInstance = express()

// adding ZOD for validatating the user input is strongly type
const ZOD = require("zod")

// adding JWT to get the JWT token and validatation
const JWT = require("jsonwebtoken")
// secreat key fot the server to ignore default conversion this neede to be stored on a very secreat place 
const JWTsecretKey="Manish01"

// creating a local data base to authenticate by some users only
const localDB=[{username:"Manishsakpal",password:"sakpal01",user:"Manish"},{username:"VinaySakpal",password:"sakpal01",user:"Vinay"},{username:"Vikasbharati",password:"bharati",user:"Vikas"}]

// creating a  middle ware for reading body in json formar
expressInstance.use(express.json()) // here adding a functin which will convert the body parameter to any to JSON format

// creating a variable and function to be use ad middle ware for every route basically to count the visiote to the routes
let visitorsCount=0

function increaseVisotorCount(res,req,next){  //  here this parameters will be in use as no use for this specific scenario of res and req 
    visitorsCount+=1 
    next()                          // next is a call back function for middle ware which call the next function to perform
}
expressInstance.use(increaseVisotorCount)

// creating a route to get the visotors count
expressInstance.get("/getVisitors",(req,res)=>{res.json({"Current Visitor Count is":visitorsCount})})


// crating a  variable and function and will be only you by some specific route here it is POST
let postCount=0
function readCountPost(req,res,next){
    postCount+=1
    next()           // if not used this it will hung stucked
}

expressInstance.post("/signin",readCountPost,(req,res)=>{
    // logic to check correct credentials if correct credential return the jwt
    
    // getting the headers variable for username and password to this local server
    const userName = req.headers.username
    const userPass = req.headers.password
    if ((localDB.filter((eachCredentials)=>{return eachCredentials.username==userName && eachCredentials.password==userPass})).length>0){
        res.json({"Server Message":"Sucessfully Signed ","Token Generated":JWT.sign({username:userName},JWTsecretKey)}) // here the sign take 3 arguments payload the data to be loaded, secret key: secret key with combining the payload it will generate long string , and decodeing algorithm here in this example we are take it as default
    }
    else{
        res.json({"Server Message":`Non proper credentials ${userName} ${userPass} `})
    }

})


// another post request to get the decoded on on JWT token given by the user
expressInstance.post("/decode",(req,res)=>{
    const JWTToken = req.headers.token
    // will validatate first is it a valid token
    try {
        res.json({"Server Response":"Token is decoded sucessfully",TokenDecoded:JWT.verify(JWTToken,JWTsecretKey)})
    }
    catch {
        res.json({"Server Message":" Token is invalid"})
    }
    
})


// adding another route to just validatate the ZOD for object as parameter
expressInstance.get("/validateZOD",(req,res)=>{

    const verifyingObjZOD=ZOD.object({value: ZOD.number()})
    const UserInput = req.body
    if (verifyingObjZOD.safeParse(UserInput)){
        res.json({"Server message":"Successful validatation"})
    }
    else{
        res.json({"Server Message":verifyingObjZOD.safeParse(UserInput)})
    }
    
})

// adding another middle ware to catch if any exception happens and not to expose the code to the world
function CatchError(error,req,res,next){
    res.json({"Server Message":"Some Error at the Server",Message:String(error)})
    next()
}

expressInstance.use(CatchError)
expressInstance.listen(3000,()=>{console.log("Listning....")})