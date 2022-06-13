let darkModeClick  = document.getElementById("darkMode");      // 夜間模式按鈕
var darkModeChange = false;                                    // 夜間模式是否開啟
let mediaTitle     = window.matchMedia("(max-width:992px)");   // 行動裝置時的標題
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
    let mediaTitleTopDark = document.getElementsByClassName("lnr-sun")[0];   // 判斷夜間模式是開啟
    if(!mediaTitle.matches){
        // 當切換解析度大小時，Title顏色預設
        setStyle("initial");
        // 切換時不在頂端時日間模式顏色為白色
        if(mediaTitleTopDark == undefined){
            setStyle("");
        }
        // 切換時不在頂端時夜間模式顏色為深灰色(先清空，再加上顏色)
        if(mediaTitleTopDark != undefined){
            setStyle("");
            setStyle("#404040"); 
        }
    }
    else{
        // 切換為行動裝置時如果是夜間模式，Title也為黑色
        if(mediaTitleTopDark != null){
            setStyle("");
            setStyle("#404040");
        }
        else{
            setStyle("");
        }
    }
})


// 設置切換解析度大小時標題的背景顏色
function setStyle(bgColor){
    titleResolutionChange.style.setProperty('background-color', bgColor);
}


// 修改CSS偽元素(覆蓋)- 夜間模式 START
// 夜間模式開啟
function darkModeOn(){
    document.styleSheets[0].insertRule('#body:after {background: #404040; background: -webkit-linear-gradient(to right, #404040, #000000); background:linear-gradient(to right, #404040, #000000)}', 0);
    darkModeChange = true;

    // 夜間模式時標題不在頂端時也切換為黑色
    if(document.getElementsByClassName("not-on-topDark")[0] != null || document.getElementsByClassName("not-on-top")[0] != null){
        setStyle("#404040");
    }

    // 如果為行動裝置時標題變為黑色
    if(mediaTitle.matches){
        setStyle("#404040");
    }
}


// 夜間模式關閉
function darkModeOff(){
    document.styleSheets[0].deleteRule('#body:after {background: #404040; background: -webkit-linear-gradient(to right, #404040, #000000); background:linear-gradient(to right, #404040, #000000)}', 0);
    darkModeChange = false;

    // 夜間模式關閉時標題不在頂端時也切換為白色
    if(document.getElementsByClassName("not-on-topDark")[0] != null || document.getElementsByClassName("not-on-top")[0] != null){
        setStyle("#fff");
    }

    // 如果為行動裝置時標題變為白色
    if(mediaTitle.matches){
        setStyle("#fff");
    }
}
// 修改CSS偽元素(覆蓋)- 夜間模式 END


let dayChange = document.getElementById("dayChange");   // 簡介上營業資訊
var day       = new Date().getDay();                    // 星期日至六，分別是0~6
var nowTime   = new Date().getHours();                  // 現在時間，小時

// 開始時間上午10:00，星期六、日，營業至下午7:00、平日為下午6:00
if(day == 0 || day == 6){
    if(nowTime >= 10){
        dayChange.textContent = "今天營業至下午7:00";
    }
    else{
        dayChange.textContent = "今天營業開始時間為上午10:00";
    }
}
else{
    if(nowTime >= 10){
        dayChange.textContent = "今天營業至下午6:00";
    }
    else{
        dayChange.textContent = "今天營業開始時間為上午10:00";
    }
}