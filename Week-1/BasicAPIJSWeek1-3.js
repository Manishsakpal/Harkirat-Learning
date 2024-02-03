////// Level 1 notes

//// All about Strings
var StringVaribale="       Hello World, Hello World        ";

//Length
console.log("Length of the string",String,StringVaribale.length)



//Find index in string
console.log("Index of String first occurance",StringVaribale,StringVaribale.indexOf("World"))

//find index of string it's X occurance
console.log("Index of sting 'World' on X=2nd occurance",StringVaribale,StringVaribale.lastIndexOf("World"))


// String slicing
console.log("Slicing index of between 0 to index 5",StringVaribale.slice(0,6))



// Substring start ot the index  increment to thr start
console.log("Substring of string from the start index with addition to more index value",StringVaribale.substring(1,7))

//replace
console.log("Replacing the string World with the Univer",StringVaribale.replace("World","UNiverse"))



// all occurance replace
console.log("Replacing the  all occurance string World with the Univer",StringVaribale.replace(/World/g,"UNiverse"))
//console.log("Replacing all occurrences of 'World' with 'UNiverse'",     StringVaribale.replace(/World/g,"UNiverse"));




//split
console.log("Converting the string to Array with PSace between string",StringVaribale.split(" "))

//uppercase
console.log("Making the string to Upper case",StringVaribale.toUpperCase())

//lowercase
console.log("Making the string to lower case",StringVaribale.toLowerCase())


//trip removing spcaing
console.log("Removing the space in start and end",StringVaribale.trim())


//trimEnd removing spcaing 
console.log("Removing the space in start and end",StringVaribale.trimEnd())



//trimStart
console.log("Removing Spcaing from the start of string",StringVaribale.trimStart());



//Check string  includes

console.log("Checking the string includes",StringVaribale.includes("Hello"))


// Character at index 7 return values
console.log("Returning the value of char at index 7 in string",StringVaribale,StringVaribale.charAt(7))


// Search the "String" in the string  return index
console.log(" Searching the char 'o'", StringVaribale.search("World"))


//Concat the string
console.log("Adding string with the string",StringVaribale.concat(" Univers as well"))


//Checking the string stars with and end with
console.log("Checking the presents of string",StringVaribale.trim().startsWith("Hello"))


//Checking the ends with the string
console.log("Checking the string end with ",StringVaribale.trim().endsWith("World"))





//// All about number

var IntVaraible=2.0;
var StringVarialbe="554px";
var FloatVaribel="5.4";
var BoolVariable=false;
var ArrayVariable=[[8,67],2,45]
var objVarivable={1:3,4:5}
console.log("Converting the to Floateger value","Int to int",parseFloat(IntVaraible),"Sting to int",parseInt(StringVaribale),"Float to int",parseInt(FloatVaribel),"Boolean to int",parseInt(BoolVariable),"Array to int",parseInt(ArrayVariable),"Obj to int",parseInt(objVarivable))



var IntVaraible=2.3
var StringVarialbe="554px";
var FloatVaribel="5.4";
var BoolVariable=false;
var ArrayVariable=[[8,67],2,45]
var objVarivable={1:3,4:5}
console.log("Converting the to Float value","Int to Float",parseFloat(IntVaraible),"Sting to Float",parseFloat(StringVaribale),"Float to Float",parseFloat(FloatVaribel),"Boolean to Float",parseFloat(BoolVariable),"Array to Float",parseFloat(ArrayVariable),"Obj to Float",parseFloat(objVarivable))



var IntVaraible=2.3
var StringVarialbe="554px".toString();
var FloatVaribel="5.4".toString();
var BoolVariable=false.toString();
var ArrayVariable=[[8,67],2,45].toString()
var objVarivable={1:3,4:5}.toString()
console.log("Converting the to Float value","Int to string",(IntVaraible),"Sting to string",(StringVaribale),"Float to string",(FloatVaribel),"Boolean to string",(BoolVariable),"Array to string",(ArrayVariable),"Obj to string",(objVarivable))



//// All about Array 
var ArrayVariable=[[1,2,3],4,5,[6,7,8]]

//Append
console.log("Old Array Value before adding new values",ArrayVariable)
ArrayVariable.push(111,222,[333,444])
console.log("New Array value after adding new vlaues",ArrayVariable)

//pop

console.log("Old Array Value before poping out last value",ArrayVariable)
ArrayVariable.pop()
console.log("New Array value after popping out last vlaue",ArrayVariable)


//shift start pop from start of array
console.log("Old Array Value before poping out first value with shift",ArrayVariable)
ArrayVariable.shift()
console.log("New Array value after popping out first vlaue with shift ",ArrayVariable)




//unshift add elemnt in array from the start
console.log("Old Array Value before Adding in first value with shift",ArrayVariable)
ArrayVariable.unshift("Manish")
console.log("New Array value after Adding in first vlaue with shift ",ArrayVariable)




// find the element in the array
console.log("Old Array Value before Adding in first value with shift",ArrayVariable)
console.log("New Array value after Adding in first vlaue with shift ",ArrayVariable.find(function(val){return val>111}))



// map with lambda function
console.log("Using map function to make array element data manipulation",ArrayVariable.map((Val)=>{return Val*2}))
// map with lambda function
console.log("Using map function to make array element data manipulation",ArrayVariable.map((Val)=> Val*2))

// filter only works for condition where it is true
console.log("Filtering the data with condition base ",ArrayVariable.filter((Val)=>Val>3 ))
// filter only works for condition where it is true
console.log("Filtering the data with condition base ",ArrayVariable.filter((Val)=>{return Val>3} ))


// foreach
console.log("Below data is after foreach and each data manipulations")
ArrayVariable.forEach(function(val){console.log( val*3)})

//add two array
console.log("Addind data in array with another array",ArrayVariable.concat([1010,2020]))




// sort()
function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr);
  }
  sortExample([5,3, 2, 5, 4, 1]);
  



////// Level 2



class StudentAsClassName{
    constructor(Name,Std,Division){
        this.Name=Name;
        this.Std=Std;
        this.Division=Division;
    }

    showData(Time=1){
        console.log(`writing it ${this.Name} ${this.Std} ${this.Division}`.repeat(Time))
    }

    static StaticMethod(Time=1){
        console.log(`writing it ${this.Name} ${this.Std} ${this.Division}`.repeat(Time))
    }

}


var ObjOfClass= new StudentAsClassName("Manish",2,'f3');
ObjOfClass.showData();
console.log(StudentAsClassName.StaticMethod(4));






var currentTimeStamp= new Date();
console.log(currentTimeStamp.getDate())
console.log(currentTimeStamp.getTime())
console.log(currentTimeStamp.getFullYear())
console.log(currentTimeStamp.getDay())
console.log(currentTimeStamp.getMonth()+1)