
  let whereadd = document.getElementById("lol");
function addList() {
  let input = document.getElementById('lName').value;
 let adding = document.createElement("LI"); 
 adding.setAttribute("id", "clickMe");
  adding.innerHTML = `${input}<span class='editB'>Edit</span><span class='closeB'>\u00D7</span>`;
  whereadd.appendChild(adding);
  document.getElementById('clickMe').addEventListener("click", todos);

  let closeBtn = document.getElementsByClassName(`closeB`);
//make close button work
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function() {
    let parent = this.parentElement;
    parent.style.display = "none";
  }
}

}


function toggleWindow() {
  document.getElementById("headerh").style.display = 'block';
}

let whereadd2 = document.getElementById('tabContent2');
function todoList() {
  let value = document.getElementById('todoAdd').value;
let adding2 = document.createElement("LI");
adding2.setAttribute("id", "clickMe2");
adding2.innerHTML = `${value}` + "<input type='checkbox' id='checkB'>" + "<span class='editB2'>Edit</span>" + "<span class='closeB2'>\u00D7</span>";
whereadd2.appendChild(adding2);
}

function todos() {
  document.getElementById("tabContent").innerHTML = "<input type='text' id='todoAdd' placeholder='To Do...'><input type='submit' id='todoB' value='Add To Do' onclick='todoList()'>";
} 

