// here we will understand about the password decoding to store it on DB or 
// Method hashing : converting given password any(combination of character and symbol) to a hashed string a very long character and symbol 
// -- here given password is converted to hash and stored into the DB, so every time someone login it convert given password to hash code and verify
// encryped method: adding a private code to given password to a custom converted to a long character and symbol 
// -- here given password is converted to custom long character and symbol where the key is store is store some where protected 

// for JWT here the same this happend only to make is fast to verify a authentication header is stored locally when authencitae no as encryption every time a proper convertion happens with the keys
// -- here the the local store token is been which is a JWT, basically they are used to verify authentication

// creation a express server
const express= require("express")

// creating a instance of express to use and no effecting the original module
const expressInstance = express()

// creating a variable for secret key for the server to authenticate
const secretKeyJWT="ManishSakpalHereSecret"

// importing a JWT for conversionf 
const JWT = require("jsonwebtoken")

// creating a basic local DB
const localDataBase=[{username:"ManishSakpal",password:"Sakpal",user:"Manish"},{username:"VinaySakpal",password:"Vinay",user:"Vinay"},{username:"vikas bharati",password:"VikasB",user:"Vikas"}]

// creating a route to authenticate with parameter username and password
expressInstance.post("/signup",(req,res)=>{

    // getting the parameter from the header
    const userName=req.headers.username
    const userPasswor = req.headers.password
    // logic to check is the user available in the DB
    console.log(`signup called ${userName}, ${userPasswor} `)
    let availableCheck= localDataBase.filter((itemsEach)=>{return itemsEach.username==userName && itemsEach.password==userPasswor })
    if (availableCheck.length>0){
        const jswString = JWT.sign({username:userName},secretKeyJWT) // here the sign functino need 3 input parameter first: Payload( main information needed to be decode), second: a secret key with is converted in hashing and then sended, third in type of algorithm need to be use to convert the secret key to convert hashing
        res.json({msg:"Authorized",secretToken:jswString})


    }
    else{
        res.json({nmsg:`signup called but failed ${userName}, ${userPasswor} `})
    }
})

// creating another route where all the DB user ID and password will be shown up except the user ID user loged into

expressInstance.get('/usersDB',(req,res)=>{
    const userName=req.query.username
    console.log("userDB")
    const tokenString=req.query.token
    if (localDataBase.filter((itemsEach)=>{return itemsEach.username==userName}).length>0 && JWT.verify(tokenString,secretKeyJWT).username==userName){
        res.json({msg:localDataBase.filter((itemIterateEach)=>{return itemIterateEach.username!=userName})})
    }
    else{
        res.json({msg:"invalid token or username please check and try again "})
    }
    
})



expressInstance.get("/home",(req,res)=>{res.json({msg:"Hi manish this home"})})


expressInstance.get("/verifyuser",(req,res)=>{
    const tokenValue=req.query.token
    try{
        const tokenDecoded=JWT.verify(tokenValue,secretKeyJWT)
        res.json({msg:"token matches the secreat key with the secreat this server has",tokenDecoded:tokenDecoded,userName:tokenDecoded.username})

    }
    catch {
        res.json({msg:"token is unknow to this server"})
    }
})

expressInstance.listen(3000,function(res,req){console.log("server converted")})