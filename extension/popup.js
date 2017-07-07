var findExtButton = document.getElementById('extButton')
var findExtInput = document.getElementById('extInput')
function updateInput(event) {
    findExtInput.setAttribute('value', event.target.value)
}

document.addEventListener('DOMContentLoaded', function () {
    findExtInput.onchange = updateInput;
}, false);

var testF = function () {
    console.log(findExtInput.value)
}

findExtButton.addEventListener('click', testF);