// basically fetch return promise even this pormise return a another promise to need to use nested promise resolve to catch it
const urlUnderFetch="https://fakerapi.it/api/v1/persons"

fetch(urlUnderFetch).then((firstPromiseObject)=>{return firstPromiseObject.json()}).then((secondPromiseActualData)=>{console.log(secondPromiseActualData)})


// fetch calling with await sync function 

async function getData(){
    const FirstPromiseFullFilled=await fetch(urlUnderFetch)
    const secondPromiseFullFilled=await FirstPromiseFullFilled.json()
    console.log(secondPromiseFullFilled)

}