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

        var kilometersActive
        var kilometersMtu = [25000, 75000, 125000, 175000, 225000]
        kilometersValue < 200001 ? kilometersActive = kilometersMtu[parseInt((kilometersValue / 50000 + '').charAt(0))] : kilometersActive = kilometersMtu[4]

        var brandMtu = function() {
                for (var i = 0; i < document.getElementsByName('etxBrand')[0].options.length; i++ ) {
                    document.getElementById('brand').innerHTML(document.getElementsByName('etxBrand')[0].options[i].text)
                }}


        sendResponse({response: brandMtu()});
        document.getElementsByName('pesel')[0].value=peselValue
        document.getElementsByName('name')[0].value=nameValue
        document.getElementsByName('surname')[0].value=surnameValue
        document.getElementsByName('milage')[0].value=kilometersActive
        document.getElementsByName('personMainAddressZip')[0].value=zipValue

        // var findAllInputs = document.querySelectorAll('input')
        // findAllInputs.value = inputValue
    });