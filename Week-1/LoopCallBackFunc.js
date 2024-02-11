for (let x=0;x<10;x+=1){
    console.log("Hi my value is x=",x)
}
let ArrayVariable=[1,25,4,3]
ArrayVariable.forEach((x)=>{
    console.log("Array value is ",x);
})

function Functionname(Parameter){
    console.log("Printing Values",Parameter)
}
Functionname("Manish")



function function1(Para1,para2){
    console.log("Printing fom function 1",Para1,para2);
}



function function2(Para1,para2){
    console.log("Printing fom function 2",Para1,para2);
}


function callbacksuporter(functcallback,ParaONe,ParaTwo){
    console.log(functcallback(ParaONe,ParaTwo))
}

callbacksuporter(function1,"Manish","Sakpal")

callbacksuporter(function2,"Sakpal","Manish")