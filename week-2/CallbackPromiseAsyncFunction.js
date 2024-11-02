// callback are the function which take function reference as argument to call is inside it self example below
function callbackFun(functionReference,para1,para2){
    //calling reference function using ()
    //here in above para1 and para2 will be the argument for the reference itself 
	return functionReference(para1,para2)
}

// below  function are the function for sample sum and substract with 2 parameter input taker each
function summing(para1Sum,para2Sum){
    return para1Sum+para2Sum
}

function substracting(para1subs,para2subs){
    return para1subs-para2subs
}


// calling the callback function with give the function name which are reference
console.log(callbackFun(summing,5,8))
console.log(callbackFun(substracting,4,7))




//// promises below here we are explaining about the promises how does they are different from call back brings the same functionality as call back
// as you can see the parameter below promiseFun is taking is now a function reference this parameter is for the function only no reference function is taken here as reference
function promiseFun(paraForFunctionUse,para2){
    // a proimse here it becoming different from the callback function as here is returns the status for the promises
	// as we can see the Promise class takes 2 arguments resolve and reject to indicated its status as well is place of successfull execution and another inplace of failure
    return new Promise((resolve,rejected)=>{
	    // for the if condition true i want to take the function refrence here as resolve and the reference argumment as well which used will place in the .then funciton of promise objecct
	    if (paraForFunctionUse=="resolve"){setTimeout(()=>{resolve(para2)},5000)}
             else{return rejecte("error" )}
    })

}



// here we are creating a promise instance 
const pinstance=promiseFun("resolve","Manish")
function referenceFun(para){return para+" "+para}
pinstance.then((result) => {console.log(referenceFun(result))})

