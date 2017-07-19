var findExtButton = document.getElementById('extButton')
var nameInput = document.getElementById('nameCalc')
var kilometersInput = document.getElementById('kilometers')
var peselInput = document.getElementById('peselCalc')
var surnameInput = document.getElementById('surnameCalc')
var zipcodeInput = document.getElementById('zipCodeCalc')
var licenseInput = document.getElementById('licenseDate')

function updateNameInput(event) {
    nameInput.setAttribute("value", event.target.value)
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
    nameInput.addEventListener('keydown', updateNameInput)
    kilometersInput.addEventListener('keydown', updateKmInput)
    peselInput.addEventListener('keydown', updatePeselInput)
    surnameInput.addEventListener('keydown', updateSurnameInput)
    zipcodeInput.addEventListener('keydown', updateZipcodeInput)
    licenseInput.addEventListener('change', updateLicenseInput)
},false);

var testF = function() {

    localStorage.clear()
    clearAllInputs()

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
                    nameValue: nameInput.value
                }, function(response) {
                chrome.tabs.sendMessage(tabs[i].id, {licenseDateValue: licenseInput.value, zipCodeValue: zipcodeInput.value, peselValue: peselInput.value, surnameValue: surnameInput.value, kilometersValue: kilometersInput.value, nameValue: nameInput.value}, function(response) {
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

function getStorageData() {
    var name = localStorage.getItem('name')
    var km = localStorage.getItem('km')
    var pesel = localStorage.getItem('pesel')
    var surname = localStorage.getItem('surname')
    var zipcode = localStorage.getItem('zipcode')
    var license = localStorage.getItem('license')

    nameInput.value = name
    kilometersInput.value = km
    peselInput.value = pesel
    surnameInput.value = surname
    zipcodeInput.value = zipcode
    licenseInput.value = license
}

function clearAllInputs() {
    var selectAllInputs = document.getElementsByTagName('input')

    for (i = 0; i < selectAllInputs.length; i++) {
        if (selectAllInputs[i].type == 'text' || selectAllInputs[i].type == 'number') {
            selectAllInputs[i].value = ''
        }
        if (selectAllInputs[i].type == 'date') {
            selectAllInputs[i].valueAsDate = null
        }
    }
}

getStorageData()

findExtButton.addEventListener('click', testF);