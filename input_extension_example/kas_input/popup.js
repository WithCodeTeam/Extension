function doContent(){
    chrome.tabs.executeScript(null, {file: "content_nomsg.js"});
};

function doTarget(){
    chrome.tabs.executeScript(null, {file: "content2.js"});
};

document.getElementById("btnSource").onclick = doContent;
document.getElementById("btnTarget").onclick = doTarget;