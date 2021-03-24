
  let whereadd = document.getElementById("lol");
function addList() {
  let input = document.getElementById('lName').value;
  let adding = document.createElement("LI");
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

//make close button work
function close() {
  
}


