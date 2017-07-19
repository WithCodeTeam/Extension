var fname = document.getElementById("j_id0:frmApp:frmAppBlock:j_id128:j_id130:0:j_id132:j_id133").value;
var lname = document.getElementById("j_id0:frmApp:frmAppBlock:j_id128:j_id130:0:j_id132:j_id134").value;

console.log("source page ran");

var storArray = {
    src_fname: fname,
    src_lname: lname
};

chrome.storage.local.set({
    'newStorage': storArray
});