let darkModeClick = document.getElementById("darkMode");   // 夜間模式按鈕
let darkModeChange = false;                                // 夜間模式是否開啟
let bg = document.querySelector('.not-on-top, #gtco-header-navbar');

// 按鈕按下後開啟夜間模式
darkModeClick.addEventListener('click', function() {
    if(darkModeChange){
        darkModeOff();
        darkModeChange = false;

        // 夜間模式按鈕圖案變更
        darkModeClick.classList.remove("lnr-sun");
        darkModeClick.classList.add("lnr-moon")
    }else{
        darkModeOn();
        darkModeChange = true; 

        console.log(bg);

        // 夜間模式按鈕圖案變更
        darkModeClick.classList.remove("lnr-moon");
        darkModeClick.classList.add("lnr-sun")
    }
})


// 修改CSS偽元素(覆蓋)- 夜間模式 START
function darkModeOn(){
    document.styleSheets[0].insertRule('#body:after {background: #404040; background: -webkit-linear-gradient(to right, #404040, #000000); background:linear-gradient(to right, #404040, #000000)}', 0);
}

function darkModeOff(){
    document.styleSheets[0].deleteRule('#body:after {background: #404040; background: -webkit-linear-gradient(to right, #404040, #000000); background:linear-gradient(to right, #404040, #000000)}', 0);
}
// 修改CSS偽元素(覆蓋)- 夜間模式 END