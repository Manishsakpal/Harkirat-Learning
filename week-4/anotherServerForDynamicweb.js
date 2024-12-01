//// here this file is creating a server and just one single route is created to return a json formated data which will be used but some
//// dynalic written code

// express to hos the web 
const express = require("express")
// also adding cros so that we can ignore the error for the headers
const cors = require("cors")
// instance so that later on if needed any more middle wares to be added it would be easy
const expressInstance=express()
// no middle ware needed
// expressInstance.use(function(req,res,next){next()})
expressInstance.use(cors())
let visitorCount = 0
// just for experiment creating a function as middle ware who will stop the user to refree the route under 2 second
function rateLimiting(req,res,next){
    
    let requestVisitor = 0; // Initialize the visitor count variable properly

    function limiVisitor() {
        requestVisitor = 0; // Reset the visitor count to 0
    }
    
    function visitorLogic() {
        visitorCount+=1
        console.log(visitorCount)
        if (visitorCount>3){
            alert("exced limit")
            visitorCount=0
        }
        // Reset the visitor count after 1 second
        setTimeout(()=>{visitorCount=0}, 1000);
    }
    visitorLogic()
    next()

}

expressInstance.use(rateLimiting)
// create a route name getJson on the express instance created at the start
expressInstance.get("/getJson",function(req,res){
    const randomNumber = Math.floor(Math.random() * 5); // Generates a random number between 0 and 4
    const value={0:{JsonValue:[{title:"Manish",description:"description added by Manish"},{title:"Vinay",description:"description added by Vinay"},{title:"Vikas",description:"description added by Vikas"},{title:"Suraj",description:"description added by Suraj"}]},1:{JsonValue:[{title:"Manish",description:"description added by Manish"},{title:"Vinay",description:"description added by Vinay"},{title:"Vikas",description:"description added by Vikas"}]},2:{JsonValue:[{title:"Manish",description:"description added by Manish"},{title:"Vinay",description:"description added by Vinay"},{title:"Suraj",description:"description added by Suraj"}]},3:{JsonValue:[{title:"Manish",description:"description added by Manish"},{title:"Vikas",description:"description added by Vikas"},{title:"Suraj",description:"description added by Suraj"}]},4:{JsonValue:[{title:"Vinay",description:"description added by Vinay"},{title:"Vikas",description:"description added by Vikas"},{title:"Suraj",description:"description added by Suraj"}]}}
    // console.log(value[randomNumber])
    res.json(value[randomNumber])
})

//  no global catch needed here as no complex code is writen
// expressInstance.use(function(error,req,res,next){new throw ("custom error");next})

// listening on the port 4500
expressInstance.listen(4500)