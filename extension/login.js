
var creatingInputsForms = document.getElementById('compare')


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
       creatingInputsForms.appendChild(p)
    } else {
        return 'Najpierw musisz się zalogować'
    }
});