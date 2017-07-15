window.onload = function() {
    document.getElementById('save').onclick = function () {
        var value = document.getElementById('saveLine').value;

        chrome.storage.sync.set({'value': value}, function () {
            alert("Message saved")
        });
    };
    document.getElementById("get").onclick = function() {
        chrome.storage.sync.get('value', function(data){
            alert(data.value);
        });
    }
}