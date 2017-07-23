var findExtButton = document.getElementById('extButton')
var nameInput = document.getElementById('nameCalc')
var kilometersInput = document.getElementById('kilometers')
var peselInput = document.getElementById('peselCalc')
var surnameInput = document.getElementById('surnameCalc')
var zipcodeInput = document.getElementById('zipCodeCalc')
var licenseInput = document.getElementById('licenseDate')

// var brandSelect= document.getElementById('brand')
//
// brandSelect.appendChild(brandMtu)

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(brandMtu);
        if (request.greeting == "hello")
            sendResponse({farewell: "goodbye"});
    });
function updateInput(event) {
    nameInput.setAttribute("value", event.target.value)
}

document.addEventListener('DOMContentLoaded',function() {
    nameInput.onchange = updateInput;
},false);

var testF = function() {
    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            console.log(tabs[i].url)

            if (tabs[i].url === "https://mw.mtu.pl/#/policy/step1") {
                chrome.tabs.executeScript(tabs[i].id, {file: "mtu.js"});
                chrome.tabs.sendMessage(tabs[i].id, {
                    licenseDateValue: licenseInput.value,
                    zipCodeValue: zipcodeInput.value,
                    peselValue: peselInput.value,
                    surnameValue: surnameInput.value,
                    kilometersValue: kilometersInput.value,
                    nameValue: nameInput.value,
                }, function(response) {
                    console.log(response.response);
                })
            }
            if (tabs[i].url === "https://gonet.pl/SalesUX.aspx#!/komunikacja1") {
                chrome.tabs.executeScript(tabs[i].id, {file: "gothaer.js"});
                chrome.tabs.sendMessage(tabs[i].id, {
                    nameValue: nameInput.value
                }, function(response) {
                    console.log(response.response);
                })
            }

        }
    });
}

findExtButton.addEventListener('click', testF);