// a promisified function

// function promiseFunction(callbackFunction,promisePara){
//     return new Promise((resolve,reject)=>{
        
//             setTimeout(()=> {
//                 try{resolve(callbackFunction(promisePara))} 
//                 catch (error) {reject("error got by the promise function  "+error)}
//             }
//         ,3000)
//         }
//         )
// }


// function solvefun(promisePara){
//     // console.log("in the function")
//         if (promisePara>4){
//             throw new Error("Custom error: promisePara is greater than 4");
//         }
//         else{
//             // console.log("returning",promisePara*2)
//             return promisePara*2
//         }
// }

// promiseFunction(solvefun,2).then((allgood)=>{console.log(allgood)}).catch((error)=>{console.log("this is error",error)})

// async function asyncFunction(){
//     try{var promiseReturn = await promiseFunction(solvefun,2)}
//     catch (error){var promiseReturn = "this is error "+error}
//     console.log(promiseReturn)    
// }
    
// asyncFunction();asyncFunction();
// asyncFunction();asyncFunction()


function promisefunction(callbackFunction,callbackParameter){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
                resolve(callbackFunction(callbackParameter))
            }
            catch (errorSupply){
                reject("returned value from reject "+errorSupply)
            }
        },5000)
    })
}

function summing(parameter){
    if (parameter>3){ throw new Error("Custom error to throw if parameter is more then 3")}
    else{
        return parameter*2
    }
}

promisefunction(summing,3).then(resolveReturn=>{console.log(resolveReturn)}).catch(errorCatch=>{console.log(errorCatch)})


async function asyncFunction(){
    
    try{
        var promiseReturn = await promisefunction(summing,2)
    }
    catch (errorcatch){
        var promiseReturn = errorcatch
    }
    console.log(promiseReturn)
}

asyncFunction()