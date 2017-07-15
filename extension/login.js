
var creatingInputsForms = document.getElementById('compare')


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
       creatingInputsForms.append('p')
    } else {
        return 'Najpierw musisz się zalogować'
    }
});