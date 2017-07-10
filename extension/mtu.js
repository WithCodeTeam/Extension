document.body.style.backgroundColor = "silver";

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        var inputValue = request.inputValue
        sendResponse({response: "Received the message!"});
        document.getElementsByName('pesel')[0].value=inputValue
        document.getElementsByName('name')[0].value=inputValue

        // var findAllInputs = document.querySelectorAll('input')
        // findAllInputs.value = inputValue
    });