console.log("Hello World")

function sampleFun(){
    var sa="Manish"
}

sampleFun()
// console.log(sa

let a = 0
var aa = 1
const aaa = 10

function s(){
    
    function f(){
        a=4
        aa=44
        function ff(){
            console.log(a,aa,aaa)
        }
        ff()
    }
    f()
}

s()
console.log(a,aa,aaa)
let arr = [[1,2],[3,4],[5,6],[7,7]]

arr.forEach(s=>{console.log(...s)})