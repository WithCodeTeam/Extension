
chrome.contextMenus.create({
   title:"Google Translate",
    contexts:["selection"],
    onclick: translate

});

function translate(text)  {
    chrome.tabs.create({url:'https://translate.google.pl/?hl=ang#en/pl/'+text.selectionText})
}