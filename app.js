let getul =document.getElementById
("ul")

function too(){
 let a= document.getElementById
 ("inp")

 let li = document.createElement 
 ("li")

 let litext = document.createTextNode
(a.value)

 getul.appendChild(li)
 li.appendChild(litext)
a.value = ""
console.log(li)

// delete button

let deletebtn = document.
createElement("button")
li.appendChild(deletebtn)
let deletebtntext = document.
createTextNode("Delete")
deletebtn.appendChild(deletebtntext)
deletebtn.setAttribute("onclick",
"dell(this)")

//  edit

let editbtn = document.
createElement("button")
li.appendChild(editbtn)
let editbtntext = document.
createTextNode("Edit")
editbtn.appendChild(editbtntext)
editbtn.setAttribute("onclick",
"edit(this)")
}
 
function edit(e){
let editor = prompt("Enter Edit Value",e.parentNode.firstChild.nodeValue)
 
e.parentNode.firstChild.nodeValue=
editor
 }

function dell(e){
  e.parentNode.remove()
}

  function del(){
  getul.innerHTML=""
 }


