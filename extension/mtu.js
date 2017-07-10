document.body.style.backgroundColor = "silver";

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        var inputValue = request.inputValue
        var kilometersValue = request.kilometersValue
        var kilometersActive

        switch (kilometersValue < 150001 ) {
            case true:
                    kilometersActive = 125000;
                    break;
            case false:
                    kilometersActive = 175000
                    break;
        }

        sendResponse({response: "Received the message!"});
        document.getElementsByName('pesel')[0].value=inputValue
        document.getElementsByName('name')[0].value=inputValue
        document.getElementsByName('milage')[0].value=kilometersActive

        // var findAllInputs = document.querySelectorAll('input')
        // findAllInputs.value = inputValue
    });