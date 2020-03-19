function showLoginForm() {

    //物件化
    var lightBox = document.getElementById("lightBox");
    var memName = document.getElementById("memName");
    var spanLogin = document.getElementById("spanLogin");

    if (spanLogin.innerHTML == "登入") {

        console.log("點擊登入按鈕");

        lightBox.style.display = "block";

    } else if (spanLogin.innerHTML == "登出") {

        memName.innerHTML = " ";
        spanLogin.innerHTML = "登入";
    }
    //檢查登入bar面版上 spanLogin 的字是登入或登出
    //如果是登入，就顯示登入用的燈箱(lightBox)

    //如果是登出
    //將登入bar面版上，登入者資料清空 
    //spanLogin的字改成登入
    //將頁面上的使用者資料清掉


}

//showLoginForm
function sendForm() {
    //帳號必須是 Sara , 密碼是 111

    //帳密錯誤
    //顯示 帳密錯誤 訊息

    //登入成功
    //登入bar面版上 memName 的字改成會員匿稱

    //登入bar面版上 spanLogin 的字改成登出

    //將登入表單上的資料清空，並隱藏起來

    //物件化
    var memId = document.getElementById("memId");
    var memPsw = document.getElementById("memPsw");
    var memName = document.getElementById("memName");
    var spanLogin = document.getElementById("spanLogin");
    var lightBox = document.getElementById("lightBox");

    //如果帳號是 sara
    if (memId.value == "Sara" && memPsw.value == "111") {

        console.log("登入成功！");

        memName.innerHTML = "董董";
        spanLogin.innerHTML = "登出";
        lightBox.style.display = "none";

        memId.value = "";
        memPsw.value = "";

    } else {

        console.log("登入失敗..");
        alert("帳號或密碼錯誤，請重新再輸入！");

        memId.value = "";
        memPsw.value = "";
    }
}
//檢查輸入資料了沒
function blur() {

    if (this.value == "") {

        this.style.background = "rgba(255, 0, 0, 0.5)";
        
    }else{
        
        this.style.background = "";
    }
}

function cancelLogin() {

    console.log("取消登入頁面");

    var lightBox = document.getElementById("lightBox");
    var memId = document.getElementById("memId");
    var memPsw = document.getElementById("memPsw");

    lightBox.style.display = "none";
    memId.value = "";
    memId.style.background = "";
    memPsw.value = "";
    memPsw.style.background = "";
}

function init() {

    //===設定spanLogin.onclick 事件處理程序是 showLoginForm
    //===設定btnLogin.onclick 事件處理程序是 sendForm
    //===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin

    var spanLogin = document.getElementById("spanLogin");
    var btnLogin = document.getElementById("btnLogin");
    var btnLoginCancel = document.getElementById("btnLoginCancel");
    var memId = document.getElementById("memId");

    //註冊監聽事件
    spanLogin.addEventListener("click", showLoginForm, false);
    btnLogin.addEventListener("click", sendForm, false);
    btnLoginCancel.addEventListener("click", cancelLogin, false);
    memId.addEventListener("blur", blur, false);
    memPsw.addEventListener("blur", blur, false);
};

//window.onload
window.onload = init;
