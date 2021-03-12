
  let whereadd = document.getElementById("lol");
function addList() {
  let input = document.getElementById('lName').value;
  let adding = document.createElement("LI");
  adding.innerHTML = `${input}`;
  whereadd.appendChild(adding);
}

//switching between lists - starting w creating a textbox in each one

function addTabLink() {
  let tabs = whereadd.document.getElementByTagName("LI"); //the list items selected
  let textBox = document.createElement("INPUT"); //creating input box
  let inputElement = textBox.setAttribute("type", "text"); //setting attribute to input box
  tabs.appendChild(inputElement);

}

//make current window header an onclick action with the add button
//function togglecurrent() {
  //let header = document.getElementsById("currentWindow");
  //if (header.style.display === "none") {
  //  header.style.display= "block";
  //} else {
   // header.style.display = "none";
 // }
//}

//function edit() {
 // let editbtn = document.createElement("BUTTON");   // Create a <button> element
//editbtn.innerHTML = "CLICK ME";                   // Insert text
// document.body.appendChild(editbtn); 
//} 

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


