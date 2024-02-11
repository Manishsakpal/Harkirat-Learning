//Synchronous one by one performing tasks after completing 1 after 1
//normal function running up to down





//Asynchronus completing multi task at a time
//a function waits to execute let other to execute which are synchronous func














// Reading the text file below with a library fs
var fs= require("fs")  //require is a function to get access to the module which come pre installed in the node,js here string fs is the module
const { resolve } = require("path")
fs.readFile("SampleTextFile.txt","utf-8",function(errorpara,data){
    console.log(data)
})


//asynchronous function

function f1(pa1){
    console.log("f1 value is =",pa1)
}
function synchronousf(pa1){
    console.log("synchronous function =",pa1)
}

//in continous running threat i will wait for 1000ms seconds before executing the async function
setTimeout(()=>f1("Manish"),1000)
console.log("Synchroonousfunc")
f1("Sakpal")
synchronousf("vikas")


//to ways of ananomus function
//function(){};
//()=>{}




//Better understanding for asynchronus 


//synchronous function below
function synfun(para1){
    setTimeout(()=>{console.log("values here is =",para1)},para1*1000)
}


//Asynchronous function with 5000ms delay
let para1="SakpalManish"
setTimeout(()=>{console.log(para1)},5000)
for(var x=1;x<=10;x++){
    synfun(x)
}




//promise understanding cosin of call back in another method

function f1(){
    return new Promise((resolve)=>{
        resolve("manish")
    })
}
function f2(para){
    console.log("By promising",para)
}

f1().then(f2)



function f1(){
    return new Promise((resolve)=>{setTimeout(()=>{resolve("Manish this side")},5000)})
}

async function f(){
    var ff=  f1()
    ff.then((x)=>console.log("value added after asynch =",x))    //added with the prob=mise method
    var ff= await f1()      //added with the await method
    console.log("Asybc Awaits",ff)     
}


f()