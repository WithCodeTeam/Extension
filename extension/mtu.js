document.body.style.backgroundColor = "silver";

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        var inputValue = request.inputValue
        var kilometersValue = request.kilometersValue
        var kilometersActive

        if (kilometersValue < 50001 )
        {kilometersActive = 25000}
        else if (50001 <= kilometersValue && kilometersValue < 100001 )
        {kilometersActive = 75000}
        else if (100001 <= kilometersValue && kilometersValue  < 150001)
        {kilometersActive = 125000}
        else if (150001 <= kilometersValue && kilometersValue  < 200001)
        {kilometersActive = 175000}
        else
        {kilometersActive = 225000}


        sendResponse({response: "Received the message!"});
        document.getElementsByName('pesel')[0].value=inputValue
        document.getElementsByName('name')[0].value=inputValue
        document.getElementsByName('milage')[0].value=kilometersActive

        // var findAllInputs = document.querySelectorAll('input')
        // findAllInputs.value = inputValue
    });