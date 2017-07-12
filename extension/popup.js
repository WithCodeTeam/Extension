var findExtButton = document.getElementById('extButton')
var NameInput = document.getElementById('NameCalc')
var kilometersInput = document.getElementById('kilometers')
var peselInput = document.getElementById('PeselCalc')
var surnameInput = document.getElementById('SurnameCalc')
var zipcodeInput = document.getElementById('ZipCodeCalc')
var licenseInput = document.getElementById('licenseDate')

function updateNameInput(event) {
    NameInput.setAttribute("value", event.target.value)
    localStorage.setItem('name', event.target.value)
}
function updateKmInput(event) {
    kilometersInput.setAttribute("value", event.target.value)
    localStorage.setItem('km', event.target.value)
}
function updatePeselInput(event) {
    peselInput.setAttribute("value", event.target.value)
    localStorage.setItem('pesel', event.target.value)
}
function updateSurnameInput(event) {
    surnameInput.setAttribute("value", event.target.value)
    localStorage.setItem('surname', event.target.value)
}
function updateZipcodeInput(event) {
    zipcodeInput.setAttribute("value", event.target.value)
    localStorage.setItem('zipcode', event.target.value)
}
function updateLicenseInput(event) {
    licenseInput.setAttribute("value", event.target.value)
    localStorage.setItem('license', event.target.value)
}

document.addEventListener('DOMContentLoaded',function() {
    NameInput.addEventListener('keydown', updateNameInput)
    kilometersInput.addEventListener('keydown', updateKmInput)
    peselInput.addEventListener('keydown', updatePeselInput)
    surnameInput.addEventListener('keydown', updateSurnameInput)
    zipcodeInput.addEventListener('keydown', updateZipcodeInput)
    licenseInput.addEventListener('keydown', updateLicenseInput)
},false);

var testF = function() {

    localStorage.clear()

    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            console.log(tabs[i].url)

            if (tabs[i].url === "https://mw.mtu.pl/#/policy/step1") {
                chrome.tabs.executeScript(tabs[i].id, {file: "mtu.js"});
                chrome.tabs.sendMessage(tabs[i].id, {licenseDateValue: licenseInput.value, zipCodeValue: zipcodeInput.value, peselValue: peselInput.value, surnameValue: surnameInput.value, kilometersValue: kilometersInput.value, nameValue: NameInput.value}, function(response) {
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

function getStorageData() {
    var name = localStorage.getItem('name')
    var km = localStorage.getItem('km')
    var pesel = localStorage.getItem('pesel')
    var surname = localStorage.getItem('surname')
    var zipcode = localStorage.getItem('zipcode')
    var license = localStorage.getItem('license')

    NameInput.value = name
    kilometersInput.value = km
    peselInput.value = pesel
    surnameInput.value = surname
    zipcodeInput.value = zipcode
    licenseInput.value = license
}

getStorageData()

findExtButton.addEventListener('click', testF);