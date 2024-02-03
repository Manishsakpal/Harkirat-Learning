console.log("Hello World\n\n");
console.log("Hello World");
//Data type in javaScripts and their way of declaration all this are dynamic type as can change their data type at any point
// let doe have accissable through out a scope function or condition of class or golbal if declare in the very begning

//accessibale out of scope 
var VarLocalVar=1;


function example1() {
    
    if (true) {
        var x = 10;
        console.log("Var",x); // Output: 10
    }
    console.log("Out condition var",x); // Output: 10 (var is function-scoped)
}

example1();
//console.log(x) // Error: x is not defined (let is block-scoped)


let LetLocalVar=1;


function example() {
    let y = 200
    if (true) {
        //console.log("let",y); // Error: y is not defined (let is block-scoped )
        let y = 20;
        console.log("let",y); // Output: 20
    }
    console.log("Out condition let ",y); // Error: y is not defined (let is block-scoped  if let is not declare in up of if condition)
}
//console.log(y);

example();





//this type of varbiable can't be modified through out the execution
//const ConstLocalVar=1;
function example3() {
    const y = 200;
    if (true) {
        const y = 20;
        console.log("Constant",y); // Output: 20
    }
    console.log(y); // Error: y is not defined (let is block-scoped if const is not declare in up of if condition)
}
//console.log(y);

example3();



//Summary Var is only accessable out side of scope but still have limitation inside of funct where as for 
// const and let are only accable in side of scopy




//Priour accisable
//console.log(i) can't access prior for let varibale 
console.log(ii) //No error as he know this variable is going to be declare further in the program
//console.log(iii)  can't access prior for let varibale 
let i=0;
var ii=0;
const iii=0;
//let i=10;
console.log(i);



//All Data type mention below
// Declare variables
let text = "Hello, World!";
let age = 25;
let isTrue = true;
let undefinedVar;
let nullVar = null;
let uniqueSymbol = Symbol("uniqueSymbol");
let person = { name: "John", age: 30 };
let numbers = [1, 2, 3, 4, 5];
function greet(name) {
    console.log("Hello, " + name + "!");
}
let currentDate = new Date();
let pattern = /[a-z]/;

// Print variable values
console.log("String:", text);
console.log("Number:", age);
console.log("Boolean:", isTrue);
console.log("Undefined:", undefinedVar);
console.log("Null:", nullVar);
console.log("Symbol:", uniqueSymbol);
console.log("Object:", person);
console.log("Array:", numbers);
greet("Alice");
console.log("Date:", currentDate);
console.log("Regular Expression:",pattern);


//Explicit Type Conversion listed below Javascript also do supports implicit type converstion
//Explicit is done by manually changing data type
//Implicit is done by javascript automatically


//Mainly to string type conversion
// let x=0;
// x=String(x)

// x=toString(x) //int to string

//Mainly to conversion to Number
// let xx='0'
// xx=Number(xx)
// xx=parseInt(xx) //string to int

//Mainly to conversion to Float
// x='0.0'
// x=parseFloat(x);    //string to float


//Mainly to conversion to Number
//x='2'
//xx=0
//x=Boolean(x)  //string to Boolean
//xx=Boolean(xx)   //Int to boolean





let BoolCondition=false;
let BoolElseIfCondition=false;
//Condition
//f (Condition){execution of block if condition is true}
if (BoolCondition){
    console.log("If Condition is true");
}
else if(BoolElseIfCondition){
    console.log("Else if condition is true")
}
else{
    console.log("Else condition is true");
}


//Also alternate can be used 


let result = BoolCondition
  ? "If BoolCondition"        // If 'BoolCondition' is true, this value is chosen
  : BoolElseIfCondition
  ? "Else if BoolElseIfCondition"  // If 'BoolCondition' is false and 'BoolElseIfCondition' is true, this value is chosen
  : "Else BoolCondition";      // If neither 'BoolCondition' nor 'BoolElseIfCondition' is true, this value is chosen



