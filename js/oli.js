let darkModeClick = document.getElementById("darkMode");
let body = document.getElementById("body");

darkModeClick.addEventListener('click', function() {
    body.style.background = "#BD7B00";
    body.style.background = "-webkit-linear-gradient(to right, #BD7B00, #805300)";
    body.style.background = "linear-gradient(to right, #BD7B00, #805300)";
    body.insertRule('body::after {}', 0);
    body.classList.toggle();
})