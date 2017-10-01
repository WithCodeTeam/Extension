chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        var kilometersValue = request.kilometersValue
        var carNrValue = request.carNrValue
        var bornDateValue = request.bornDateValue
        sendResponse({response: "Received the message!"});
        document.getElementById('vehicleRegistrationNumberId').value=carNrValue
        document.getElementById('vehicleMilageValueId').value=kilometersValue
        document.getElementById('vehicleFirstRegistrationDate').value=bornDateValue

        // var findAllInputs = document.querySelectorAll('input')
        // findAllInputs.value = inputValue
    });