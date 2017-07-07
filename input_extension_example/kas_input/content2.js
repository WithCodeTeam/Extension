console.log("target content2 ran");

var storedLegal = chrome.storage.local.get('newStorage', function (items) {
    console.log(items);

    document.getElementById("firstName").value = items.newStorage.src_fname;
    document.getElementById("lastName").value = items.newStorage.src_lname;
});