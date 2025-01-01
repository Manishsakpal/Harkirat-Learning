let globalIDTask=0
function addTaskList(){
    username=document.getElementById("userName").value
    messageTask=document.getElementById("userTask").value
    if (username && messageTask){
        

        const mainElement=document.getElementById("list")
        const newElement =document.createElement("div")
        newElement.setAttribute("id",globalIDTask)
        const childOneElement = document.createElement("div")
        childOneElement.innerHTML= "Task assigned to: " +username
        const childTwoElement = document.createElement("div")
        childTwoElement.innerHTML="Task: "+messageTask
        const complete = document.createElement("button")
        complete.innerHTML="Done"
        complete.setAttribute("onclick",`takeDoneRemove(${globalIDTask})`)
        newElement.appendChild(childOneElement)
        newElement.appendChild(childTwoElement)
        newElement.appendChild(complete)
        
        mainElement.append(newElement)
        globalIDTask+=1
}
}


function takeDoneRemove(id){
    document.getElementById(id).remove()
}

console.log("Backend is runnig")