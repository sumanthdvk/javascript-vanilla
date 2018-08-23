var ajaxButton = document.querySelector("#ajaxButton");
var animalsDiv = document.querySelector("#animal-info");
var pageCounter = 1;

ajaxButton.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {//data is received
        var data = JSON.parse(ourRequest.responseText);
        renderHTML(data);
    } else {
        console.log("We connected to the server, but it returned an error.");
    }
};
ourRequest.onerror = function() {
    console.log("Connection error");
};
ourRequest.send();
pageCounter++;
if (pageCounter > 3) {
  ajaxButton.classList.add("hide-me");
}
});

function renderHTML(data) {
    var htmlString = "";

    for (let i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + "is a" + data[i].species + ". </p>"
        
    }
    animalsDiv.insertAdjacentHTML('beforeend', htmlString)
}
