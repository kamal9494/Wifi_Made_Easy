// ==UserScript==
// @name         Hostel Wifi
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Easy way to connect Hostel Wifi!
// @author       kamal9494
// @match        https://hfw.vitap.ac.in:8090/httpclient.html
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
window.addEventListener("load", (event) => {

    document.getElementsByClassName('panel panel-primary center-box')[0].setAttribute("style", "width:400px; margin:50px auto; ");
    document.getElementsByClassName('panel-body')[0].setAttribute("style", "width:388px; padding:5px; height : 400px;");

    document.getElementById("headerdiv").remove();
    const st = document.createElement("div");
    const author = document.createElement("a");
    author.setAttribute("style", "margin:5px; margin-left: 10px; font-size:15px;");
    author.setAttribute('target', '_blank');
    author.innerHTML = "code by kamal9494";
    author.href = "https://github.com/kamal9494/Wifi_Made_Easy/blob/main/extension.js";
    const live = document.getElementById("signin-caption");
    st.setAttribute("style", "text-align:center; font-size:30px; display: flex; flex-direction: column;");

    var usr = document.getElementById("username");
    var pwd = document.getElementById("password");
    if (usr.value === '' || pwd === '') {
        usr.value = 'REG_NO';
        pwd.value = 'Password';
    }
    submitRequest();
    let msg = '';
    setInterval(function() {
        if (document.getElementById("statusmessage").className.indexOf("red") != -1) {
            msg = "You are offline STATUS = REJECTED";
            live.innerHTML = "You are OFFLINE";
        } else {
            if (document.getElementById("credentials").className.indexOf("loggedout") != -1) {
                msg = "You are offline STATUS = SIGNED_OUT refresh for auto Sign In";
                live.innerHTML = "You are OFFLINE";
            } else {
                if (document.getElementById("spinner-view").style.display === "block") {
                    msg = "You are in Waiting = WAITING";
                    live.innerHTML = "You are OFFLINE";
                } else {
                    msg = "STATUS = CONNECTED";
                    live.innerHTML = "You are ONLINE";
                }
            }
        }
        st.innerHTML = msg;
        st.append(author);
    }, 1000);
    st.innerHTML = msg;
    document.body.insertBefore(st, document.body.firstChild);
});
