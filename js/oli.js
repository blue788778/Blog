let darkModeClick = document.getElementById("darkMode");
let darkModeChange = false;

darkModeClick.addEventListener('click', function() {
    if(darkModeChange){
        darkModeOff();
        darkModeChange = false;
    }else{
        darkModeOn();
        darkModeChange = true;
    }
})

// 修改CSS偽元素(覆蓋) START
function darkModeOn(){
    document.styleSheets[0].insertRule('#body:after {background: #BD7B00; background: -webkit-linear-gradient(to right, #BD7B00, #805300); background:linear-gradient(to right, #BD7B00, #805300)}', 0);
}

function darkModeOff(){
    document.styleSheets[0].deleteRule('#body:after {background: #BD7B00; background: -webkit-linear-gradient(to right, #BD7B00, #805300); background:linear-gradient(to right, #BD7B00, #805300)}', 0);
}
// 修改CSS偽元素(覆蓋) END