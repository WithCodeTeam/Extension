
var loginInput = document.getElementById('loginInput')
var passwordInput = document.getElementById('passwordInput')git


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
            console.log(tabs[i].url)

            if (tabs[i].url === "https://mw.mtu.pl/#/policy/step1") {
                chrome.tabs.executeScript(tabs[i].id, {file: "mtu.js"});
                chrome.tabs.sendMessage(tabs[i].id, {inputValue: findExtInput.value}, function(response) {
                    console.log(response.response);
                })
            }
            if (tabs[i].url === "https://gonet.pl/SalesUX.aspx#!/komunikacja1") {
                chrome.tabs.executeScript(tabs[i].id, {file: "gothaer.js"});
                chrome.tabs.sendMessage(tabs[i].id, {inputValue: findExtInput.value}, function(response) {
                    console.log(response.response);
                })
            }

        }
    });
}

findExtButton.addEventListener('click', testF);