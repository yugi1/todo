
  let whereadd = document.getElementById("lol");
function addList() {
  let input = document.getElementById('lName').value;
  let adding = document.createElement("LI");
  //adding checkbox 
  adding.innerHTML = `${input}` + "<span class='editB'>Edit</span>" + "<span class='closeB'>\u00D7</span>";
  whereadd.appendChild(adding);
}

function toggleWindow() {
  document.getElementById("headerh").style.display = 'block';
}

document.getElementById("lol").addEventListener("click", todos);


let whereadd2 = document.getElementById('tabContent2');
function todoList() {
  let value = document.getElementById('todoAdd').value;
let adding2 = document.createElement("LI");
adding2.innerHTML = `${value}` + "<input type='checkbox' id='checkB'>" + "<span class='editB2'>Edit</span>" + "<span class='closeB2'>\u00D7</span>";
whereadd2.appendChild(adding2);
}

function todos() {
  document.getElementById("tabContent").innerHTML = "<input type='text' id='todoAdd' placeholder='To Do...'><input type='submit' id='todoB' value='Add To Do' onclick='todoList()'>";
} 


//adding the delete button
//let closing = document.getElementsById("lol");
//let closingt = closing.document.getElementByTagName("LI");
//let i;
//for (i = 0; i < closing.length; i++) {
  //let span = document.createElement("SPAN");
  //let txt = document.createTextNode("test");
 // span.className = "close";
 // span.appendChild(txt);
//closing[i].appendChild(span);
//}


