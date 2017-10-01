chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        var nameValue = request.nameValue
        var surnameValue = request.surnameValue
        var peselValue = request.peselValue
        var kilometersValue = request.kilometersValue
        var zipValue = request.zipCodeValue
        sendResponse({response: "Received the message!"});
        document.getElementById('owner-firstName').value=nameValue
        document.getElementById('owner-lastName').value=surnameValue
        document.getElementById('owner-pesel').value=peselValue
        document.getElementById('mileage').value=kilometersValue
        document.getElementById('owner-postcode').value=zipValue

        // var findAllInputs = document.querySelectorAll('input')
        // findAllInputs.value = inputValue
    });