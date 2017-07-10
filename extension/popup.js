var findExtButton = document.getElementById('extButton')
var NameInput = document.getElementById('NameCalc')
var kilometersInput = document.getElementById('kilometers')
var peselInput = document.getElementById('PeselCalc')
var surnameInput = document.getElementById('SurnameCalc')
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
                chrome.tabs.sendMessage(tabs[i].id, {peselValue: peselInput.value  , surnameValue: surnameInput.value, kilometersValue: kilometersInput.value  , nameValue: NameInput.value}, function(response) {
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