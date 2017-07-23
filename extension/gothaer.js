chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        var nameValue = request.nameValue
        sendResponse({response: "Received the message!"});
        document.getElementById('vehicleRegistrationNumberId').value=nameValue
        document.getElementById('vehicleMileageNextYearId').value=15

        // var findAllInputs = document.querySelectorAll('input')
        // findAllInputs.value = inputValue
    });