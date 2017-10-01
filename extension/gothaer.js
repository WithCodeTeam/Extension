chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        var kilometersValue = request.kilometersValue
        var carNrValue = request.carNrValue
        sendResponse({response: "Received the message!"});
        document.getElementById('vehicleRegistrationNumberId').value=carNrValue
        document.getElementById('vehicleMilageValueId').value=kilometersValue

        // var findAllInputs = document.querySelectorAll('input')
        // findAllInputs.value = inputValue
    });