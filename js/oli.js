let darkModeClick = document.getElementById("darkMode");   // 夜間模式按鈕
var darkModeChange = false;                                // 夜間模式是否開啟
let mediaTitle = window.matchMedia("(max-width:992px)");   // 行動裝置時的標題
var titleResolutionChange = document.getElementById("gtco-header-navbar");   // 切換解析度大小時標題

// 按鈕按下後開啟夜間模式
darkModeClick.addEventListener('click', function() {
    if(darkModeChange){
        darkModeOff();

        // 夜間模式按鈕圖案變更
        darkModeClick.classList.remove("lnr-sun");
        darkModeClick.classList.add("lnr-moon");
    }
    else{
        darkModeOn();

        // 夜間模式按鈕圖案變更
        darkModeClick.classList.remove("lnr-moon");
        darkModeClick.classList.add("lnr-sun");
    }
})

// 監聽解析度有變化時標題的狀態
mediaTitle.addEventListener('change', function test(mediaTitle) {
    if(!mediaTitle.matches){
        // 當切換解析度大小時，Title顏色預設
        titleResolutionChange.style.setProperty('background-color', 'initial');
        // 切換時不在頂端時日間模式顏色為白色
        if(document.getElementsByClassName("not-on-top")[0] != null){
            titleResolutionChange.style.setProperty('background-color', '');
        }
            // 切換時不在頂端時夜間模式顏色為深灰色(先清空，再加上顏色)
        else if(document.getElementsByClassName("not-on-topDark")[0] != null){
            titleResolutionChange.style.setProperty('background-color', '');
            titleResolutionChange.style.setProperty('background-color', ':#404040');
        }
    }
})

// 修改CSS偽元素(覆蓋)- 夜間模式 START
// 夜間模式開啟
function darkModeOn(){
    document.styleSheets[0].insertRule('#body:after {background: #404040; background: -webkit-linear-gradient(to right, #404040, #000000); background:linear-gradient(to right, #404040, #000000)}', 0);
    darkModeChange = true;

    // 如果為行動裝置時標題變為黑色
    if(mediaTitle.matches){
        titleResolutionChange.style = "background-color:#404040";
    }
}

// 夜間模式關閉
function darkModeOff(){
    document.styleSheets[0].deleteRule('#body:after {background: #404040; background: -webkit-linear-gradient(to right, #404040, #000000); background:linear-gradient(to right, #404040, #000000)}', 0);
    darkModeChange = false;

    // 如果為行動裝置時標題變為白色
    if(mediaTitle.matches){
        titleResolutionChange.style = "background-color:#fff";
    }
}
// 修改CSS偽元素(覆蓋)- 夜間模式 END