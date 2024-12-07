// supporting server jor authentication 
const express = require("express")
// express instance to make changes and use it
const expressInstance = express()

// cors to remove header cookes error when called in any other fetch request in other operation
const cors = require("cors")
// jwt module to get authentication functionality for the web
const secretKeyJWT = "ManishThisIsVerySecretKey"
const JWT = require("jsonwebtoken")

// rate limiting function and supporting variable 
let userLoginCount = 0


// local data base
let localDB = [];


function rateLimiter(req,res,next){
    setTimeout(()=>{userLoginCount=0},5000)
    userLoginCount+=1
    if (userLoginCount>3){
        alerat("exciding the limit of attempt to refresh")
    }
    next()
}

// adding middle ware to use rate limiting for each of the route
expressInstance.use(rateLimiter)
// to avoid header error 
expressInstance.use(cors())

// get route to return the JWT Token for signup
expressInstance.post("/signin",(req,res)=>{
    // get the variable from the headers
    const userName = req.headers.username
    const passWord = req.headers.password
    
    // console.log((localDB.map((eachCredentials)=>{return [eachCredentials.password,passWord , eachCredentials.username,userName]})))
    if ((localDB.filter((eachCredentials)=>{return (eachCredentials.password==passWord && eachCredentials.username==userName)})).length>0){
        res.json({"server messge":"User already exist"}
        )
        
        console.log("debugg")
        return
    }
    const newCredentials = {username:userName,password:passWord,Token:JWT.sign({userName,passWord},secretKeyJWT)}
    localDB.push(newCredentials)
    // console.log(localDB)
    res.json({"Server Message":"User created successfully",Token:JWT.sign({userName,passWord},secretKeyJWT)})
    // console.log("debugg 2")
})

// creating a route for signin but only available with the JWT token based
expressInstance.post("/sign",(req,res)=>{
    const token = req.headers.token
    try{
        JWT.verify(token,secretKeyJWT)
        console.log(localDB.filter((eachCredit)=>{return eachCredit.Token==token}))
        if((localDB.filter((eachCredit)=>{return eachCredit.Token==token})).length>0){
        res.json({"Server response":"Sucessfully login"})
    }
    else{
        res.json({"server message":" the token that you have given is correct but not credential try with correct credential as well"})
    }
}
    catch{
        res.json({"Server response":"if for got the token try to get it from //signindecode parameter needed user name and password"})
    }
})


// another router that will return the token only from the credential 
expressInstance.post("/signindecode",(req,res)=>{
    
    console.log("trying for signindecoding")
    const userName = req.headers.username
    const passWord = req.headers.password
    console.log("trying for signindecoding")
    res.json({"Serer response":JWT.sign({userName,passWord},secretKeyJWT),decodedJWT:JWT.decode(JWT.sign({userName,passWord},secretKeyJWT))})
})

// express runnign on the port here 3000
expressInstance.listen(3000,()=>{console.log("listening")})