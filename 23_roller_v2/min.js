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
    var arrows = "";

    //產生num個結構
    for (i = 0; i < num; i++) {

        text += "<span class='num'>" + arr[i] + "</span>";
        arrows += "<div class='arrow'><span class='arrowIcon'></span></div>";

    }
    //輸出結構
    document.getElementById("num-box").innerHTML = text + arrows;

    //物件化
    var pos = document.getElementsByClassName("num");
    var arrows = document.getElementsByClassName("arrowIcon");
    var arrowBox = document.getElementsByClassName("arrow");

    //賦予座標定位
    for (i = 0; i < num; i++) {

        //半徑 * sin(deg) * Math.PI / 180 <-角度轉弧度 = Y軸
        pos[i].style.top = r * Math.sin(deg * (i - 2) * (Math.PI / 180)) + "px";
        //半徑 * cos(deg) * Math.PI / 180 <-角度轉弧度 = X軸
        pos[i].style.left = r * Math.cos(deg * (i - 2) * (Math.PI / 180)) + "px";
        //文字旋轉
        pos[i].style.transform = "translate(-50%, -50%) " + "rotate(" + deg * (i + 1) + "deg)";

        //箭頭的寬度, 直徑 * 角度 * (轉弧度公式) / 4 (左右各半的一半)
        arrows[i].style.borderRight = 2 * r * deg * (Math.PI / 180) / 3 + "px solid rgba(0,0,0,0)";
        arrows[i].style.borderLeft = 2 * r * deg * (Math.PI / 180) / 3 + "px solid rgba(0,0,0,0)";

        //箭頭的位子
        arrowBox[i].style.transform = "translate(-50%, -50%)" + "rotate(" + deg * (i + 1) + "deg)";
    }
}

//當前執行次數的變數
var i = 0;

//亂數
function rand(e) {

    var arrow = document.getElementsByClassName("arrowIcon");

    e.target.style.display = "none";

    //隨機產生60~120次(5~10圈)
    var counts = parseInt(Math.random() * 18) + 12;
    var count = 0;

    timer = setInterval(function () {

        // 1 2 3 4 5 6 7 8 9 10 11 
        if (i % num != 0) {

            arrow[i - 1].style.borderTop = "200px solid pink";
            arrow[i].style.borderTop = "200px solid red";

        } else if (i == 0) {

            // 0
            arrow[i].style.borderTop = "200px solid red";

        } else {

            // 12
            arrow[i - 1].style.borderTop = "200px solid pink";

            i = 0;

            arrow[i].style.borderTop = "200px solid red";
        }

        //如果次數達到目標次數
        if (count == counts) {

            //次數初始化
            count = 0;

            //顯示按鈕
            e.target.style.display = "block";

            //如果是第一個數字
            if (i == 0) {

                //前一個數字(也就是最後一個數字)恢復亮化
                arrow[arr.length - 1].style.borderTop = "200px solid pink";

            } else {

                //如果不是的話就是前一個恢復亮化
                arrow[i - 1].style.borderTop = "200px solid pink";
            }

            //顯示金額
            document.getElementById("show").innerText = "恭喜您抽到 " + arr[i] + " 元！";

            //清除計時
            clearInterval(timer);
        }

        //當一切都執行完後+1
        i++;
        count++;

    }, 100);
}

//註冊監聽事件
function init() {

    var btn = document.getElementById("btn");

    pos();

    btn.addEventListener("click", rand, false);
}

window.onload = init;
