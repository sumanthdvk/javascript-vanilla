var ajaxButton = document.querySelector("#ajaxButton");
var animalsDiv = document.querySelector("#animal-info");

ajaxButton.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload = function() {
    var data = JSON.parse(ourRequest.responseText);
    renderHTML(data);
};
ourRequest.send();
});

function renderHTML(data) {
    var htmlString = "";

    for (let i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + "is a" + data[i].species + ". </p>"
        
    }
    animalsDiv.insertAdjacentHTML('beforeend', htmlString)
}
