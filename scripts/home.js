'use strict'
const user = localStorage.getItem('loginStatus')
if (user != null) {
    var description = document.getElementById("description");
    var text = `Welcome ${user}`;
    description.textContent = text;
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "none";
} else {
    document.getElementById("logout").style.display = "none";
}
function logoutFunction() {
    localStorage.removeItem('loginStatus');
    window.location = "http://127.0.0.1:5500/index.html"
}