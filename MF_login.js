// ==UserScript==
// @name         MFログイン
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://id.moneyforward.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/karakuri-ai/IDaaS_userscript/main/MF_login.js
// @downloadURL  https://raw.githubusercontent.com/karakuri-ai/IDaaS_userscript/main/MF_login.js
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
        if (typeof(document.getElementsByClassName("_2YH0UDm8 ssoLink")[0]) === "undefined") {location.reload();}
        const loginByEmail = document.getElementsByClassName("_2YH0UDm8 ssoLink").item(0);
        console.log(loginByEmail);
        loginByEmail.click();
    }
})();