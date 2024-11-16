// importing the node manage packages
const express=require("express")

// crearting a instance of package to be in use
const expressInstance = express()

// creating a middle ware body body to be passed in json format as body can be of other type as well here we are considering the body as in strickly in JSON format only
// as we have to add middleware for this specific Instance below is shown how does it actually works
expressInstance.use(express.json())
let visitorsCheck=0
let visitorsPost=0
// adding another middle ware where it will check the visitor count for each of the route available here
expressInstance.use(function(req,res,next){
    visitorsCheck+=1
    next()
})

// creating a get route will take one input parameter to perform and display value basically doubling the value
expressInstance.get("/",function(req,res){
    const variableValue=Number(req.query.input)
    console.log("Default called")
    res.json({keyinput:variableValue,itsDoubleValue:variableValue+variableValue})
    console.log("Default called")

})

// route to check visitor count
expressInstance.get("/howManyVisitor",function(req,res){
    res.json({"totalVistor":visitorsCheck,"visotorForPost":visitorsPost})
})

function visitorForPost(req,res,next){
    visitorsPost+=1
    next()
}
// adding middle ware for specific router to have seperate visitor count for this post guy
expressInstance.post("/post",visitorForPost,function(req,res){
    let InputPost=req.headers.input
    res.json({inputInP:InputPost})
})



// handling is any error to not to exposed the code to the world which also needed to be added as a middleware
expressInstance.use(function(error,req,res,next){
    res.json({"Error Found Manish":error})
    next()
})



expressInstance.listen(3000)