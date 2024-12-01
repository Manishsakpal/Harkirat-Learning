// creating a served hosting a website to support debounching.js basically this will share a url to fetch some data

// importing express to host a website
const express = require("express")
// to add headers adding library called cors
const cors = require('cors')

const expressInstance = express()
// adding middle ware cors so that headers will be accessable by the other featching functions for rendering
expressInstance.use(cors())

// creating a route named get summed value from two input parameters
expressInstance.get("/sum",(req,res)=>{
    const a=Number(req.query.a)
    const b=Number(req.query.b)
    res.send(String(a+b))
})

// listening on the port
expressInstance.listen(3500,()=>{console.log("Listning on the port")})