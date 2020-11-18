// ==UserScript==
// @name         MFログイン
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://id.moneyforward.com/*
// @grant        none
// @updateURL    https://github.com/karakuri-ai/IDaaS_userscript/MF_login.js
// @downloadURL  https://github.com/karakuri-ai/IDaaS_userscript/MF_login.js
// ==/UserScript==

(function() {
    'use strict';
    const path = location.pathname;
    if (path == "/account_selector") {
        const otherAccount = document.getElementsByClassName("m2Hwu1pT mainNavigationLink _2aYDBMl2 bizDomain")[0];
        console.log(otherAccount);
        otherAccount.click();
    }

    if (path == "/sign_in/new") {
        if (document.getElementsByClassName("_3VvQobr4 title")[0] == undefined) {location.reload();}
        const loginByEmail = document.getElementsByClassName("_1Uh6Qww4 wrapper _1QjLjYWx blockContent")[0].firstElementChild;
        console.log(loginByEmail);
        loginByEmail.click();
    }
})();