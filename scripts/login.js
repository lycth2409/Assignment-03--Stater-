'use strict'
function check() {
    let userArray = localStorage.getItem('userArray')
    var username = document.getElementById('input-username').value;
    var userPw = document.getElementById("input-password").value;
    const findUser = JSON.parse(userArray).find(e =>
        e.username == username &&
        e.password == userPw
    )
    console.log(findUser)
    if (findUser) {
        window.location = "http://127.0.0.1:5500/pages/news.html"
    } else {
        alert('Error on login');
    }
    return false
}