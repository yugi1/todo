const lists = {
  1: {
    name: "Shopping list",
    todos: [
      {
        text: 'bananas',
        completed: false
      },
      {
        text: '1 lbs ground turkey',
        completed: false
      }
    ]
  },
 }
 const currentList = lists[0];
 

//print out created lists
function printLists() {
  let holder = '<ul class="holdingL">';
  lists.forEach((list) => {
    listsHtml += `<li class="listN">${list.name}</li>`;
  });
 
  holder += '</ul>';
  document.getElementById('lists').innerHTML = listsHtml;

}
//react to user input for lists
function addList() {
  const input = document.getElementById('lName').value;
  if(input) {
    document.getElementById("lol").innerHTML = `<li class="list-item">${input}</li>`;
    render();
  }
}