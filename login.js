$(document).ready(function() {
    $('.login').click(function(event) {                             //При нажатии на кнопку регистрации срабатывает событие
        $('.login-out').toggleClass('active-login');                //Классу .login-out добавляется класс active-login
    });
});

console.log("HI");