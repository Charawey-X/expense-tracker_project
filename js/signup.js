var firstName = document.getElementById('firstName');
var emailAddress = document.getElementById('email');
var password = document.getElementById('password');
var registerUser = document.getElementById('registerUser');


registerUser.addEventListener('click', registerFunc)

function registerFunc (e){
    e.preventDefault();
    localStorage.setItem('username', email.value);
    localStorage.setItem('password', password.value);
    window.location.href = 'login.html'


}
