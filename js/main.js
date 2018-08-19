var ourList = document.querySelector('#listItems');
var listItems = document.querySelectorAll('#listItems li' );
var button = document.querySelector('#button');

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', performAction);
  
}

function performAction() {
  document.querySelector('#displayText').innerHTML = this.innerHTML;
}

button.addEventListener('click', addItem);
function addItem() {
  ourList.innerHTML += "<li>new item</li>";
}