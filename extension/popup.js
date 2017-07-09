var findExtButton = document.getElementById('extButton')
var findExtInput = document.getElementById('extInput')
function updateInput(event) {
  findExtInput.setAttribute("value", event.target.value)
}

document.addEventListener('DOMContentLoaded',function() {
    findExtInput.onchange = updateInput;
},false);

var testF = function() {
  console.log(findExtInput.value)
    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            chrome.tabs.executeScript(tabs[i].id, {file: "content.js"});
        }
    });
}

findExtButton.addEventListener('click', testF);