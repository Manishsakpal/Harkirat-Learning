// importing the ZOD module for use
const ZODHere=require("zod")

const zodInstance=ZODHere.string().min(4).max(7)


console.log(zodInstance.safeParse("Manish"))
 
const zodSecondInstance=ZODHere.object({key: ZODHere.string(),value:ZODHere.number()})

console.log(zodSecondInstance.safeParse({'5':5}))

