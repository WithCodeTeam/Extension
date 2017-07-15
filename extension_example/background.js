chrome.contextMenus.create({
   title:"Google Translate",
    contextType:["selection"],
    onClicked:myFunction

});

function myFunction()  {
    alert("You just clicked")
}