'use strict'

function store() {
    let userArray = JSON.parse(localStorage.getItem('userArray')) || []

    let firstname = document.getElementById('input-firstname').value;
    let lastname = document.getElementById('input-lastname').value;
    let username = document.getElementById('input-username').value;
    let password = document.getElementById('input-password').value;
    let passwordConfirm = document.getElementById('input-password-confirm').value;
    
    // check data in database 
    const check = userArray.find(e => e.username === username)
    
    // create user 
    let user = {firstname, lastname, username, password}

    if (user.firstname.length == 0) {
        alert('Please fill in first name');
    } 
    else if (user.lastname.length == 0) 
    {
        alert('Please fill in last name');
    } 
    else if (user.username.length == 0)
    {
        alert('Please fill in user name');
    } 
    else if (check)
    {
        alert('username already exists');
    }
    else if (user.password.length == 0) 
    {
        alert('Please fill in password');
    } 
    else if (passwordConfirm.length == 0) 
    {
        alert('Please fill in password confirm');
    } 
    else if (user.password.length < 8) 
    {
        alert('Password must have more than 8 char');
    } 
    else if (user.password != passwordConfirm) 
    {
        alert('Password confirm not match');
    } 
    else {
        userArray.push(user)
        localStorage.setItem('userArray', JSON.stringify(userArray));
        alert('Your account has been created');
        window.location = "http://127.0.0.1:5500/pages/login.html"
    }
    return false
}