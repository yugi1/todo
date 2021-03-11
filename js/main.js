
  let whereadd = document.getElementById("lol");
function addList() {
  let input = document.getElementById('lName').value;
  let adding = document.createElement("LI");
  adding.innerHTML = `${input}`;
  whereadd.appendChild(adding);
}
//function edit() {
 // let editbtn = document.createElement("BUTTON");   // Create a <button> element
//editbtn.innerHTML = "CLICK ME";                   // Insert text
// document.body.appendChild(editbtn); 
//}
let closing = document.getElementsById("lol");
let closingt = closing.document.getElementByTagName("LI");
let i;
for (i = 0; i < closing.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("test");
  span.className = "close";
  span.appendChild(txt);
closing[i].appendChild(span);
}
