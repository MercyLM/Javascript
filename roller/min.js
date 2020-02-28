//設定獎勵
var arr = ["1,000", "3,000", "6,000", "10,000", "15,000", "25,000", "50,000", "100,000", "200,000", "400,000", "600,000", "1,000,000"];
//有多少個獎勵
var num = arr.length;
//圓盤上的角度比例
var deg = 360 / num;

function pos() {

    //半徑175
    var r = 175;

    //座標初始化
    var x = 0;
    var y = 0;

    //html結構存放
    var text = "";

    //產生num個結構
    for (i = 0; i < num; i++) {

        text += "<span class='num'>" + arr[i] + "</span>";
    }
    //輸出結構
    document.getElementById("num-box").innerHTML = text;

    //賦予座標定位
    for (i = 0; i < num; i++) {

        var pos = document.getElementsByClassName("num");
        var arrow = document.getElementById("arrow");

        //半徑 * sin(deg) * Math.PI / 180 <-角度轉弧度 = Y軸
        pos[i].style.top = r * Math.sin(deg * (i - 2) * (Math.PI / 180)) + "px";
        //半徑 * cos(deg) * Math.PI / 180 <-角度轉弧度 = X軸
        pos[i].style.left = r * Math.cos(deg * (i - 2) * (Math.PI / 180)) + "px";
        //文字旋轉
        pos[i].style.transform = "translate(-50%, -50%) " + "rotate(" + deg * (i + 1) + "deg)";

        //箭頭的寬度, 直徑 * 角度 * (轉弧度公式) / 4 (左右各半的一半)
        arrow.style.borderRight = 2 * r * deg * (Math.PI / 180) / 4 + "px solid rgba(0,0,0,0)";
        arrow.style.borderLeft = 2 * r * deg * (Math.PI / 180) / 4 + "px solid rgba(0,0,0,0)";
    }
}

//亂數產生要旋轉的角度、動畫時間
function rand(e) {

    var arrow = document.getElementsByClassName("arrow")[0];
    
    e.target.style.display = "none";
    
    //隨機產生60~120次(5~10圈)
    var rand = parseInt(Math.random() * 60) + 60;
    //隨機旋轉 5 ~ 8 秒
    var t = parseInt(Math.random() * 5) + 3;

    arrow.style.transform = "translate(-50%, -50%) " + "rotate(" + rand * deg + "deg)";
    arrow.style.transition = t + "s";

    reset(arrow, num, rand, t, e);
}

//計算並顯示結果後初始化
function reset(arrow, num, rand, t, e) {

    var timer = null;

    //計時器
    timer = setInterval(function () {

        alert("恭喜您抽到了 " + arr[(rand - 1) % num] + " 元！");

        //初始化
        arrow.style.transform = "";
        arrow.style.transition = "";
        e.target.style.display = "";

        //清除計時
        clearInterval(timer);

    }, t * 1000);
}

//註冊監聽事件
function init() {

    var btn = document.getElementById("btn");

    pos();

    btn.addEventListener("click", rand, false);
}

window.onload = init;
