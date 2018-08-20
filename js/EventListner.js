var ourList = document.querySelector('#listItems');
var listItems = document.querySelectorAll('#listItems li' );
var button = document.querySelector('#button');
var newItemCounter = 1;
ourList.addEventListener('click', performAction);

function performAction(e) {
  document.querySelector('#displayText').innerHTML = e.target.innerHTML;
}

button.addEventListener('click', addItem);
function addItem() {
  ourList.innerHTML += "<li>new item " + newItemCounter + "</li>";
  newItemCounter++;
}