//Loops in javastrips are while,do while, for, forEach 

let ForLoopArray= [1,2,3,4,5,6,7,];
let ForLoopObject={1:2,3:4,5:6};
let SampleInt=0;

while (SampleInt<10){
    SampleInt+=1
}
console.log("SampleINt value after While loop Increment",SampleInt);

do{
    SampleInt-=1
}
while(SampleInt>0)
console.log("SampleINt value after do While loop Decrement",SampleInt);


for(let EachIterartionArray in ForLoopArray){
    console.log(" for loop Array",EachIterartionArray);
}
for(let EachObjIteration in ForLoopObject){
    console.log("for loop Object",ForLoopObject[EachObjIteration]);
}

ForLoopArray.forEach(function(EachLoopArray){
    console.log("Fir each",EachLoopArray);
});

// ForLoopObject.forEach(function(EachIteration,EachIteration1){
//     console.log(EachIteration,EachIteration1);
// });

//Tips for iterables
//iterable.for map to modify value this are hight order function
console.log("Before map modifying",ForLoopArray);
ForLoopArray=ForLoopArray.map(eachValue=>eachValue*eachValue)
console.log("After map modifying",ForLoopArray);


//for Filter array with satisfied condition
console.log("Before Filter modifying for condition even only",ForLoopArray);
ForLoopArray=ForLoopArray.filter(Eachvalue=>Eachvalue%2==0);
console.log("After Filter modifying for condition even only",ForLoopArray);



//for reduce on array and get it's sum
console.log("Before reduce ",ForLoopArray);
let ForLoopArraySumReduce=ForLoopArray.reduce((StartDefault,EachINterationArray)=>EachINterationArray+StartDefault,0);
console.log("After reduce ",ForLoopArraySumReduce);

console.log("Normal Array",ForLoopArray);
ForLoopArraySumReduce=ForLoopArray.reduce((ReturningVal,EachItemArray)=>ReturningVal*EachItemArray,1);
console.log("After reduce value we get",ForLoopArraySumReduce);


ForLoopArray=[[1,2],[3,4],[5,6],[7,8]]
console.log("Normal Array",ForLoopArray);
ForLoopArraySumReduce=ForLoopArray.reduce((ReturnVal,EachIterationVal)=>ReturnVal.concat(EachIterationVal),[]);
console.log("After reduce value we get",ForLoopArraySumReduce);




ForLoopArray=[1,2,3,4,2,3,4,5,6,3,2]
console.log("Normal Array",ForLoopArray);
var ForLoopArraySumReduce_=ForLoopArray.reduce((ReturnVal,EachIterationVal)=> {
    ReturnVal[Number(EachIterationVal)]=(ReturnVal[EachIterationVal] || 0)+1;
    return ReturnVal
},{});
console.log("After reduce value we get",ForLoopArraySumReduce_);


ForLoopArray=[1,2,3,4,2,3,5,554,5,6,3,2]
console.log("Normal Array",ForLoopArray);
var ForLoopArraySumReduce_=ForLoopArray.reduce((ReturnVal,EachVal)=>EachVal>ReturnVal ? EachVal:ReturnVal,0);
console.log("After reduce value we get",ForLoopArraySumReduce_);



var keyValueArray = [['name', 'John'], ['age', 30], ['city', 'New York'],['name', 'John'], ['age', 30], ['city', 'New York']];
console.log("Normal Array",keyValueArray);
var ForLoopArraySumReduce_=keyValueArray.reduce((ReturnVal,[EachVal1,EachVal2])=>{
    ReturnVal[EachVal1]=EachVal2;
    return ReturnVal
},{});
console.log("After reduce value we get",ForLoopArraySumReduce_);






// Call back function
function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}

function CalBackFunction(Para1,para2,paraFunc3){
    return paraFunc3(Para1,para2);
}


console.log("Cal Back Function",CalBackFunction(10,20,add));

console.log("Cal Back Function",CalBackFunction(10,20,sub));



